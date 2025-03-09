import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const EhutLoading = () => {

    const loader = useSelector((state) => (state.setting.loader))

    return (
        <Fragment>
            <div className={loader + ' ehut-loading'} style={{zIndex: '20000'}}>
                <div className="loader-wrapper">
                    <div className="loader-container"></div>
                    <div className="bag">
                        <div className="letters">
                            <div className="letter">E</div>
                            <div className="letter">H</div>
                            <div className="letter">U</div>
                            <div className="letter">T</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EhutLoading;
