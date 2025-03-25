import React, { Fragment, useRef } from 'react';
import PriceRange from '../drivers/PriceRange';
import FilterByCategory from '../drivers/FilterByCategory';
import Spacer from '../drivers/Spacer';
import FilterBySize from '../drivers/FilterBySize';
import FilterByColor from '../drivers/FilterByColor';
import { Filter } from 'react-bootstrap-icons';
import { MdShortcut } from 'react-icons/md';
import ApplyFilter from '../elements/ApplyFilter';
import CustomSelect from '../elements/SelectOptions';
import ProductGrid from '../product/ProductGrid';
import ProductGrid3 from '../product/ProductGrid3';

const FilterAndProduct = () => {

    const responsiveFilterRef = useRef(null)

    const closeHandler = () => {
        const responsiveFilter = responsiveFilterRef.current;
        if(responsiveFilter.classList.contains('active')){
            responsiveFilter.classList.remove('active')
            document.body.style.overflow = 'visible';
        }
    }

    const FilterResponsiveHandler = () => {
        const responsiveFilter = responsiveFilterRef.current;
        if(!responsiveFilter.classList.contains('active')){
            responsiveFilter.classList.toggle('active')
            document.body.style.overflow = 'hidden';
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="filterIcons flex-none d-flex justify-content-between align-items-center">
                            <button onClick={FilterResponsiveHandler}> <Filter/> <span>Filter</span></button>
                            <div className='sort-by d-flex justify-content-between'>
                                <span>sort by</span>
                                <CustomSelect/>
                            </div>
                        </div>
                        <div ref={responsiveFilterRef} className="filter p-3">
                            <div className="filter-nav d-flex justify-content-between align-items-center">
                                <h2 className='title' style={{fontWeight: '600'}}>Filter By</h2>
                                <span onClick={closeHandler} className='close d-none mob-visi'><i class="bi bi-x-lg"></i></span>
                            </div>
                            <PriceRange/>
                            <Spacer Space={20} />
                            <FilterByCategory />
                            <Spacer Space={15} />
                            <FilterBySize/>
                            <Spacer Space={15} />
                            <FilterByColor />
                            <Spacer Space={10} />
                            <ApplyFilter />


                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <ProductGrid3/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FilterAndProduct;