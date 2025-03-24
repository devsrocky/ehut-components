import React from 'react';
import { ArrowReturnLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


const BreadCumb = () => {
    return (
        <div className='container breadcumb-section py-4'>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <Link to='/' className='arrowRight'>
                        <ArrowReturnLeft/>
                    </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end breadCumbs">
                    <Link className='prev'>Home</Link>
                    <span className="separate"> {'>'} </span>
                    <span className='current'>Shop</span>
                </div>
            </div>
        </div>
    );
};

export default BreadCumb;