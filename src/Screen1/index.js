import React, {Component} from 'react';
import {carList} from '../API/car';
import {Link} from 'react-router-dom';


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
                    sortedList.push({brand: car.make, logo: car.logo});
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
        var result = tempList.filter(obj => (obj.make === brand));
        this.setState({brandWiseCars: result});
    }

    render(){
        return (
            <div className="App">
              {this.state.brands.map((brand) =>{
                  return <Link to="/make" carList = {this.state.brandWiseCars} onClick = {() => this.sortCarByBrand(brand.brand)}>
                      <div>{brand.brand}</div>
                  <img src= {brand.logo} />
                  </Link>                  
              })
            }
            </div>
          );
    }
  
}

export default Screen1;
