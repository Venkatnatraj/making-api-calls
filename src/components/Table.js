import React, { Component } from 'react'
import {connect} from 'react-redux';
import {details} from '../Actions/Action'

class Table extends Component {
    getData = ()=>{
        console.log(this.props.vehicle_id)
        let vec = {};
        this.props.vehicles.map((el)=>{
            if(el._id===this.props.vehicle_id){
                console.log(el)
                    vec=el
            } 
        })
        console.log(vec)
        return vec
    }
  render() {
      let v = this.getData()
      if(typeof v === 'object' && v.hasOwnProperty('registration')){
        return (
            <div>
                {/* <h1>{v.registration}</h1> */}
                
<table style={{width:"600px",height:"auto"}}>
  <tr>
    <th>Date</th>
    <th>Registration</th> 
    <th>Updated</th>
  </tr>
  <tr>
    <td>{v._created}</td>
    <td>{v.registration}</td>
    <td>{v._updated}</td>
  </tr>

</table>
            </div>
        )
      }
    return null
  }
}
const mapStateToProps = ({vehicles})=>{
    return { vehicles };
}

export default connect (mapStateToProps,{details})(Table)


// if(vehicle.registration==="Ford"){
//     return vehicle.registration[0]
//     }
//     else if(vehicle.registration === "Cruze"){
//         return vehicle.registration[1]
//     }
//     else if(vehicle.registration === "APITEST1"){
//         return vehicle.registration[2]
//     }
//     else if(vehicle.registration === "APITEST123"){
//         return vehicle.registration[3]
//     }