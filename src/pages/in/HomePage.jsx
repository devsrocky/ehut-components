import React from 'react';
import Navigation from '../../components/masterlayout/Navigation';
import AppNav from '../../components/masterlayout/AppNav';

const HomePage = () => {
    return (
        <div>
            <Navigation/>
            <h2>Hello</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae reprehenderit magnam consectetur consequuntur nisi id tempore nobis quis corporis ducimus, rerum labore quidem at vel cum modi impedit consequatur a.</p>
            <AppNav/>
        </div>
    );
};

export default HomePage;