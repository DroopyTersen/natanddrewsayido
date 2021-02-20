require("dotenv").config();
const fetch = require("node-fetch");
const fs = require("fs");
const parse = require("csv-parse/lib/sync");

const ENDPOINT = "https://natanddrewsayido.hasura.app/v1/graphql";
const INSERT_GUESTS = `mutation InsertGuests($guests:[guests_insert_input!]!) {
    insert_guests(objects: $guests) {
      returning {
        id
        name
        lookup_id
      }
    }
  }
  `;

let hasuraRequest = function (query, variables = {}) {
  return fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());
};

let doIt = async () => {
  let csvText = fs.readFileSync("guests.csv");
  let guests = parse(csvText, {
    columns: true,
    skipEmptyLines: true,
  })
    .map((g) => ({
      ...g,
      level: parseInt(g.Level),
    }))
    .filter((g) => g.address && g.level <= 3)
    .map((g) => {
      let [lookup_id] = g.address.split(" ");
      return {
        name: g.name,
        lookup_id,
      };
    });

  let result = await hasuraRequest(INSERT_GUESTS, { guests });
  console.log(JSON.stringify(result, null, 2));
};

doIt();
