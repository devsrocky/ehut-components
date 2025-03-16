import React, { Fragment } from 'react';
import thumbnail from '../../assets/images/product.jpg'

const Reviews = () => {
    return (
        <Fragment>
             <div className='container pad-0'>
            <div className='row'>
                <div className='review-section gradi-border'>
                    <div className='review-summary'>
                        <h3 className='text-gradi'>Total reviews 100+</h3>
                        <div className='summary-item'>
                            <span>My communication level</span>
                            <div className='stars blend-text'>★★★★★</div>
                            <span className='rating'>4.9</span>
                        </div>
                        <div className='summary-item'>
                            <span>My communication level</span>
                            <div className='stars blend-text'>★★★★★</div>
                            <span className='rating'>4.9</span>
                        </div>
                        <div className='summary-item'>
                            <span>My communication level</span>
                            <div className='stars blend-text'>★★★★★</div>
                            <span className='rating'>4.9</span>
                        </div>

                    </div>

                    <div className='review-list'>
                        <div className='review-card'>
                                    <div className='review-header'>
                                        <img src={thumbnail} alt="client" className='avatar'/>
                                        <div className='reviewer-details'>
                                            <h4 className='text-gradi'>Rocky prodhan</h4>
                                            <span className="country">Bangladesh</span>
                                        </div>
                                    </div>

                            <div className='review-content'>
                                <div className='stars blend-text'>5</div>
                                    <span className='time'>
                                        <strong>On last: </strong>
                                        May 01 2025
                                    </span>
                                    <p>The product really awsome ehut is the best ecommerce vendor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </Fragment>
    );
};

export default Reviews;