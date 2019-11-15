import {createService} from '../service';
import {request} from '../request';

type INewsDetails = {
  id: string;
  title: string;
  points: number;
  user: string;
  time_ago: string;
  type: string;
  url: string;
  domain: string;
  comments: any[];
};

const fetchDetails = (id: string) => request<INewsDetails>(`item/${id}`);

export const {loading, error, result, effect} = createService(fetchDetails, {} as INewsDetails);
