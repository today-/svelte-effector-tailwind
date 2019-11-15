import { createServiceStore, createServiceEffect } from './service';

export const getNews = createServiceEffect(() =>
  fetch(`https://node-hnapi.herokuapp.com/news?page=1`).then(r => r.json())
);

export const news = createServiceStore(getNews, []);
