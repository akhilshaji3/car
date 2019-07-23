import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Screen3 extends Component{
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props);
    const {carDetail} = this.props.location.state;    
    return(
      <div className = "screen3-grid-container">
        <div className = "screen3-brands">
        <div className="screen3-brand-container">
        <div className = "screen3-logoContainer">
        <img className = "screen3-brandlogo" src = {carDetail.logo} />        
      </div>
      <div className = "screen3-contentContainer">
      <div className = "screen3-brandName">
        Make: {carDetail.make}
      </div>      
      <div className = "screen3-brandDetails">
        Fuel Type: {carDetail.fuel_type}
      </div>
      <div className = "screen3-brandDetails" >
        Aspiration: {carDetail.aspiration}
      </div>
      <div className = "screen3-brandDetails">
        Number of num_of_doors: {carDetail.num_of_doors}
      </div>
      <div className = "screen3-brandDetails">
        Body Style: {carDetail.body_style}
      </div>
      <div className = "screen3-brandDetails">
        Drive Wheels: {carDetail.drive_wheels}
      </div>
      <div className = "screen3-brandDetails">
        Engine location: {carDetail.engine_location}
      </div>
      <div className = "screen3-brandDetails">
        Wheel base: {carDetail.wheel_base}
      </div>
      <div className = "screen3-brandDetails">
        Length: {carDetail.length}
      </div>
      <div className = "screen3-brandDetails">
        Width: {carDetail.width}
      </div>
      <div className = "screen3-brandDetails">
        Height: {carDetail.height}
      </div>
      <div className = "screen3-brandDetails">
        Curb weight:{carDetail.curb_weight}
      </div>
      <div className = "screen3-brandDetails">
        Engine type:{carDetail.engine_type}
      </div>
      <div className = "screen3-brandDetails">
        Number of cylinders: {carDetail.num_of_cylinders}
      </div>
      <div className = "screen3-brandDetails">
        Engine size: {carDetail.engine_size}
      </div>
      <div className = "screen3-brandDetails">
        Fuel system: {carDetail.fuel_system}
      </div>
      <div className = "screen3-brandDetails">
        Compression ration: {carDetail.compression_ratio}
      </div>
      <div className = "screen3-brandDetails">
        Horse power: {carDetail.horsepower}
      </div>
      <div className = "screen3-brandDetails">
        Peak RPM: {carDetail.peak_rpm}
      </div>
      <div className = "screen3-brandDetails">
        {carDetail.city_mpg}
      </div>
      <div className = "screen3-brandDetails">
        City MPG: {carDetail.highway_mpg}
      </div>
      <div className = "screen3-brandDetails">
        Price: {carDetail.price}
      </div>
      </div>
      
        </div>
        </div>
      </div>

    );
  }
}

export default Screen3;
