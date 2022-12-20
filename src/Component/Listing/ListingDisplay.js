import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {

     const renderData = ({listData}) => {
          if(listData){   
               if(listData.length>0){
                    return listData.map((item) => {
                         return(
                              <div className='listbox' key={item.restaurant_id}>
                                   <Link to={`/details?restaurantId=${item.restaurant_id}`} className='mylink row'>
                                        <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                                             <img src={item.restaurant_thumbnail} className='bimage'
                                             alt={item.restaurant_name}/>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                             <div className='bname'>
                                                  {item.restaurant_name}
                                                  <div className='bcity'>
                                                       {item.address}
                                                  </div>
                                                  <div className='bcity'>
                                                       Customer Review - {item.rating_text}
                                                  </div>
                                                  <div className='bcost'>
                                                       ₹ {item.cost}
                                                  </div>
                                                  <div className='bcat'>
                                                       <span className='label label-primary'>
                                                            {item.mealTypes[0].mealtype_name}
                                                       </span>&nbsp;|&nbsp;
                                                       <span className='label label-success'>
                                                            {item.mealTypes[1].mealtype_name}
                                                       </span>
                                                  </div>
                                                  <div className='bcat'>
                                                       <span className='label label-danger'>
                                                            {item.cuisines[0].cuisine_name}
                                                       </span>&nbsp;|&nbsp;
                                                       <span className='label label-warning'>
                                                            {item.cuisines[1].cuisine_name}
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </Link>
                              </div>
                         )
                    })
               }else{
                    return(
                         <p id='nofa'>
                              No Data For Filter Applied
                         </p>
                    )
               }
          }else{
               return(
                    <div>
                         <img src='https://i.ibb.co/sKVGspq/Loading.gif' alt='Loading'/>
                         <p id='loade'>
                              Loading....
                         </p>
                    </div>
               )
          }
     }


     return(
          <div id='listing'>
               {renderData(props)}
          </div>
     )
}

export default ListingDisplay;