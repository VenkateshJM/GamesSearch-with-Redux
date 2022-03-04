import axios from "axios";
import {
  popularGamesURL,
  upcoming_GamesURL,
  new_GamesURL,
  searchGameURL,
} from "../Api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcoming_GamesURL());
  const newGamesData = await axios.get(new_GamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(name));

  console.log(searchGames);
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
