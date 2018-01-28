import {
  FETCHING_VEHICLES,
  FETCHING_VEHICLES_SUCCESS,
  FETCHING_VEHICLES_ERROR
} from '../actions/vehiclesActions';


const initialState = {
  isFetching: false,
  vehicles: [],
  error: null
};

const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_VEHICLES:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_VEHICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        vehicles: action.data
      }
    case FETCHING_VEHICLES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}


export default vehiclesReducer;
