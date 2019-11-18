import {createService} from '../service';
import {request} from '../request';

type INewsDetails = {
  id: string;
  title: string;
  user: string;
  time_ago: string;
  comments_count: number;
  comments: IComment[];
};

type IComment = {
  id: string;
  user: string;
  time_ago: string;
  comments: IComment[];
}

const fetchDetails = (id: string) => request<INewsDetails>(`item/${id}`);

export const {loading, error, result, effect} = createService(fetchDetails, {} as INewsDetails);
