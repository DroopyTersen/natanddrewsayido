import { gql, request } from "./fauna.service";

export interface Guest {
  _id: String;
  id: String;
  name: String;
  address?: String;
  city?: String;
  state?: String;
  zipcode?: String;
  phone?: String;
  email?: String;
  surveyRsvp?: Number;
  attendanceCount?: Number;
}
const GET_ALL_GUESTS = gql`
  query GET_ALL_GUESTS {
    guests {
      data {
        name
        _id
        id
      }
    }
  }
`;
export const getAllGuests = async () => {
  console.log("getAllGuests -> GET_ALL_GUESTS", GET_ALL_GUESTS);
  let { data } = await request(GET_ALL_GUESTS);
  return data.guests.data as Guest[];
};
