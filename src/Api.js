import date from "date-and-time";

const base_url2 = `https://api.rawg.io/api/`;
const base_url = `https://api.rawg.io/api/games?key=cd3d31dcd288430f8bd1fcadf67a4ca0`;

const now = new Date();

const currentMonth = date.format(now, "MM");
const currentDay = date.format(now, "DD");
const currentYear = date.format(now, "YYYY");

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const nextYear = date.addYears(now, 1);
const lastYearFormat = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDate = date.format(nextYear, "YYYY-MM-DD");

const popular_Games = `&dates=${lastYearFormat},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_Games = `&dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`;
const new_Games = `&dates=${lastYearFormat},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_Games}`;
export const upcoming_GamesURL = () => `${base_url}${upcoming_Games}`;
export const new_GamesURL = () => `${base_url}${new_Games}`;
export const gameDetailURL = (game_id) =>
  `${base_url2}games/${game_id}?key=cd3d31dcd288430f8bd1fcadf67a4ca0`;
export const gameScreenShotURL = (game_id) =>
  `${base_url2}games/${game_id}/screenshots?key=cd3d31dcd288430f8bd1fcadf67a4ca0`;

export const searchGameURL = (game_name) =>
  `https://api.rawg.io/api/games?key=cd3d31dcd288430f8bd1fcadf67a4ca0&search=${game_name}&page_size=10`;

console.log(searchGameURL);
