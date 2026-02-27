import axios from "axios";

const BASE_URL = "https://test.api.amadeus.com";

const CLIENT_ID = import.meta.env.NfpwVgAzjGk4Tqm6SIF6bQf3sGTreyVF;
const CLIENT_SECRET = import.meta.env.bmcTWM6Dl0sYz1RX;

let accessToken = null;

async function getAccessToken() {
  const response = await axios.post(
    `${BASE_URL}/v1/security/oauth2/token`,
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    })
  );

  accessToken = response.data.access_token;
}

export async function searchLocations(keyword) {
  if (!accessToken) {
    await getAccessToken();
  }

  const response = await axios.get(
    `${BASE_URL}/v1/reference-data/locations`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        keyword,
        subType: "CITY",
      },
    }
  );

  return response.data.data;
}

