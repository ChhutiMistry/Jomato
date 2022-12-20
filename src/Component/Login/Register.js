import React,{Component} from 'react';
import Header from '../../header';
import './Register.css';

const url = 'https://jomato-userregistration.onrender.com/api/auth/register';

class Register extends Component {

    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    register = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
            <>
                <Header/>
                <div className='container'>
                    <div>
                        <div id='reghe'>
                            REGISTER
                        </div>
                        <form id='regboa'>
                            <div className='row'>
                                <div className='form-group col-md-6 regbo'>
                                    <label htmlFor='fname'>
                                        First Name
                                    </label>
                                    <input id='fname' type='text' name='name' className='form-control'
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className='form-group col-md-6 regbo'>
                                    <label htmlFor='phone'>
                                        Contact Number
                                    </label>
                                    <input id='phone' type='digits' name='phone' className='form-control'
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className='form-group col-md-6 regbo'>
                                    <label htmlFor='email'>
                                        Email Address
                                    </label>
                                    <input id='email' type='email' name='email' className='form-control'
                                    value={this.state.email} onChange={this.handleChange} required/>
                                </div>
                                <div className='form-group col-md-6 regbo'>
                                    <label htmlFor='password'>
                                        Password
                                    </label>
                                    <input id='password' type='password' name='password' className='form-control'
                                    value={this.state.password} onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <button className='btn regbu' type='register' onClick={this.register}>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Register;