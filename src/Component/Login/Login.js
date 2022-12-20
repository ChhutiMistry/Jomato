import React,{Component} from 'react';
import Header from '../../header';
import './Login.css';

const url = 'https://jomato-userregistration.onrender.com/api/auth/login';

class Login extends Component {

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
                <Header/>
                <div className='container'>
                    <div>
                        <div id='loghe'>
                            LOGIN
                        </div>
                        <div id='logboa'>
                            <p id='logmesn'>
                                {this.state.message}
                            </p>
                            <div className='row'>
                                <div className='form-group col-md-6 logbo'>
                                    <label htmlFor='email'>
                                        Email Address
                                    </label>
                                    <input id='email' type='email' name='email' className='form-control'
                                    value={this.state.email} onChange={this.handleChange} required/>
                                </div>
                                <div className='form-group col-md-6 logbo'>
                                    <label htmlFor='password'>
                                        Password
                                    </label>
                                    <input id='password' type='password' name='password' className='form-control'
                                    value={this.state.password} onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <button className='btn logbu' type='submit' onClick={this.login}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;