import React from 'react';

const FilterBySize = () => {
    return (
        <div className='category-widgets'>
            <h5 className='title' style={{fontSize: '15px', letterSpacing: '1px'}}>size</h5>
            <div className="categories">
                <span>SM</span>
                <span>MD</span>
                <span>LG</span>
                <span>XL</span>
                <span>XXL</span>
            </div>
        </div>
    );
};

export default FilterBySize;