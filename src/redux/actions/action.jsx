export const EMAIL = 'EMAIL';
export const TURNOVER = 'TURNOVER';
export const HEAD = 'HEAD';

export const requiredEmail = (payload) => ({ type: EMAIL, payload });
export const requiredTurnover = (payload) => ({ type: TURNOVER, payload });
export const requiredHead = (payload) => ({ type:HEAD, payload });