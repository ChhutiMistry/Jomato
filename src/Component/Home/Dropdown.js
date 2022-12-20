import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Dropdown.css';

const url = 'https://jomato-server.onrender.com/location'
const restUrl = 'https://jomato-server.onrender.com/restaurants?state_id='

class Dropdown extends Component{

    constructor(props){
        super(props)

        console.log('>>>>inside constructor')
        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        } 
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        } 
    }

    handleRestaurants = (event) => {
        let restId = event.target.value;
        console.log('>>>>inside',restId)
        this.props.history.push(`/details?restId=${restId}`)
    }

    handleCity = (event) => {
        let restId = event.target.value;
        fetch(`${restUrl}${restId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    render(){
        console.log('>>>>inside render')
        return(
            <div id='front'>
                <div id='imagelogoc'>
                    <img src='https://i.ibb.co/3SfhyK5/Alphabet-J.png' alt='Icon' id='logo' className='img-thumbnail img-responsive'/>
                </div>
                <p id='headline'>
                    Get to know about the best eatables available around
                </p>
                <div id='drop'>
                    <div className='dropdown' id='dropcity'>
                        <select className='btn-warning dropdown-toggle droph' type='button' data-bs-toggle='dropdown'
                        id='city' onChange={this.handleCity}>
                            <option>
                                ----- SELECT CITY -----
                            </option>
                            {this.renderCity(this.state.location)}
                        </select>
                    </div>
                    <div className='dropdown' id='droprest'>
                        <select className='btn-warning dropdown-toggle droph' type='button' data-bs-toggle='dropdown' id='restaurant' onChange={this.handleRestaurants}>
                            <option>
                                ----- SELECT RESTAURANT -----
                            </option>
                            {this.renderRest(this.state.restaurants)}
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log('>>>>inside componentDidMount')
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Dropdown);