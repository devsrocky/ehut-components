import React from 'react';
import { Headset, ShieldCheck, Truck } from 'react-bootstrap-icons';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container py-4">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 com-sm-4 col-4 d-flex">
                        <div className='footer-svg-area'><Headset /></div>
                        <span className='footer-svg-title'>Our Support Team available 7/24</span>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 com-sm-4 col-4 d-flex">
                        <div className='footer-svg-area'><ShieldCheck  /></div>
                        <span className='footer-svg-title'>Guaranteed Safe Delivery, Every Time</span>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 com-sm-4 col-4 d-flex">
                        <div className='footer-svg-area'> <Truck /></div>
                        <span className='footer-svg-title'>Delivery at the Speed of Light</span>

                    </div>
                </div>
            </div>
            <div className="container pb-4">
                <div className="row">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                        <h2 className="footer-title">Who we are</h2>
                        <div className="footer-links">
                            <Link>About</Link>
                            <Link>Terms</Link>
                            <Link>Careers</Link>
                            <Link>Privacy Policy</Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <h2 className="footer-title">Categories</h2>
                        <div className="footer-links">
                            <Link>Clothes</Link>
                            <Link>Shoes</Link>
                            <Link>Jweelary</Link>
                            <Link>Furnitures</Link>
                            <Link>Sports</Link>
                            <Link>Adult</Link>
                            <Link>Others</Link>
                        </div>
                        
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <h2 className="footer-title">For Custommers</h2>
                        <div className="footer-links">
                            <Link>Home</Link>
                            <Link>Shop</Link>
                            <Link>Supports</Link>
                            <Link>Ehut guides</Link>
                            <Link>Trust & Safety</Link>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <h2 className="footer-title">Affiliates</h2>
                        <div className="footer-links">
                            <Link>Be Affiliator</Link>
                            <Link>Security</Link>
                        </div>
                    </div>



                </div>
            </div>

            <div className="container" style={{background: 'red'}}>
                <div className="row bg-info">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <FaInstagram  />
                        <FaFacebook  />
                        <FaWhatsapp  />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <p className='text-center'>&copy; 2025 Ehut. All Rights Reserved.</p>
                        <p className='text-center'>Designed and Developed by the Ehut Team</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <Link>WPCODE STUDIO</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;