import React, {Component} from 'react';
import {carList} from '../API/car';
import {Link} from 'react-router-dom'; 
import './Screen1.css';


class Screen1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            brands: [],
            brandWiseCars: [],
            carList: [],
        }
    }
    componentDidMount(){               
        carList().then(response => {
             this.setState({ carList: response || []})
             var sortedListOfMake = [];
             var sortedList = [];
            for(let car of response){
                if(sortedListOfMake.indexOf(car.make) == -1)
                {
                    sortedListOfMake.push(car.make)
                    sortedList.push({brand: car.make, logo: car.logo, cars: this.sortCarByBrand(car.make)});
                }
                
            }
            console.log(sortedList);
            this.setState({brands: sortedList});
            //console.log(response)
        })
    }

    sortCarByBrand(brand){
        //alert(brand);
        var result = [];
        var tempList = this.state.carList;
        result = tempList.filter(obj => (obj.make === brand));
        return result;
    }

    render(){
        return (
            <div className="screen1-grid-container">
              {this.state.brands.map((brand) =>{
                  console.log(brand);
                  return <div className = "screen1-brands">
                      <Link className = "remove-link" to={{
                    pathname: '/make',
                    state: {
                      carList: brand.cars
                    }
                  }} >
                      <div className="screen1-brand-container">
                      <img className = "screen1-brandlogo" src= {brand.logo} />
                      <h3 className = "screen1-brandName">{brand.brand}</h3>
                      </div>
                                        
                  </Link> 
                  </div>                                   
              })
            }
            </div>
          );
    }
  
}

export default Screen1;
