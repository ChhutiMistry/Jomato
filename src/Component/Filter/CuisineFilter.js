import React,{Component} from 'react';
import axios from 'axios';
import './Filter.css';

const url = 'https://jomato-server.onrender.com/filters/'

class CuisineFilter extends Component{

     filterCuisine = (event) => {
          let mealId = sessionStorage.getItem('mealId');
          let cuisineId = event.target.value;
          let cuisineUrl = ''
          if(cuisineId === ''){
          cuisineUrl = `${url}${mealId}`
          }else{
          cuisineUrl = `${url}${mealId}?cuisineId=${cuisineId}`
          }
          axios.get(cuisineUrl)
          .then((res) => {this.props.restPerCuisine(res.data)})
     }

     render(){
          return(
               <>
                    <p id='cuisinef'>
                         Cuisine Filter
                    </p>
                    <div onChange={this.filterCuisine}>
                         <div className='cuisinefn'>
                              <label>
                                   <input type='radio' value='' name='cuisine'/> Show all
                              </label>
                         </div>
                         <div className='cuisinefn'>
                              <label>
                                   <input type='radio' value='1' name='cuisine'/> North Indian
                              </label>
                         </div>
                         <div className='cuisinefn'>
                              <label>
                                   <input type='radio' value='2' name='cuisine'/> South Indian
                              </label>
                         </div>
                         <div className='cuisinefn'>
                              <label>
                                   <input type='radio' value='3' name='cuisine'/> Chinese
                              </label>
                         </div>
                         <div className='cuisinefn'>
                              <label>
                                   <input type='radio' value='4' name='cuisine'/> Fast Food
                              </label>
                         </div>
                         <div className='cuisinefn'>
                              <label>
                                   <input type='radio' value='5' name='cuisine'/> Street Food
                              </label>
                         </div>
                    </div>
               </>
          )
     }
}

export default CuisineFilter