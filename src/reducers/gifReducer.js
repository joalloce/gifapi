import { GET_GIFS } from "../actions/types";
const initialState = {
  gifs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        gifs: action.payload
      };
    default:
      return state;
  }
}
