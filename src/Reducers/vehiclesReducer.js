import { VEHICLE_LIST, VEHICLE_ID, VEHICLE_NO, START_DATE, END_DATE } from '../Actions/Constants';

export default function(state = [], action) {
    switch(action.type) {
            case VEHICLE_LIST:
            return action.payload;

            case VEHICLE_ID:
            return action.payload;

            case VEHICLE_NO:
            return action.payload;

            case START_DATE:
            return action.payload;

            case END_DATE:
            return action.payload;

        default:
            return state;
    }
}

