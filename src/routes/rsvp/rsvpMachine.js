import { Machine, assign } from "xstate";

const baseUrl = "https://droopytersen-natandrewsayido.builtwithdark.com";
async function lookupGuest(streetNumber) {
  let url = baseUrl + `/lookupGuest?lookupId=` + streetNumber;

  let result = await fetch(url).then((resp) => resp.json());
  console.log(result);
  return result.data.guests;
}
const setCachedGuest = (context) => {
  if (context.guest) {
    localStorage.setItem("rsvp-guest", JSON.stringify(context.guest));
  }
};
const clearCachedGuest = () => {
  localStorage.setItem("rsvp-guest", "");
};
const getCachedGuest = () => {
  try {
    return JSON.parse(localStorage.getItem("rsvp-guest")) || null;
  } catch (err) {
    return null;
  }
};
async function submitRsvp(rsvp) {
  let url = baseUrl + "/submitRsvp";
  let result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(rsvp),
    headers: { "content-type": "application/json" },
  }).then((resp) => resp.json());
  return result.data.rsvp;
}

const checkHasResponded = (c) => c.guest && c.guest.rsvp;
const checkHasNotResponded = (c) => c.guest && !c.guest.rsvp;
const checkAlreadyChosen = (c) => c.guest;

export const rsvpMachine = Machine({
  id: "rsvp",
  initial: "unknown",
  context: {
    results: null,
    guest: null,
    error: "",
  },
  states: {
    unknown: {
      entry: assign({
        results: () => null,
        guest: () => null,
      }),
      on: {
        // if there was a cached guest, they've already responded,
        "": [{ target: "responded", cond: checkHasResponded }],
        FIND: "finding",
      },
    },
    finding: {
      invoke: {
        id: "lookupGuest",
        src: (context, event) => lookupGuest(event.lookupId),
        onDone: {
          target: "choosing",
          actions: assign({
            // store the results in context
            results: (_, event) => event.data,
            // if there was only one result, set the guest
            guest: (_, event) =>
              event.data.length === 1 ? event.data[0] : null,
          }),
        },
        onError: {
          target: "errored",
          actions: assign({
            error: (_, event) => event.data.message,
          }),
        },
      },
    },
    choosing: {
      on: {
        // Auto choose if only one choice
        "": [{ target: "checkingRsvp", cond: checkAlreadyChosen }],
        // Set the guest in context using passed index
        CHOOSE: {
          target: "checkingRsvp",
          actions: assign({
            guest: (context, event) => event.guest,
          }),
        },
        START_OVER: "unknown",
      },
    },
    // Transient State
    // The guest has been selected, see if they've already responded.
    checkingRsvp: {
      on: {
        "": [
          {
            target: "unresponded",
            cond: checkHasNotResponded,
          },
          {
            target: "responded",
            cond: checkHasResponded,
            actions: [setCachedGuest],
          },
        ],
      },
    },
    unresponded: {
      on: {
        SUBMIT: "submitting",
        START_OVER: { target: "unknown", actions: [clearCachedGuest] },
      },
    },
    submitting: {
      invoke: {
        id: "submitRsvp",
        src: (context, event) => submitRsvp(event.rsvp),
        onDone: {
          target: "responded",
          actions: [
            assign({
              guest: (context, event) => ({
                ...context.guest,
                rsvp: event.data,
              }),
            }),
            setCachedGuest,
          ],
        },
        onError: {
          target: "errored",
          actions: assign({
            error: (_, event) => event.data.message,
          }),
        },
      },
    },
    responded: {
      on: {
        START_OVER: { target: "unknown", actions: [clearCachedGuest] },
      },
    },
    errored: {
      on: {
        START_OVER: { target: "unknown", actions: [clearCachedGuest] },
      },
    },
  },
});

export default rsvpMachine;
