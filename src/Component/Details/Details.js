import React,{Component} from 'react';
import axios from 'axios';
import './Details.css';
import {Link} from 'react-router-dom';
import DetailsDisplay from './DetailsDisplay';
import Header from '../../header';

const url = 'https://jomato-server.onrender.com/restaurantdetails';
const menuUrl = 'https://jomato-server.onrender.com/menu';

class Details extends Component {

     constructor(){
          super()

          this.state={
               details:'',
               menuList:'',
               userItem:'',
               mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
          }
     }

     addToCart = (data) => {
          this.setState({userItem:data})
     }

     proceed = () => {
          sessionStorage.setItem('menu',this.state.userItem);
          this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
     }

     render(){
          let {details} = this.state
          console.log(this.state.userItem)
          return(
               <>
                    <Header/>
                    <div id='mainContent'>
                         <div className='container'>
                              <div className='row'>
                                   <div className='col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12'>
                                        <div>
                                             <img src={this.state.details.restaurant_thumbnail} alt='Food' id='picture' className='img-responsive'/>
                                        </div>
                                   </div>
                                   <div className='col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12'>
                                        <h1 id='name'>
                                        {details.restaurant_name}
                                        </h1>
                                        <p id='review'>
                                             231 Customers Rating is {details.rating_text}
                                        </p>
                                        <p>
                                             <span id='oldprice'>
                                                  Old price:
                                             </span>
                                             <span id='oldcost'>
                                                  ₹ 5000
                                             </span>
                                        </p>
                                        <p>
                                             <span id='newprice'>
                                                  Current price:
                                             </span>
                                             <span id='newcost'>
                                                  ₹ {details.cost}
                                             </span>
                                        </p>
                                        <img src='https://i.ibb.co/wJvrhYg/veg.png' alt='Veg item' id='termlogo1'/>
                                        <img src='https://i.ibb.co/cQn4XXZ/Fully-sanitized.png' alt='Fully sanitized' id='termlogo2'/>
                                        <img src='https://i.ibb.co/Jvmth8P/Fast-and-Free-delivery.png' alt='Fast and Free delivery' id='termlogo3'/>
                                        <p id='available'>
                                             Available
                                        </p>
                                        <div>
                                             <Link to= {`/listing/${this.state.mealId}`}>
                                                  <button className='btn btn-lg' id='button1'>
                                                       Back
                                                  </button>
                                             </Link>
                                             <button className='btn btn-lg' id='button2' type='button'>
                                                  Add to Cart
                                             </button>
                                             <button className='btn btn-lg' id='button3' type='button' onClick={this.proceed}>
                                                  Checkout
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='col-md-12'>
                         <DetailsDisplay menudata={this.state.menuList}
                         finalOrder={(data) => {this.addToCart(data)}}/>
                    </div>
               </>
          )
     }

     async componentDidMount(){
          let restaurantId = this.props.location.search.split('=')[1];
          let response = await axios.get(`${url}/${restaurantId}`)
          console.log('>>>response.data[0].restaurant_id',response.data[0].restaurant_id)
          let menuResponse = await axios.get(`${menuUrl}?restaurantId=${response.data[0].restaurant_id}`)
          this.setState({details:response.data[0],menuList:menuResponse.data})
     }
}

export default Details;