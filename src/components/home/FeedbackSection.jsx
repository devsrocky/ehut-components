import React, { Fragment, lazy, Suspense } from 'react';
import BannerAds from '../elements/BannerAds';
const Reviews = lazy(() => import('../elements/Reviews'))

const FeedbackSection = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Reviews/>
                        </Suspense>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <BannerAds/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FeedbackSection;