import React from 'react';
import ThemeToggle from '../tools/ThemeToggle';

const ThemeMenu = () => {
    return (
        <div className='ehut-theme-menu px-4' style={{zIndex: '101'}}>
            <div className="row">
                <div className="col-4 P0">Theme</div>
                <div className="col-8 P0"><ThemeToggle/></div>
            </div>
        </div>
    );
};

export default ThemeMenu;