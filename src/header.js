import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import DarkMode from './Component/Theme change/DarkMode';
import './Header.css';

const url = 'https://jomato-userregistration.onrender.com/api/auth/userinfo'

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
                let data = this.state.userData;
                let outArray = [data.name, data.email, data.phone, data.role];
                sessionStorage.setItem('userInfo',outArray)
                sessionStorage.setItem('loginStatus',true)
                return(
                    <>
                        <div className='btnlogin'>
                            <Link to='/' className='btn navvvna'>
                                <i className='bi bi-person-circle'></i>
                                &nbsp;Hi {data.name}. Welcome to JOMATO
                            </Link>
                        </div> &nbsp;
                        <div className='btnlogin'>
                            <button onClick={this.handleLogout} className='btn navvvlo'>
                                Logout&nbsp;
                                <i className='bi bi-box-arrow-right'></i>
                            </button>
                        </div> &nbsp;
                    </>
                )
        }else{
            return(
                <>
                    <div className='btnlogin'>
                        <Link to='/login' className='btn navvvli'>
                            Login&nbsp;
                            <i className='bi bi-box-arrow-in-right'></i>
                        </Link>
                    </div> &nbsp;
                    <div className='btnlogin'>
                        <Link to='/register' className='btn navvvre'>
                            <i className='bi bi-person-badge'></i>
                            &nbsp;Register
                        </Link>
                    </div> &nbsp;
                </>
            )
        }
    }

    render(){
        return (
            <header>
                <nav className='navbar navbar-expand-sm ncolour' id='nncolour'>
                        <div className='container-fluid'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <img src='https://i.ibb.co/3SfhyK5/Alphabet-J.png' alt='Icon' id='icon' className='rounded-pill'/>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link-active navv'>
                                            JOMATO
                                    </Link>
                                </li>
                            </ul>
                            <ul className='nav navbar-nav'>
                                <li className='nav-item'>
                                    {this.conditionalHeader()}
                                </li>
                                <li className='nav-item'>
                                    <Link to='/listing/1' className='nav-link active navvv' id='heade'>
                                            Catalogue
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <div type='button' className='nav-link active navvv' id='headee'>
                                            <DarkMode/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </header>
        )
    }

    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token': sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                this.setState({userData:data})
            })
        }
    }

export default withRouter(Header);