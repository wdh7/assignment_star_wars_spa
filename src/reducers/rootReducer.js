import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';


const rootReducer = combineReducers({
  people: peopleReducer,
  planets: planetsReducer
});

export default rootReducer;
