import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '7c5d8002fbbd5b76a32e331288c58dfe';

export const trendingMovie = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return data;
};

export const searchMovie = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}`
  );
  return data.results;
};

export const getMovieDetails = async id => {
  return await axios.get(`/movie/${id}?api_key=${KEY}`);
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${KEY}`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${KEY}`);
  return data.results;
};
