import { 
  UNTREATEDNUM,
  UNTREATEDSTATUS,
} from '../types/hr';

export default {
  [UNTREATEDNUM] (state, { untreated }) {
    state.untreated = untreated;
  },
  [UNTREATEDSTATUS] (state, status) {
    state.untreatedStatus = status;
  },
}