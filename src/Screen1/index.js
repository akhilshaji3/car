import React, {Component} from 'react';
import {carList} from '../API/car';
import {Link} from 'react-router-dom';


class Screen1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            brands: [],

        }
    }
    componentDidMount(){               
        carList().then(response => {
            var sortedListOfMake = [];
            var sortedList = [];
            for(let car of response){
                if(sortedListOfMake.indexOf(car.make) == -1)
                {
                    sortedListOfMake.push(car.make)
                    sortedList.push({brand: car.make, logo: car.logo});
                }
                
            }
            console.log(sortedList);
            this.setState({brands: sortedList});
            //console.log(response)
        })
    }

    render(){
        return (
            <div className="App">
              {this.state.brands.map((brand) =>{
                  return <Link to="/make">
                      <div>{brand.brand}</div>
                  <div>{brand.logo}</div>
                  </Link>                  
              })
            }
            </div>
          );
    }
  
}

export default Screen1;
