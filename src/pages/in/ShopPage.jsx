import React from 'react';
import Spacer from '../../components/drivers/Spacer'
import BreadCumb from '../../components/shop/BreadCumb';
import FilterAndProduct from '../../components/shop/FilterAndProduct';

const ShopPage = () => {
    return (
        <div>
            <BreadCumb/>
            <Spacer Space={20}/>
            <FilterAndProduct/>
            <Spacer Space={20}/>

        </div>
    );
};

export default ShopPage;