import React from 'react';
import './PlaceOrder.css';

const OrderDisplay = (props) => {

     const renderTable = ({orderData}) => {
          if(orderData){
               return orderData.map((item) => {
                    return(
                         <tr key={item.id}>
                              <td className='tabbo'>
                                   {item.id}
                              </td>
                              <td className='tabbo'>
                                   {item.hotel_name}
                              </td>
                              <td className='tabbo'>
                                   {item.name}
                              </td>
                              <td className='tabbo'>
                                   {item.phone}
                              </td>
                              <td className='tabbo'>
                                   {item.email}
                              </td>
                              <td className='tabbo'>
                                   ₹ {item.cost}
                              </td>
                              <td className='tabbo'>
                                   {item.date}
                              </td>
                              <td className='tabbo'>
                                   {item.status}
                              </td>
                              <td>
                                   {item.bank_name}
                              </td>
                         </tr>
                    )
               })
          }
     }

     return(
          <div className='container-fluid'>
               <p id='orderhb'>
                    ORDER HISTORY
               </p>
               <table className='table table-hover mytab'>
                    <thead>
                         <tr>
                              <th className='tabhe'>
                                   Order Number
                              </th>  
                              <th className='tabhe'>
                                   Restaurant Name
                              </th>  
                              <th className='tabhe'>
                                   Name
                              </th>  
                              <th className='tabhe'>
                                   Contact Number
                              </th>  
                              <th className='tabhe'>
                                   Email Address
                              </th>  
                              <th className='tabhe'>
                                   Cost
                              </th>  
                              <th className='tabhe'>
                                   Date
                              </th>  
                              <th className='tabhe'>
                                   Transaction Status
                              </th>   
                              <th className='tabhe'>
                                   Bank Name
                              </th>  
                         </tr>
                    </thead>
                    <tbody>
                         {renderTable(props)}
                    </tbody>
               </table>
          </div>
     )
}

export default OrderDisplay;