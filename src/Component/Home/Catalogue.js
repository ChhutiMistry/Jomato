import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Catalogue.css';
import Background from './Background';

const url = 'https://jomato-server.onrender.com/mealtype'

class Catalogue extends Component{

    constructor(){
        super()
        
        this.state={
            mealType:''
        }
    }
    render(){
        return(
            <div>
                <div id='catalogue'>
                    <Link to='/listing/1' id='list'>
                        CATALOGUE
                    </Link>
                    <Background mealData={this.state.mealType}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default Catalogue;