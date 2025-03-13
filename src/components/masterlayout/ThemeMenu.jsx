import React from 'react';
import ThemeToggle from '../tools/ThemeToggle';

const ThemeMenu = () => {
    return (
        <div className='ehut-theme-menu'>
            <div className="row">
                <div className="col-4">Theme</div>
                <div className="col-8"><ThemeToggle/></div>
            </div>
        </div>
    );
};

export default ThemeMenu;