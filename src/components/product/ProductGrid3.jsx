import React from 'react';
import { Cart, Eye, Heart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import product from '../../assets/images/product.jpg'
import ReactPaginate from 'react-paginate';


const ProductGrid3 = () => {
    return (
        <div className='container ehut-product-grid'>
            <div className="row row g-4">

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link  className="card tr3" to="/product">
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link className="card tr3" to="/product">
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link className="card tr3" to="/product">
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link className="card tr3" to="/product">
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link className="card tr3" to="/product">
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link className="card tr3" to="/product">
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link className="card tr3" to="/product">
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link className="card tr3" to="/product">
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
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link className="card tr3" to="/product">
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
    );
};

export default ProductGrid3;