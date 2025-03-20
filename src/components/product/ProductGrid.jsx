import React, { Fragment } from 'react';
import product from '../../assets/images/product.jpg'
import { Link } from 'react-router-dom';
import { Cart, Eye, Heart } from 'react-bootstrap-icons';
import ReactPaginate from 'react-paginate';
import Spacer from '../drivers/Spacer';

const ProductGrid = () => {
    return (
        <Fragment>
            <div className="container ehut-product-grid">
                <div className="row g-4">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 ">
                        <Link className="card tr3" to="/">
                            <img src={product} alt="ehut" className='card-img-top' />
                            <div className='icons d-flex justify-content-center'>
                                {/* Replace Link with buttons or divs for actions */}
                                <button className="icon-btn "><Heart className="mx-2" /></button>
                                <button className="icon-btn "><Cart className="mx-2" /></button>
                                <button className="icon-btn "><Eye className="mx-2" /></button>
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className='card-sub-title'>Categories</p>
                                <p className="card-title text-center P0">Black soft t-shirt</p>
                                <span><del><sup>৳</sup>500</del> <sup>৳</sup>499</span>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className="row pt-5">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                    <ReactPaginate
                            previousLabel="Prev"
                            nextLabel="Next"
                            pageClassName="shadow-box linkSize"
                            pageLinkClassName="shadow-box linkSize"
                            previousClassName="shadow-box"
                            previousLinkClassName="shadow-box "
                            nextClassName="shadow-box "
                            nextLinkClassName="shadow-box "
                            breakLabel="..."
                            breakClassName="shadow-box linkSize"
                            breakLinkClassName="shadow-box linkSize"
                            pageCount={100/12}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            // onPageChange={handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                         />
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default ProductGrid;