import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './OrderDisplay';
import Header from '../../header';

const url = 'https://jomato-server.onrender.com/viewOrder'
const updateUrl = 'https://jomato-server.onrender.com/updateOrder'

class ViewOrder extends Component {

     constructor(){
          super()

          this.state={
               orders:''
          }
     }

     render(){
          return(
               <>
                    <Header/>
                    <OrderDisplay orderData={this.state.orders}/>
               </>
          )
     }

     componentDidMount(){
          if(this.props.location){
               let queryp = this.props.location.search;
               if(queryp){
                    let data = {
                         'status':queryp.split('&')[0].split('=')[1],
                         'date':queryp.split('&')[2].split('=')[1],
                         'bank_name':queryp.split('&')[3].split('=')[1]
                    }
                    let id = queryp.split('&')[1].split('=')[1].split('_')[1]
                    fetch(`${updateUrl}/${id}`,{
                         method:'PUT',
                         headers:{
                         'Accept':'application/json',
                         'Content-Type':'application/json'
                         },
                         body: JSON.stringify(data)
                    })
               }
          }
          let email = sessionStorage.getItem('userInfo').split(',')[1];
          const getData = setTimeout(() => {
               axios
               .get(`${url}?email=${email}`,)
               .then((res) => {
               this.setState({orders:res.data})
               });
          }, 800)
     }
}

export default ViewOrder;