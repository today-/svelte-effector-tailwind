import { createService } from '../service';

const fetchNews = async (page = 1) => {
  await new Promise(r => setTimeout(r, 1000));
  return fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`).then(r => r.json());
};

export const {loading, error, result, effect} = createService(fetchNews, []);
