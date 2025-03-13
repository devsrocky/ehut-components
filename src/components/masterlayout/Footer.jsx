import React from 'react';
import { Headset, ShieldCheck, Truck } from 'react-bootstrap-icons';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spacer from '../drivers/Spacer';

const Footer = () => {
    return (
        <footer>
            <div className="container py-4">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 com-sm-4 col-4 d-flex">
                        <div className='footer-svg-area'><Headset /></div>
                        <h3 className='footer-svg-title'><span>Our</span> Support <span>Team available</span> 7/24</h3>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 com-sm-4 col-4 d-flex">
                        <div className='footer-svg-area'><ShieldCheck  /></div>
                        <h3 className='footer-svg-title'> <span>Guaranteed </span> Safe Delivery, <span>Every Time</span></h3>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 com-sm-4 col-4 d-flex">
                        <div className='footer-svg-area'> <Truck /></div>
                        <h3 className='footer-svg-title'>Delivery <span>at the</span> Fast <span>of Light</span> </h3>

                    </div>
                </div>
            </div>
            <Spacer Space={0} />
            <div className="container pb-4">
                <div className="row">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                        <h2 className="footer-title">Who we are</h2>
                        <Spacer Space={5} />
                        <div className="footer-links">
                            <Link>About</Link>
                            <Link>Terms</Link>
                            <Link>Careers</Link>
                            <Link>Privacy Policy</Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                        <h2 className="footer-title">Categories</h2>
                        <Spacer Space={5} />
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
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                        <h2 className="footer-title">For Custommers</h2>
                        <Spacer Space={5} />
                        <div className="footer-links">
                            <Link>Home</Link>
                            <Link>Shop</Link>
                            <Link>Supports</Link>
                            <Link>Ehut guides</Link>
                            <Link>Trust & Safety</Link>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                        <h2 className="footer-title">Affiliates</h2>
                        <Spacer Space={5} />
                        <div className="footer-links">
                            <Link>Be Affiliator</Link>
                            <Link>Security</Link>
                        </div>
                    </div>



                </div>
            </div>

            <div className='ehut-footer-bottom pb-5 pt-3'> 
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 d-flex inMiddle ehut-footer-bottom-icons">
                            <Link><FaFacebook  /></Link>
                            <Link><FaInstagram  /></Link>
                            <Link><FaWhatsapp  /></Link>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex inMiddle ehut-footer-bottom-icons justify-content-center">
                            <p className='text-center '>&copy; 2025 Ehut. All Rights Reserved.</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 d-flex inMiddle justify-content-end">
                            <Link className='powaredBy'>WPCODE STUDIO</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;