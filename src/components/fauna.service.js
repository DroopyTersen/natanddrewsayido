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

export const submitSurvey = async ({name, value}) => {
    let gql = `
        mutation SUBMIT_SURVEY {
            createSurveyResponse( data: {
                name: "${name}",
                value:${value},
                timestamp: "${(new Date()).toISOString()}"
            }) {
                _id
                name
                value
            }
        }
        `;
    let { data, errors } = await request(gql);
    if (errors) {
      console.error("submitSurvey:", errors);
      throw new Error("Unable to submit the survey result");
    }
    if (data && data.createSurveyResponse) {
      return data.createSurveyResponse
    }
  };