import React , {useEffect,useState} from 'react';
import {getProducts,getProductByLimit} from './../../../utills/api';
import Grid from '@mui/material/Grid';
import ProductDesign from '../Product/product';
import {work} from './../../middleware/middleware';

const Deals=({seeMorep,statusControl,setProductId})=>{

  const [productList,setProductList]=useState([]);

  useEffect(() => {
    const chooseFunction = seeMorep ? getProducts():getProductByLimit(); 
    work(chooseFunction,setProductList);  
  }, [seeMorep]);

  const seeDetails=(id)=>{
    statusControl('Product');
    setProductId(id);
  }

return(
  <>
  <Grid container  justifyContent={'center'} spacing={2} >
    {productList.map((product)=>{
      return (
          <ProductDesign product={product} seeDetails={seeDetails}/>
      );
    })}
  </Grid>
  </>
);
}
export default Deals;