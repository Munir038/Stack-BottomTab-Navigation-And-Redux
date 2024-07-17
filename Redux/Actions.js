import { SCREEN_COUNT } from './Constants';

export const updateScreenCount = (count) => (dispatch, getState) => {
  dispatch({ type: SCREEN_COUNT, payload: count });
};
