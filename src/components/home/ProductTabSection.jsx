import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BiArrowToRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ProductTabSection = () => {


    return (
        <div className='container ehut-tab-section'>
            <div className="row">

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 sm-flex-space">
                    <h2 className='title'>Products</h2>
                    <Link className='title tr3 shop-visit desk-hide mob-visi'> Shop 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <Tabs defaultActiveKey="All" id="fill-tab-example" className="mb-3" fill>

                        <Tab eventKey="All" title="All"></Tab>
                        <Tab eventKey="Men" title="Men"></Tab>
                        <Tab eventKey="Women" title="Women"></Tab>
                        <Tab eventKey="Kids" title="Kids"></Tab>

                        {/* <Tab eventKey="contact" title="Contact" disabled>
                            Tab content for Contact
                        </Tab> */}
                    </Tabs>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 d-flex justify-content-end mob-hide">
                    <Link className='title tr3 shop-visit'> Shop 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProductTabSection;