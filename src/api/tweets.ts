import axios from "axios";

export const getTweet = async () => {
  const res = await axios.get("https://backend/api/tweets");

  return res.data;
};
