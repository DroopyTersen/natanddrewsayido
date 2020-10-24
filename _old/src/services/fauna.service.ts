const FAUNA_KEY = "fnAD4LD1_1ACCIIEBQLBv0x9SOkpmue3zNR05TBd";
const ENDPOINT = "https://graphql.fauna.com/graphql";

export const request = function (query, queryOptions = {}) {
  return fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${FAUNA_KEY}`,
    },
    body: JSON.stringify({ query, ...queryOptions }),
  }).then((res) => res.json());
};

export const gql = (strings) => {
  return strings.join("");
};
