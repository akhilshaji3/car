import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Screen2.css';

class Screen2 extends Component {
  constructor(props){
    super(props);
    this.state = {
        brandCarlist: [],
    }
  }
  componentDidMount(){ 
    
  }

  render(){        
    console.log(this.props)
    const { carList } = this.props.location.state
     return(
       <div className = "screen2-grid-container">
         { carList.map((car) => {
           return <div className = "screen2-brands">
             <Link to={{
            pathname: '/car',
            state: {
              carDetail: car
            }
          }}>
            <div className="screen2-brand-container">
              <div className = "screen2-logoContainer">
              <img className = "screen2-brandlogo" src= {car.logo} />
              </div>
              <div className = "screen2-contentContainer">
              <h3 className = "screen2-brandName">Brand name: {car.make}</h3>
              <div className = "screen2-brandDetails">Fuel type: {car.fuel_type}</div> 
              <div className = "screen2-brandDetails">Aspiration: {car.aspiration}</div> 
              <div className = "screen2-brandDetails">Car body type: {car.body_style}</div> 
                
              </div>               
              </div>                
           </Link>
           </div>
           
         })
       } 
       </div>
     );
  }
}

export default Screen2;
