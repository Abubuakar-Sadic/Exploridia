import axios from "axios";

const BASE_URL = "https://test.api.amadeus.com";

const CLIENT_ID = import.meta.env.VITE_AMADEUS_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_AMADEUS_CLIENT_SECRET;

let accessToken = null;

// Get API Token
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

// Search Cities
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



// Fetch Flight Offers
export async function getFlightOffers(destinationCode) {

  if (!accessToken) {
    await getAccessToken();
  }

  try {

    const response = await axios.get(
      `${BASE_URL}/v2/shopping/flight-offers`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          originLocationCode: "LON",
          destinationLocationCode: destinationCode,
          departureDate: "2025-12-01",
          adults: 1,
          max: 5,
        },
      }
    );

    return response.data.data;

  } catch (error) {
    console.error("Flight API Error:", error.response?.data || error.message);
    throw error;
  }

}

export async function getHotels(cityCode) {

  if (!accessToken) {
    await getAccessToken();
  }

  try {

    const response = await axios.get(
      `${BASE_URL}/v1/reference-data/locations/hotels/by-city`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          cityCode: cityCode,
        },
      }
    );

    return response.data.data;

  } catch (error) {

    console.error("Hotel API Error:", error.response?.data || error.message);
    throw error;

  }

}





