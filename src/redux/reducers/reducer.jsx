import {
  EMAIL,
  TURNOVER,
  HEAD,
} from '../actions/action';

const INICIAL_STATE = {
  email: '',
  turnover: [],
  head: [],
};

const reducerFetch = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
  case EMAIL: return ({ ...state, email: payload });
  case TURNOVER: return ({ ...state, turnover: payload });
  case HEAD: return ({ ...state, head: payload });
  default: return state;
  }
};

export default reducerFetch;
