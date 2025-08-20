import axios from "axios";
import { encodeBase64 } from "./helpers/config.helper";

export const getAccessToken = async () => {
  try {
    const authHeader = `Basic ${encodeBase64(
      `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
    )}`;
    const response = await axios.post(process.env.REACT_APP_AUTH_URL, null, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authHeader,
      },
      params: {
        grant_type: "client_credentials",
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
};

export const getHeaders = async () => {
  const accessToken = await getAccessToken();
  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
};
