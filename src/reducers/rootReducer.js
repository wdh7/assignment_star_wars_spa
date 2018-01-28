import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';
import vehiclesReducer from './vehiclesReducer';


const rootReducer = combineReducers({
  people: peopleReducer,
  planets: planetsReducer,
  vehicles: vehiclesReducer
});

export default rootReducer;
