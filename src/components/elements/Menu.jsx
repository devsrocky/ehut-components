import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const style = {
        color: 'var(--fontYellowBG)',
        fontSize: '15px',
        fontWeight: '500'
    }


    return (
        <div >
            <div className="menu-links navbar-nav moveUpward5 tr3" style={{zIndex: '1010'}} >
                <Link className='nav-item moveUpward3 nav-link active tr3'  style={style}>Home</Link>
                <Link className='nav-item moveUpward3 nav-link tr3' style={style}>Shop</Link>
            </div>
        </div>
    );
};

export default Menu;