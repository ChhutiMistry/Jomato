import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './footer';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import Home from './Component/Home/Home';
import Listing from './Component/Listing/Listing';
import Details from './Component/Details/Details';
import PlaceOrder from './Component/Order/PlaceOrder';
import ViewOrder from './Component/Order/ViewOrder';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route exact path='/' component={Home}/>
            <Route path='/listing/:id' component={Listing}/>
            <Route path='/details/' component={Details}/>
            <Route path='/placeorder/:restName' component={PlaceOrder}/>
            <Route path='/viewBooking' component={ViewOrder}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;