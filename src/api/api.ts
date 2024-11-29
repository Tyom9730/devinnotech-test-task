import axios from "axios";

const apiKey = "94bd35bbe8b4ad16febb0f7d73ec19c5";
const url = "https://api.openweathermap.org/data/2.5/weather";
// https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=$%7bAPI_KEY

export const currentWether = axios
  .get(`${url}?q=Yerevan&appid=${apiKey}`)
  .then((res) => res.data)
  .catch((err) => console.log(err));
