import React,{Component} from 'react';
import './PlaceOrder.css';
import Header from '../../header';

const url = 'https://jomato-server.onrender.com/menuItem';
const purl = 'https://jomato-server.onrender.com/placeOrder';

class PlaceOrder extends Component {

     constructor(props){
          super(props)
     
          this.state={
               id:Math.floor(Math.random()*100000),
               hotel_name:this.props.match.params.restName,
               name:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[0]:'',
               email:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:'',
               cost:0,
               phone:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[2]:'',
               address:'',
               menuItem:''
          }
     }

     handleChange=(event) => {
          this.setState({[event.target.name]:event.target.value})
     }

     renderItem = (data) => {
          if(data){
               return data.map((item) => {
                    return(
                         <div className='orderItems' key={item.menu_id}>
                              <img src={item.menu_image} alt={item.menu_name}/>
                              <div id='mybname'>
                                   {item.menu_name}
                              </div>
                              <div id='mybprice'>
                                   Rs. {item.menu_price}
                              </div>
                         </div>
                    )
               })
          }
     }

     checkout = () => {
          console.log(this.state)
          let obj = this.state;
          obj.menuItem = sessionStorage.getItem('menu')
          fetch(purl,{
               method:'POST',
               headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
               },
               body:JSON.stringify(obj)
          })
          .then(console.log('order Added'))
     }

     render(){
          if(!sessionStorage.getItem('loginStatus')){
               return(
                    <div>
                         <Header/>
                         <p id='logf'>
                              Login First To Place Order
                         </p>
                    </div>
               )
          }
          return(
               <>
                    <Header/>
                    <div className='container'>
                         <hr/>
                         <div className='panel panel-primary'>
                              <div className='panel-heading'>
                                   <div id='myresth'>
                                        Your Order For {this.props.match.params.restName}
                                   </div>
                              </div>
                              <div className='panel-body'>
                                   <form action='https://jomato-paymentgateway.onrender.com/paynow' method='POST'>
                                        <input type='hidden' name='cost' value={this.state.cost}/>
                                        <input type='hidden' name='id' value={this.state.id}/>
                                        <input type='hidden' name='rest_name' value={this.state.hotel_name}/>
                                        <div className='row'>
                                             <div className='form-group col-md-6'>
                                                  <label htmlFor='fname'>
                                                       First Name
                                                  </label>
                                                  <input id='fname' name='name' className='form-control'
                                                  value={this.state.name} onChange={this.handleChange}/>
                                             </div>
                                             <div className='form-group col-md-6'>
                                                  <label htmlFor='email'>
                                                       Email
                                                  </label>
                                                  <input id='email' name='email' className='form-control'
                                                  value={this.state.email} onChange={this.handleChange}/>
                                             </div>
                                             <div className='form-group col-md-6'>
                                                  <label htmlFor='phone'>
                                                       Phone
                                                  </label>
                                                  <input id='phone' name='phone' className='form-control'
                                                  value={this.state.phone} onChange={this.handleChange}/>
                                             </div>
                                             <div className='form-group col-md-6'>
                                                  <label htmlFor='address'>
                                                       Address
                                                  </label>
                                                  <input id='address' name='address' className='form-control'
                                                  value={this.state.address} onChange={this.handleChange}/>
                                             </div>
                                        </div>
                                        <div className='row'>
                                             <div className='col-md-12'>
                                                  <h2 id='mytotal'>
                                                       Total Price is Rs.{this.state.cost}
                                                  </h2>
                                             </div>
                                             <div className='col-md-12'>
                                                  {this.renderItem(this.state.menuItem)}
                                             </div>
                                        </div>
                                        <button className='mybt btn btn-success' onClick={this.checkout}>
                                             Procced
                                        </button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </>
          )
     }

     componentDidMount(){
          let menuItem = sessionStorage.getItem('menu');
          let orderId = [];
          menuItem.split(',').map((item) => {
               orderId.push(parseInt(item));
               return 'ok'
          })
          fetch(url,{
               method:'POST',
               headers:{
                    'accept':'application/json',
                    'Content-Type':'application/json'
               },
               body:JSON.stringify(orderId)
          })
          .then((res) => res.json())
          .then((data) => {
               console.log(data)
               let totalPrice = 0;
               data.map((item) => {
                    totalPrice = totalPrice + parseFloat(item.menu_price);
                    return 'ok'
               })
               this.setState({menuItem:data,cost:totalPrice})
          })
     }
}

export default PlaceOrder;