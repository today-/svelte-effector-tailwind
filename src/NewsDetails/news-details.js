import {createService} from '../service';
import {request} from "../request";

const fetchDetails = (id) => request(`item/${id}`);

export const {loading, error, result, effect} = createService(fetchDetails, {});
