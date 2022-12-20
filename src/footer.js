import React,{Component} from 'react';
import './Footer.css'

class Footer extends Component {

    render(){
        return (
            <footer className='footer'>
                <div>
                    <ul className='vertical'>
                        <li>
                            Blog
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            About me
                        </li>
                    </ul>
                    <ul className='vertical'>
                        <li>
                            Code of Conduct
                        </li>
                        <li>
                            Community
                        </li>
                        <li>
                            Mobile Apps
                        </li>
                    </ul>
                    <ul className='vertical'>
                        <li>
                            Privacy
                        </li>
                        <li>
                            Terms and Conditions
                        </li>
                        <li>
                            Security
                        </li>
                        <li>
                            Sitemap
                        </li>
                    </ul>
                </div>
                <div id='copy'>
                    <span>
                        Chhuti Mistry; &copy; 2022
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer;