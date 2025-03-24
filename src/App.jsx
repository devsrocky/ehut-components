import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/in/HomePage";
import HandleLayout from "./components/masterlayout/HandleLayout";
import EhutLoading from "./components/loader/EhutLoading";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import ShopPage from "./pages/in/ShopPage";



const App = () => {
  return (
    
   <Provider store={store}>
    <Fragment> 
      <BrowserRouter>
      <HandleLayout>
        <Routes>

          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />

        </Routes>

        <EhutLoading/>

        </HandleLayout>
      </BrowserRouter>
    </Fragment> 
   </Provider>

  );
}

export default App;