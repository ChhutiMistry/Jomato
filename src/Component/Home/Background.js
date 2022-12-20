import React from 'react';
import {Link} from 'react-router-dom';

const Background = (props) => {

    const listMeal = ({mealData}) => {
        console.log('>>>mealData111',mealData)
        if(mealData){
            console.log('>>>mealData',mealData)
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                        <div>
                            <div className='box'>
                                <div>
                                    <img src={item.meal_image} alt={item.mealtype} className='images'/>
                                    <p className='foodname'>
                                        {item.mealtype}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div id='mainContainer'>
            {listMeal(props)}
        </div> 
    )
}

export default Background;