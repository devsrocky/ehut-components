import React from 'react';
import { Facebook, Whatsapp } from 'react-bootstrap-icons';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
    return (
        <div className='d-flex justify-content-center ehut-socials'>
            <Link to='https://facebook.com'>
                <span><Facebook/></span>
            </Link>
            <Link to='https://whatsapp.com'>
                <span><Whatsapp/></span>
            </Link>
            <Link to='https://google.com'>
                <span><MdEmail/></span>
            </Link>
        </div>
    );
};

export default SocialIcons;