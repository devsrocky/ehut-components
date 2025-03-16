import React, { lazy } from 'react';
import { OpenEhutLoader } from '../../redux/states/settingSlice';
import store from '../../redux/store/store';
import Spacer from '../../components/drivers/Spacer';
import ProductGrid from '../../components/product/ProductGrid';
import ReviewTitle from '../../components/home/ReviewTitle';
import Reviews from '../../components/elements/Reviews';
const BannerSection = lazy(() => import('../../components/home/BannerSection'))
const ProductTabSection = lazy(() => import('../../components/home/ProductTabSection'))



const HomePage = () => {

    return (
        <div>
            

            <BannerSection/>
            <Spacer Space={50} />
            <ProductTabSection/>
            <Spacer Space={50} />
            <ProductGrid/>
            <Spacer Space={50} />
            <ReviewTitle/>
            <Spacer Space={50} />
            <Reviews/>



        </div>
    );
};

export default HomePage;