import {createService} from '../service';
import {request} from "../request";

type INewsItem = {
  id: number;
  title: string;
  user: string;
  time_ago: string;
}

const fetchNews = async (page: number = 1) => {
  await new Promise(r => setTimeout(r, 1000));
  return request<INewsItem[]>(`news?page=${page}`);
};

export const {loading, error, result, effect} = createService(
  fetchNews,
  [],
  (state, {result, params}) => (params > 1) ? [...state, ...result] : result
);
