import React from 'react';
import { OpenEhutLoader } from '../../redux/states/settingSlice';
import store from '../../redux/store/store';
const HomePage = () => {

    const Loader = () => {
        
        store.dispatch(OpenEhutLoader())

    }

    return (
        <div>
            

            <h1>Ehut shopping</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quia. Vel ratione laboriosam blanditiis mollitia, sequi praesentium animi ad suscipit debitis libero. Esse, voluptate. Non magni praesentium fugiat accusamus fugit.

            <button onClick={Loader}>show loader</button>

        </div>
    );
};

export default HomePage;