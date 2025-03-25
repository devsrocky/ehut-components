import React from 'react';

const ApplyFilter = () => {
    return (
        <div className='buttons d-flex justify-content-between align-items-center pt-2'>
            <button className='clear-filter'> <i className="bi bi-x-lg"></i> Clear</button>
            <button className='apply-filter'>Apply filter</button>
        </div>
    );
};

export default ApplyFilter;