import axios from 'axios'

import { VEHICLE_LIST, VEHICLE_TEMP } from './Constants';

export const Request_Vechicle = 'Request_Vechicle'
export const Registration_Id = 'Registration_Id'
export const Fuel_Capacity = 'Fuel_Capacity'

export function requestVehicle (){
    return{
        type:Request_Vechicle,
        
    }
}

export function registrationId(){
    return{
        type:Registration_Id,
        
    }
}

export function fuelCapacity(percentage){
    return{
        type:Fuel_Capacity,
        payload: percentage
    }
}

export function details(){
    return function(dispatch){
        // dispatch(requestVehicle())
        return axios.get('/api/vehicle?projection={"registration":1}',{headers:{'Authorization':"Basic dGhhbm1haUBpb3RybC5pbzppb3RybEB0aGFubWFp"}})
            .then((res) => {
                console.log('res', res);
                dispatch({
                    type: VEHICLE_LIST,
                    payload: res.data._items
                })
            })
    }
}

export function displayDetails(){
    return function (dispatch){
    return axios.get('/api/vehicle?projection={"registration":1}',{headers:{'Authorization':"Basic dGhhbm1haUBpb3RybC5pbzppb3RybEB0aGFubWFp"}})
            .then((res) => {
                console.log('res', res);
                dispatch({
                    type: VEHICLE_TEMP,
                    payload: res.data._items
                })
            })
    }
}
