import { Fragment } from "react";
import AppNav from "./components/masterlayout/AppNav";
import Navigation from "./components/masterlayout/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/in/HomePage";
import EhutLoading from "./components/loader/EhutLoading";


const App = () => {
  return (
    
   <Fragment> 
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<EhutLoading/>}/>

        </Routes>
      </BrowserRouter>
   </Fragment> 

  );
}

export default App;