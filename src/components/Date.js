import React, { Component } from 'react'
import {connect} from 'react-redux';
import {details} from '../Actions/Action'

class Date extends Component {
    getDate = ()=>{
        console.log("Date:",this.props.date)
        let dot = {};
        this.props.vehicles.map((ne)=>{
            if(ne._id === this.props.date){
            console.log(ne)
            dot = ne
            }
            return dot
        })
        }
    render() {
        let ve = this.getDate()
        if(typeof ve === 'object' && ve.hasOwnProperty('_created')){
        return (
            <div>
                {/* <h1>{v.registration}</h1> */}
                
<table style={{width:"auto",height:"auto"}}>
    <tr>
        <th>Date</th>
        <th>Registration</th> 
        <th>Updated</th>
    </tr>
    <tr>
        <td>{ve._created}</td>
        <td>{ve.registration}</td>
        <td>{ve._updated}</td>
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

export default connect (mapStateToProps,{details})(Date)

