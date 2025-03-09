import React from 'react';

import heels from '../../assets/icons/boot.png';
import pants from '../../assets/icons/pants.png';
import shirt from '../../assets/icons/shirt.png';
import bra from '../../assets/icons/bra.png';
import male from '../../assets/icons/male-clothes.png';
import women from '../../assets/icons/woman-clothes.png';
import brand from '../../assets/icons/brand.png';

const CartLoader = () => {
    return (
        <div className='cart-loader-screen'>
            <div className="cart-loader">
                <div className="cart-area">

                    <div className="cart"></div>

                    <div className='product-icons'>
                        <img className='product' style={{animationDelay: '0s'}} src={women} alt="p" />
                        <img className='product' style={{animationDelay: '.2s'}} src={heels} alt="p" />
                        <img className='product' style={{animationDelay: '.4s'}} src={pants} alt="p" />
                        <img className='product' style={{animationDelay: '.5s'}} src={shirt} alt="p" />
                        <img className='product' style={{animationDelay: '.7s'}} src={male} alt="p" />
                        <img className='product' style={{animationDelay: '.9s'}} src={bra} alt="p" />
                        <img className='product' style={{animationDelay: '.10s'}} src={brand} alt="p" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CartLoader;