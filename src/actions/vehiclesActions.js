export const FETCHING_VEHICLES = 'FETCHING_VEHICLES';
export const FETCHING_VEHICLES_SUCCESS = 'FETCHING-VEHICLES_SUCCESS';
export const FETCHING_VEHICLES_ERROR = 'FETCHING_VEHICLES_ERROR';

//========================
// action creators
//========================

const fetchingVehicles = () => {
  return {
    type: FETCHING_VEHICLES
  };
};

const fetchingVehiclesSuccess = (data) => {
  return {
    type: FETCHING_VEHICLES_SUCCESS,
    data
  };
};

const fetchingVehiclesError = (error) => {
  return {
    type: FETCHING_VEHICLES_ERROR,
    error
  };
};


//========================
// thunk action creator
//========================
export const getInitialVehicles = () => {
  return (dispatch) => {
    // update isFetching
    dispatch(fetchingVehicles());

    // fetch vehicles from SWAPI API
    fetch('https://swapi.co/api/vehicles')
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);

        }
        
        return res.json();
      })
      .then(json => {
        dispatch(fetchingVehiclesSuccess(json.results));
      })
      .catch(err => {
        dispatch(fetchingVehiclesError(err));
      });
  }
}
