export const FETCHING_PEOPLE = 'FETCHING_PEOPLE';
export const FETCHING_PEOPLE_SUCCESS = 'FETCHING_PEOPLE_SUCCESS';
export const FETCHING_PEOPLE_ERROR = 'FETCHING_PEOPLE_ERROR';

// returns an action that will
// update isFetching to true
const fetchingPeople = () => {
  return {
    type: FETCHING_PEOPLE
  };
};

// returns an action that will
// add people data to redux store, and
// change isFetching to false
const fetchingPeopleSuccess = (data) => {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    data
  };
};

// return an action that will
// update error with error response, and
// change isFetching to false
const fetchingPeopleError = (error) => {
  return {
    type: FETCHING_PEOPLE_ERROR,
    error
  };
};


// thunk action creator that returns function
export const getInitialPeople = () => {
  return (dispatch) => {

    // dispatch action to show loading ui
    dispatch(fetchingPeople());

    // fetch the people from SWAPI API
    // then if successful, dispatch action
    // to update redux store with new people
    fetch('https://swapi.co/api/people')
      .then(res => {
        // if response is not desired response: 400 - 500
        if (!res.ok) {
          // show error
          throw new Error(`${res.status}: ${res.statusText}`);
        }

        // return response body if successful
        return res.json();
      })
      .then(json => {
        // update redux store with people
        dispatch(fetchingPeopleSuccess(json.results));
      })
      .catch(err => {
        // log error
        dispatch(fetchingPeopleError(err));
      });
  }
};
