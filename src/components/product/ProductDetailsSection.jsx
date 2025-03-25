import React, { Fragment, useState } from 'react';
import thumbnail from '../../assets/images/product.jpg';
import RatingView from '../drivers/RatingView';
import { BiMinus } from 'react-icons/bi';
import { Plus } from 'react-bootstrap-icons';
import Spacer from '../drivers/Spacer'

const ProductDetailsSection = () => {
    const [rating] = useState(4.5); 
    return (
        <Fragment>
            <div className='container pb-5 product-details'>
                <div className="row ">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 inMiddle">
                        <img src={thumbnail} alt="thumbnail" style={{width: '100%'}} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1 className='title'>Banarasi Sharee: Crafting Heritage, Weaving Beauty</h1>
                        <div className='d-flex'>
                            <RatingView rating={4.5} />
                            <span style={{color: '#999', fontSize: '16px'}}>({`Customer review - 150`})</span>
                        </div>
                        <div className="devider"></div>
                        <Spacer Space={10}/>
                        <h2 className='title price'><del><sup>৳</sup>1450</del> - <sup>৳</sup>999</h2>
                        <p>The Banarasi saree blends timeless craftsmanship with luxurious silk, showcasing intricate zari work that embodies cultural opulence.</p>
                        <div className="varable-1 py-4">
                            <h5 className='title' style={{fontSize: '15px', letterSpacing: '1px', textTransform: 'uppercase'}}>Size</h5>
                            <div className="size-btns d-flex">
                                <button>SM</button>
                                <button>MD</button>
                                <button>LG</button>
                                <button>XL</button>
                                <button>XXL</button>
                            </div>
                        </div>
                        <div className="varable-2">
                            <h5 className='title' style={{fontSize: '15px', letterSpacing: '1px', textTransform: 'uppercase'}}>Colors</h5>
                            <div className="colors-btns d-flex">
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>
                        </div>
                        <div className="actions pt-4">
                            <div className="quantity d-flex align-items-center">
                                <h5 className='title' style={{fontSize: '15px', letterSpacing: '1px', textTransform: 'uppercase', marginRight: '15px'}}>Quantity</h5>
                                <div className="count d-flex align-items-center justify-content-between">
                                    <BiMinus className='minus'/>
                                    <input type="text" defaultValue={1}/>
                                    <Plus className='plus'/>
                                </div>
                            </div>
                            <div className="action-btn d-flex pt-4">
                                <button>Add to cart</button>
                                <button>Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductDetailsSection;