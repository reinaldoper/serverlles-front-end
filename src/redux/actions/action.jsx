export const ITEMS = 'ITEMS';
export const TURNOVER = 'TURNOVER';
export const HEAD = 'HEAD';

export const requiredItems = (payload) => ({ type: ITEMS, payload });
export const requiredTurnover = (payload) => ({ type: TURNOVER, payload });
export const requiredHead = (payload) => ({ type:HEAD, payload });