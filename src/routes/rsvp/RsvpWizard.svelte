<script>
  import GuestLookup from "./wizard/GuestLookup.svelte";
  import { interpret } from "xstate";
  import rsvpMachine from "./rsvpMachine";
  import ChooseGuest from "./wizard/ChooseGuest.svelte";
  import ResponseDisplay from "./wizard/ResponseDisplay.svelte";
  import RsvpForm from "./wizard/RsvpForm.svelte";

  let current;
  const { send } = interpret(rsvpMachine)
    .onTransition((state) => {
      console.log("HERE", state);
      current = state;
    })
    .start();
</script>

<div class="wizard">
  {#if current.matches("unknown")}
    <GuestLookup
      disabled={current.matches("finding")}
      onLookup={(streetNumber) =>
        send({ type: "FIND", lookupId: streetNumber })}
    />
  {:else if current.value === "finding"}
    <h4>Searching...</h4>
  {:else if current.value === "choosing"}
    <ChooseGuest
      guests={current.context.results || []}
      onChoose={(guest) => send({ type: "CHOOSE", guest })}
      cancel={() => send("START_OVER")}
    />
  {:else if current.value === "unresponded"}
    <RsvpForm
      guest={current.context.guest}
      cancel={() => send("START_OVER")}
      submit={(rsvp) => send({ type: "SUBMIT", rsvp })}
    />
  {:else if current.value === "submitting"}
    <h4>Submitting your response...</h4>
  {:else if current.value === "responded"}
    <ResponseDisplay guest={current.context.guest || {}} />
    <button class="primary" on:click={() => send("START_OVER")}
      >Start over</button
    >
  {:else}
    <span
      >Uh oh. something went wrong. You shouldn't be seeing this. State={current.value}</span
    >
  {/if}
</div>

<style>
  .wizard {
    background: var(--lightGrey);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
</style>
