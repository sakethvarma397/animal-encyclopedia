import axios from "axios";
const API_KEY = "6OBwiGeZifb73+AC/LFTXw==0iGBXPMdlSj9iYPB";

export const fetchSpecies = async (animal) => {
  const { data } = await axios.get(
    `https://api.api-ninjas.com/v1/animals?name=${animal}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );
  return data;
};
