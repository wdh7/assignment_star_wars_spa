export const FETCHING_PLANETS = 'FETCHING_PLANETS';
export const FETCHING_PLANETS_SUCCESS = 'FETCHING_PLANETS_SUCCESS';
export const FETCHING_PLANETS_ERROR = 'FETCHING_PLANETS_ERROR';

//========================
// action creators
//========================
const fetchingPlanets = () => {
  return {
    type: FETCHING_PLANETS
  };
};

const fetchingPlanetsSuccess = (data) => {
  return {
    type: FETCHING_PLANETS_SUCCESS,
    data
  };
};

const fetchingPlanetsError = (error) => {
  return {
    type: FETCHING_PLANETS_ERROR,
    error
  };
};


//========================
// thunk action creator
//========================
export const getInitialPlanets = () => {
  return (dispatch) => {
    // set isFetching to true
    dispatch(fetchingPlanets());

    // fetch planets from SWAPI API
    fetch('https://swapi.co/api/planets')
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        }

        return res.json();
      })
      .then(json => {
        dispatch(fetchingPlanetsSuccess(json.results));
      })
      .catch(err => {
        dispatch(fetchingPlanetsError(err));
      });
  }
}
