import React, { Fragment } from 'react';
import { MdEmail } from 'react-icons/md';
import Spacer from '../drivers/Spacer';
import DoubleArrow from '../elements/DoubleArrow';
import SocialIcons from '../elements/SocialIcons';

const ContactSection = () => {
    return (
        <Fragment>

                <div className="container ehut-newsletter">



                            <div className="newsletter-shape d-flex flex-column ">
                                <div className="subscribe-content">
                                    <h2 className='text-center title'>Stay Updated with Ehut</h2>
                                    <DoubleArrow Width={80} Height={2} Text="ehut" />
                                    <Spacer Space={15} />
                                    <p className='text-center'>Sign up to get the latest styles, exclusive offers, and more, straight to your inbox!</p>
                                </div>

                                <Spacer Space={50} />

                                <form className="subcribe d-flex">
                                    <div className="input">
                                        <MdEmail/>
                                        <input type="text" className='form-control' placeholder='Your email address' />
                                    </div>
                                    <button>Sign up</button>
                                </form>

                                <Spacer Space={20} />
                                <SocialIcons/>
                            </div>

                </div>

        </Fragment>
    );
};

export default ContactSection;