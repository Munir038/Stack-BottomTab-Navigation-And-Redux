import { SCREEN_COUNT } from './Constants';
const INITIAL_STATE = {
  count: 1,
  data: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCREEN_COUNT:
      return { ...state, count: action.payload };
    //you can add here more caese..

    default:
      return state;
  }
};
