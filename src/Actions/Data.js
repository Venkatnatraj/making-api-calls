import {
    VEHICLE_ID,
    VEHICLE_NO,
    START_DATE,
    END_DATE 
} from './Constants';

import axios from 'axios';

export function vehicleId(){
    return function(dispatch){
        // dispatch(requestVehicle())
        return axios.get('/api/vehicle?projection={"registration":1}',{headers:{'Authorization':"Basic dGhhbm1haUBpb3RybC5pbzppb3RybEB0aGFubWFp"}})
            .then((res) => {
                console.log('res', res);
                dispatch({
                    type: VEHICLE_ID,
                    payload: res.data._items
                })
            })
    }
}

export function vehicleNo(){
    return function(dispatch){
        // dispatch(requestVehicle())
        return axios.get('/api/vehicle?projection={"registration":1}',{headers:{'Authorization':"Basic dGhhbm1haUBpb3RybC5pbzppb3RybEB0aGFubWFp"}})
            .then((res) => {
                console.log('res', res);
                dispatch({
                    type: VEHICLE_NO,
                    payload: res.data._items.category
                })
            })
    }
}

export function startDate(){
    return function(dispatch){
        // dispatch(requestVehicle())
        return axios.get('/api/vehicle?projection={"registration":1}',{headers:{'Authorization':"Basic dGhhbm1haUBpb3RybC5pbzppb3RybEB0aGFubWFp"}})
            .then((res) => {
                console.log('res', res);
                dispatch({
                    type: START_DATE,
                    payload: res.data._items
                })
            })
    }
}

export function endDate(){
    return function(dispatch){
        // dispatch(requestVehicle())
        return axios.get('/api/vehicle?projection={"registration":1}',{headers:{'Authorization':"Basic dGhhbm1haUBpb3RybC5pbzppb3RybEB0aGFubWFp"}})
            .then((res) => {
                console.log('res', res);
                dispatch({
                    type: END_DATE,
                    payload: res.data._items
                })
            })
    }
}