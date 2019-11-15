import {createService} from '../service';
import {request} from "../request";

const fetchNews = async (page = 1) => {
  await new Promise(r => setTimeout(r, 1000));
  return request(`news?page=${page}`);
};

export const {loading, error, result, effect} = createService(
  fetchNews,
  [],
  (state, {result, params}) => (params > 1) ? [...state, ...result] : result
);
