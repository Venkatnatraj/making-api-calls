import { VEHICLE_TEMP } from '../Actions/Constants'


export default function(state = [], action) {
    switch(action.type) {
        case VEHICLE_TEMP:
        return action.payload;
        default:
            return state;
    }
}