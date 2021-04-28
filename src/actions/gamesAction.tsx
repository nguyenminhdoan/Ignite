import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action creator
export const loadGames = () => (dispatch: any) => {
  // FETCH API
  return new Promise(async (resolve, reject) => {
    try {
      const popularData = await axios.get(popularGamesURL());
      const upcomingData = await axios.get(upcomingGamesURL());
      const newGamesData = await axios.get(newGamesURL());
      dispatch({
        type: "FETCH_GAMES",
        payload: {
          popular: popularData.data.results,
          upcomingGames : upcomingData.data.results,
          newGames : newGamesData.data.results,
          
        },
      });
      resolve(popularData);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
