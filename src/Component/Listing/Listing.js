import React,{Component} from 'react';
import axios from 'axios';
import './Listing.css';
import ListingDisplay from './ListingDisplay';
import CuisineFilter from '../Filter/CuisineFilter';
import CostFilter from '../Filter/CostFilter';
import Header from '../../header';

const restUrl = 'https://jomato-server.onrender.com/restaurants?meal_id='

class Listing extends Component {
     constructor(props){
          super(props)

          this.state={
               restaurants:''
          }
     }

     setDatPerFilter = (data) => {
          this.setState({restaurants:data})
     }


     render(){
          return(
               <>
                    <Header/>
                    <div className='container-fluid'>
                         <div className='row'>
                              <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 filter'>
                                   <h3 id='filt'>
                                        FILTERS
                                   </h3>
                                   <CuisineFilter restPerCuisine={(data) => {this.setDatPerFilter(data)}}/>
                                   <CostFilter restPerCost={(data) => {this.setDatPerFilter(data)}}/>
                              </div>
                              <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
                                   <ListingDisplay listData={this.state.restaurants}/>
                              </div>
                         </div>
                    </div>
               </>
          )
     }

     componentDidMount(){
          let mealId = this.props.match.params.id?this.props.match.params.id:1
          sessionStorage.setItem('mealId',mealId)
          axios.get(`${restUrl}${mealId}`)
          .then((res) => {this.setState({restaurants:res.data})})
     }
}

export default Listing;