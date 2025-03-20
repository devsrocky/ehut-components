import React, { lazy } from 'react';
import { OpenEhutLoader } from '../../redux/states/settingSlice';
import store from '../../redux/store/store';
import Spacer from '../../components/drivers/Spacer';
import ProductGrid from '../../components/product/ProductGrid';
import ReviewTitle from '../../components/home/ReviewTitle';
import Reviews from '../../components/elements/Reviews';
import FeedbackSection from '../../components/home/FeedbackSection';
import CollectionSection from '../../components/home/CollectionSection';
import ContactSection from '../../components/home/ContactSection';
import NewsSection from '../../components/home/NewsSection';
import BrandSection from '../../components/home/BrandSection';
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
            <CollectionSection/>
            <Spacer Space={50} />
            <ReviewTitle/>
            <Spacer Space={50} />
            <FeedbackSection/>
            <Spacer Space={70} />
            <ContactSection/>
            <Spacer Space={60} />
            <NewsSection/>
            <Spacer Space={60} />
            <BrandSection/>






        </div>
    );
};

export default HomePage;