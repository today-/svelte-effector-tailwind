import {createService} from '../service';
import {request} from "../request";

const fetchDetails = async (id) => {
  return request(`item/${id}`);
};

export const {loading, error, result, effect} = createService(fetchDetails, {});
