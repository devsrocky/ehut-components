import React, { lazy, Suspense } from 'react';
const BannerSlider = lazy(() => import('../elements/BannerSlider'))
const BannerAds = lazy(() => import('../elements/BannerAds'))

const BannerSection = () => {
    return (
        <div className='container py-4'>
            <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                    <Suspense fallback={<div className='loading'>Loading banner...</div>}>
                        <BannerSlider/>
                    </Suspense>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <BannerAds/>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;