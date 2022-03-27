import axios from "axios";

const API_ENDPOINT = "http://www.omdbapi.com/?i=tt3896198&apikey=9b8bdd83";

export const fetchMovies = async (movieName) =>
  await axios.get(`${API_ENDPOINT}&s=${movieName}`);

export const fetchMovie = async (movieId) =>
  await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=9b8bdd83`);
