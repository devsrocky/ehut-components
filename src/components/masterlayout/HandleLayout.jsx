import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AppNav from '../masterlayout/AppNav';

const HandleLayout = (props) => {
    return (
        <Fragment>
            <Navigation/>
                <div>{props.children}</div>
            <Footer/>
            <AppNav/>
        </Fragment>
    );
};

export default HandleLayout;