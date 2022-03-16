import React , {useEffect,useState} from 'react';
import {getProducts,getProductByLimit} from './../../../utills/api';
import Grid from '@mui/material/Grid';
import ProductDesign from '../Product/product';
import {work} from './../../middleware/middleware';
import { useNavigate} from "react-router-dom";

const Deals=({seeMorep,setProductId})=>{
  const navigate=useNavigate();
  const toProduct=()=>{
    navigate('/Product');
  }
  const [productList,setProductList]=useState([]);

  useEffect(() => {
    const chooseFunction = seeMorep ? getProducts():getProductByLimit(); 
    work(chooseFunction,setProductList);  
  }, [seeMorep]);

  const seeDetails=(id)=>{
    toProduct();
    setProductId(id);
  }

return(
  <>
  <Grid container  justifyContent={'center'} spacing={2} >
    {productList.map((product)=>{
      return (
        <Grid item container md={3} >
        <Grid item xs={12}>      
          <ProductDesign product={product} seeDetails={seeDetails}/>
          </Grid>
          </Grid>
      );
    })}
  </Grid>
  </>
);
}
export default Deals;