import React from 'react';

const FilterByCategory = () => {

    const handleClicker = () => {
        alert('Hello')
    }


    return (
        <div className='category-widgets'>
            <h5 className='title' style={{fontSize: '15px', letterSpacing: '1px'}}>categories</h5>
            <div className="categories">
                <span onClick={handleClicker}>Men</span>
                <span>women</span>
                <span>kids</span>
                <span>shoes</span>
                <span>t-shirt</span>
                <span>sharee</span>
                <span>three piece</span>
                <span>Jeans</span>
                <span>Tops</span>
                <span>hoodie</span>
                <span>Jackate</span>
                <span>sun glasses</span>
            </div>
        </div>
    );
};

export default FilterByCategory;