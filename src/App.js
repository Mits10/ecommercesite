
import React,{useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/index';
import Product from './pages/Product/Product';
import ProductListing from './pages/ProductListing/ProductListing';
import CreateProduct from './pages/CreateProduct/createProduct';
import UpdateProduct from "./pages/EditProduct/updateProduct";
import Header from "./pages/Home/Header/Header";
import Footer from "./pages/Home/Footer/Footer";
function App() {
  const [productId,setProductId]=useState();
 return(
   <>
   <Header/>
  <Routes>

    <Route
     path= '/'
     element={<Home
      setProductId={setProductId}
     />}
    />
     <Route 
     path="*" 
     element={<h1>404 page not found!</h1>} />
     <Route
     path='/Create-product'
     element={<CreateProduct/>}
     />
     <Route
     path='/Edit-product/:productId'
     element={<UpdateProduct/>}
     />
     <Route
     path='/Product'
     element={<Product 
     productId={productId} />}
     />
     <Route
     path='/Products'
     element={<ProductListing 
     setProductId={setProductId}/>}
     />
  </Routes>
  <Footer/>
   </>
 );
}

export default App;
