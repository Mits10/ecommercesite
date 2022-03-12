import Header from './Home/Header/Header';
import Footer from './Home/Footer/Footer';
import Home from './Home';
import Product from './Product/Product';
import React,{useState} from 'react';
import CreateProduct from './CreateProduct/createProduct';

const Page=()=>{
    const [pageStatus,setPageStatus]=useState('Home');
    const [productId,setProductId]=useState();
    const statusControl=(variable)=>{
        setPageStatus(variable);
    }
  
    return(
        <>
        <Header statusControl={statusControl}/>
        {pageStatus ==='Home' ? 
        <Home statusControl={statusControl} setProductId={setProductId}/>
        :pageStatus ==='Product' ?  <Product productId={productId} />
        : <CreateProduct/>
    }
        <Footer/>
        {console.log(pageStatus)}
        </>
    );
}
export default Page;