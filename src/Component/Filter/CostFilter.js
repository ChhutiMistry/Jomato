import React,{Component} from 'react';
import axios from 'axios';
import './Filter.css';

const url = 'https://jomato-server.onrender.com/filters/'

class CostFilter extends Component{

     filterCost = (data) => {
          let mealId = sessionStorage.getItem('mealId');
          let cost = data.target.value.split('-');
          let lcost = Number(cost[0])
          let hcost = Number(cost[1])
          let costUrl = ''
          if(data.target.value === ''){
               costUrl = `${url}${mealId}`
          }else{
               costUrl = `${url}${mealId}?hcost=${hcost}&lcost=${lcost}`
          }
          axios.get(costUrl)
          .then((res) => {this.props.restPerCost(res.data)})
     }

     render(){
          return(
               <>
                    <p id='costf'>
                         Cost Filter
                    </p>
                    <div onChange={this.filterCost}>
                         <div className='costfn'>
                              <label>
                                   <input type='radio' value='' name='cuisine'/> Show all
                              </label>
                         </div>
                         <div className='costfn'>
                              <label>
                                   <input type='radio' value='100-300' name='cuisine'/> ₹100 - ₹300
                              </label>
                         </div>
                         <div className='costfn'>
                              <label>
                                   <input type='radio' value='301-500' name='cuisine'/> ₹301 - ₹500
                              </label>
                         </div>
                         <div className='costfn'>
                              <label>
                                   <input type='radio' value='501-900' name='cuisine'/> ₹501- ₹900
                              </label>
                         </div>
                         <div className='costfn'>
                              <label>
                                   <input type='radio' value='901-1200' name='cuisine'/> ₹901 - ₹1200
                              </label>
                         </div>
                         <div className='costfn'>
                              <label>
                                   <input type='radio' value='1201-5000' name='cuisine'/> ₹1201 - ₹5000
                              </label>
                         </div>
                    </div>
               </>
          )
     }
}

export default CostFilter;