import * as types from './types';

export function nextPage() {
  return {
    type: types.NEXT_PAGE
  };
}

export function prevPage() {
  return {
    type: types.PREV_PAGE
  };
}
