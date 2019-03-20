import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {details,displayDetails} from '../Actions/Action'
import {connect} from 'react-redux'
import Table from './Table'


import { Select , DatePicker } from 'antd';
import moment from 'moment';

const {  RangePicker } = DatePicker;

const Option = Select.Option;
const dateFormat = 'YYYY/MM/DD';

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      vehicle_id:null,
      vehicle_no: '',
      start_date: moment().startOf('day'),
      end_date: moment().endOf('day')
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount(){
    this.props.details();
}

handleChange(value) {
  this.setState({vehicle_id: value.key, vehicle_no: value.label})
}

handleDateChange(dates) {
  this.setState({
    start_date: dates[0],
    end_date: dates[1]
  });
}

renderOptions=()=> {
    console.log('vehicles from render', this.props.vehicles);
    return this.props.vehicles.map((vehicle) => { 
      return <option  key={vehicle._id} name="vehicles"  value={vehicle._id}>{vehicle.registration}</option>
    })
  }
  renderByDate = ()=>{
    console.log('vehicles from Date', this.props.vehicles);
    return this.props.vehicles.map((vehicle) => { 
      return <option  key={vehicle._id} name="date" value={vehicle._id}>{vehicle._created}</option>
    })
  }

  handleClick = (e)=>{
    console.log('uftdududdutdudytdytd',e.target.option)
    this.setState({
      // vehicles:e.target.value,
      // date:e.target.value
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div>
      <Select
    name="vehicles" 
    // onChange={this.handleClick}
    showSearch
    style={{ width: 200 }}
    placeholder="Select a Vehicle"
    optionFilterProp="children"
    onChange={this.handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    labelInValue={true}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >{this.renderOptions()}
  </Select>
      
    <RangePicker
      onChange={this.handleDateChange}
      value={[this.state.start_date, this.state.end_date]}
      format={dateFormat}
    >{this.renderByDate()}</RangePicker>
            <Table 
              vehicle_id={this.state.vehicle_id} 
              vehicle_no={this.state.vehicle_no} 
              start_date={this.state.start_date} 
              end_date={this.state.end_date}
              />
      </div>
    )
  }
}

const mapStateToProps = ({ vehicles })=>{
  return { vehicles };
}

export default connect (mapStateToProps,{details,displayDetails})(Navbar)