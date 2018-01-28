import {
  FETCHING_PEOPLE,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_ERROR
} from '../actions/peopleActions';



const initialState = {
  isFetching: false,
  people: [],
  error: null
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PEOPLE:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        people: action.data
      }
    case FETCHING_PEOPLE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}


export default peopleReducer;
