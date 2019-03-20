import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {details} from './Actions/Action';
import {displayDetails} from './Actions/Action'
import Table from './components/Table'
import Date from './components/Date';
import Navbar from './components/Navbar';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      vehicles:null,
      date:null


    }
    // this.handleClick=this.handleClick.bind(this)
  }


  componentDidMount(){
    // axios.get('/api/vehicle',{headers:{'Authorization':"Basic dGhhbm1haUBpb3RybC5pbzppb3RybEB0aGFubWFp"}})
    //     .then(json=>console.log(json.data._items[0]))
    this.props.details();
    
}



  // renderOptions=()=> {
  //   console.log('vehicles from render', this.props.vehicles);
  //   return this.props.vehicles.map((vehicle) => { 
  //     return <option  key={vehicle._id}  value={vehicle._id}>{vehicle.registration}</option>
  //   })
  // }
  // renderByDate = ()=>{
  //   console.log('vehicles from Date', this.props.vehicles);
  //   return this.props.vehicles.map((vehicle) => { 
  //     return <option  key={vehicle._id}  value={vehicle._id}>{vehicle._created}</option>
  //   })
  // }

  // handleClick = (e)=>{
  //   console.log('uftdududdutdudytdytd',e.target.option)
  //   this.setState({
  //     // vehicles:e.target.value,
  //     // date:e.target.value
  //     [e.target.name]:e.target.value
  //   })
  // }

  render() {
    return (
      <div className="App">
        {/* <select name="vehicles" onChange={this.handleClick}>
          <option value={null}></option>
          {this.renderOptions()}
        </select>
        <select name="date" onChange={this.handleClick}>
          <option value={null}></option>
          {this.renderByDate()}
        </select> */}
        <Navbar/>
        <Table vehicle={this.state.vehicles}/>
        <Date date={this.state.date}/>
      </div>
    );
  }
}

const mapStateToProps = ({ vehicles })=>{
  return { vehicles };
}



export default connect (mapStateToProps,{details,displayDetails})(App);
