import { combineReducers } from 'redux';
import vehicles from './vehiclesReducer';

const rootReducer = combineReducers({
    vehicles
});

export default rootReducer;