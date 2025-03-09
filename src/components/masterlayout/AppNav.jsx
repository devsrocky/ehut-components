import React from 'react';
import { Link } from 'react-router-dom';
import { Cart, Heart, HouseDoor, Person } from 'react-bootstrap-icons';

const AppNav = () => {
    return (
        <div className='ehut-app-bottom switch-appMenu'>
          <div className="appMenu">
            <div className="container w95">
                <div className="row">


                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-start P0">
                        <Link to='https://google.com' className='active'>
                            <HouseDoor className="mx-2 active"/>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center P0">
                        <Link>
                            <Person className="mx-2 "/>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center P0">
                        <Link>
                            <Heart className="mx-2 "/>
                            <span className='counter position-absolute '>10</span>
                        </Link>

                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-end P0">
                        <Link>
                            <Cart className="mx-2 "/> 
                            <span className='counter position-absolute '>10</span>
                        </Link>
                    </div>

                </div>
            </div>
          </div>
        </div>
    );
};

export default AppNav;