import React from 'react';
import Dropdown from './Dropdown';
import Catalogue from './Catalogue';
import Header from '../../header';

const Home = (props) => {
    return(
        <div>
            <Header/>
            <Dropdown/>
            <Catalogue/>
        </div>
    )
}

export default Home;