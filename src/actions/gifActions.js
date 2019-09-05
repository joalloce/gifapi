import axios from "axios";
import { GET_GIFS } from "./types";
import {api_key} from "../config"


export const getGifs = (query) => dispatch => {
  axios
  .get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=25`)
  .then(res => {
    dispatch({
      type: GET_GIFS,
      payload: res.data.data
    })
  })
  .catch(err => console.log(err));
};

export const getGifsTrending = () => dispatch => {
  axios
  .get(`http://api.giphy.com/v1/gifs/trending?api_key=${api_key}`)
  .then(res => {
    dispatch({
      type: GET_GIFS,
      payload: res.data.data
    })
  })
  .catch(err => console.log(err));
};