import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
    return (
        <Fragment>
            <div className="container ehut-news">

                <div className="gridx">
                    <div className="news-grid d-flex flex-column justify-content-center">
                        <h2 className='title text-center py-1'>20000+ satisfied customers</h2>
                        <p className='text-center'>non famous duis fusec egestas dis convallis cras.</p>
                        <Link className='py-1'>Read More</Link>
                    </div>
                    <div className="news-grid d-flex flex-column justify-content-center">
                        <h2 className='title text-center py-1'>free shipping in joypurhat</h2>
                        <p className='text-center'>non famous duis fusec egestas dis convallis cras.</p>
                        <Link className='py-1'>Read More</Link>
                    </div>
                    <div className="news-grid d-flex flex-column justify-content-center">
                        <h2 className='title text-center py-1'>30-day ehut return policy</h2>
                        <p className='text-center'>non famous duis fusec egestas dis convallis cras.</p>
                        <Link className='py-1'>Read More</Link>
                    </div>
                    <div className="news-grid d-flex flex-column justify-content-center">
                        <h2 className='title text-center py-1'>ehut happy get you happy</h2>
                        <p className='text-center'>non famous duis fusec egestas dis convallis cras.</p>
                        <Link className='py-1'>Read More</Link>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default NewsSection;