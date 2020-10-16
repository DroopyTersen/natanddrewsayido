import { gql, request } from "./fauna.service";
import * as Papa from "papaparse";

export interface Guest {
  _id?: String;
  code: String;
  name: String;
  surveyRsvp?: Number;
  attendanceCount?: Number;
}

const GET_ALL_GUESTS = gql`
  query GET_ALL_GUESTS {
    guests {
      data {
        name
        _id
        code
        surveyRsvp
        attendanceCount
      }
    }
  }
`;

export const getAllGuests = async () => {
  console.log("getAllGuests -> GET_ALL_GUESTS", GET_ALL_GUESTS);
  let { data } = await request(GET_ALL_GUESTS);
  return data.guests.data as Guest[];
};

const createGuest = async (guest: Guest) => {
  let gql = `
    mutation CREATE_GUEST {
        createGuest(data:{
          code: "${guest.code}",
          name:"${guest.name}",
        }) {
          _id
          name
          code
        }
      }
    `;
  let { data } = await request(gql);
  return data.createGuest;
};

const updateGuest = async (id, guest: Guest) => {
  let gql = `
      mutation UPDATE_GUEST {
          updateGuest( id: ${id}, data:{
            code: "${guest.code}",
            name:"${guest.name}",
          }) {
            _id
            name
            code
          }
        }
      `;
  let { data } = await request(gql);
  return data.updateGuest;
};

export const importGuests = async (guests: Guest[]) => {
  let existingGuests = await getAllGuests();
  await Promise.all(
    guests.map((guest) => {
      let existing = existingGuests.find((g) => g.code === guest.code);
      if (existing) {
        return updateGuest(existing._id, guest);
      } else {
        return createGuest(guest);
      }
    })
  );
};
