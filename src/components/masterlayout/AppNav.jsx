import React from 'react';
import { Link } from 'react-router-dom';
import { Cart, Heart, HouseDoor, Person } from 'react-bootstrap-icons';

const AppNav = () => {
    return (
        <div className='ehut-app-bottom'>
          <div className="appMenu d-flex justify-content-between align-items-center">
            <Link to='https://google.com' className='active'>
                <HouseDoor className="mx-2 active"/>
            </Link>
            <Link>
                <Person className="mx-2 "/>
            </Link>
            <Link>
                <Heart className="mx-2 "/>
            </Link>
            <Link>
                <Cart className="mx-2 "/> 
            </Link>
          </div>
        </div>
    );
};

export default AppNav;