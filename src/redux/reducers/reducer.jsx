import {
  ITEMS,
  TURNOVER,
  HEAD,
} from '../actions/action';

const INICIAL_STATE = {
  items: [],
  turnover: [],
  head: [],
};

const reducerFetch = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
  case ITEMS: return ({ ...state, items: payload });
  case TURNOVER: return ({ ...state, turnover: payload });
  case HEAD: return ({ ...state, head: payload });
  default: return state;
  }
};

export default reducerFetch;
