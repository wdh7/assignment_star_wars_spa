import {
  FETCHING_PLANETS,
  FETCHING_PLANETS_SUCCESS,
  FETCHING_PLANETS_ERROR
} from '../actions/planetsActions';


const initialState = {
  isFetching: false,
  planets: [],
  error: null
};

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PLANETS:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        planets: action.data
      }
    case FETCHING_PLANETS_ERROR:
     return {
       ...state,
       error: action.error
     }
    default:
      return state;
  }
}


export default planetsReducer;
