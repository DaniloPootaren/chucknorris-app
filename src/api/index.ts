import axios from 'axios';
import {BASE_URL} from '../shared/constants/url';
import {Category, Joke} from '../shared/models';

const getRandomJoke = (): Promise<{data: Joke}> => {
  return axios.get(`${BASE_URL}/jokes/random`);
};

const getRandomJokeByCategory = (): Promise<{data: Joke}> => {
  return axios.get(`${BASE_URL}/jokes/random?category={category}`);
};

const getCategories = (): Promise<{data: Category[]}> => {
  return axios.get(`${BASE_URL}/jokes/categories/`);
};

const searchJokes = (): Promise<{data: Joke}> => {
  return axios.get(`${BASE_URL}/jokes/search?query={query}`);
};

export const api = {
  getRandomJoke,
  getRandomJokeByCategory,
  getCategories,
  searchJokes,
};
