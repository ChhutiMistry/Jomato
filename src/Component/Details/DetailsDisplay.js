import React,{Component} from 'react';

class DetailsDisplay extends Component {

     orderId= [];

     placeOrder = (id) => {
          this.orderId.push(id)
          this.props.finalOrder(this.orderId)
     }

     removeOrder = (id) => {
          if(this.orderId.indexOf(id) > -1){
               this.orderId.splice(this.orderId.indexOf(id),1)
          }
          this.props.finalOrder(this.orderId)
     }

     renderCart = (orders) => {
          if(orders){
               return orders.map((item,index) => {
                    return(
                         <b key={index}>
                              {item}&nbsp;
                         </b>
                    )
               })
          }
     }

     renderMenu = ({menudata}) => {
          if(menudata){
               return menudata.map((item) => {
                    return(
                         <>
                              <div key={item._id}>
                                   <div className='row'>
                                        <div className='col-md-6 items'>
                                             <b>
                                                  {item.menu_id}.
                                             </b> &nbsp;
                                             <img src={item.menu_image} style={{width:80,height:80}} alt='Food' id='imagel'/>
                                             &nbsp;
                                             <span id='namel'>
                                             {item.menu_name} - ₹ {item.menu_price}
                                             </span>
                                        </div>
                                        <div className='col-md-4 buttons'>
                                             <button className='btn btn-success'
                                             onClick={() => {this.placeOrder(item.menu_id)}}>
                                                  Add<span className='glyphicon glyphicon-plus'/>
                                             </button> &nbsp;
                                             <button className='btn btn-danger'
                                             onClick={() => {this.removeOrder(item.menu_id)}}>
                                                  Remove<span className='glyphicon glyphicon-minus'/>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                              <hr/>
                         </>
                    )
               })
          }
     }

     render(){
          return(
               <div className='container-fluid'>
                    <div className='col-md-12 heado'>
                         <h1 id='ordero'>
                              ORDER LIST
                         </h1>
                         Item Numbers {this.renderCart(this.orderId)} Added
                    </div>
                    <div className='col-md-12 bodyo'>
                         {this.renderMenu(this.props)}
                    </div>
               </div>
          )
     }
}

export default DetailsDisplay;