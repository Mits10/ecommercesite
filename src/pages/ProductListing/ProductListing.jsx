import Grid from '@mui/material/Grid';
import React , {useState,useEffect} from 'react';
import ProductDesign from './../../component/products/Product/product';
import CategoryFilter from '../../component/Filters/CategoryFilter';
import { getProductByCategory, sortProduct, getProducts } from '../../utills/api';
import { work } from '../../component/middleware/middleware';
import OrderFilter from '../../component/Filters/OrderFilter';
import {useNavigate} from 'react-router-dom';

const ProductListing=({setProductId})=>{
const [productList,setProductList]=useState([]);
const navigate=useNavigate();

useEffect(()=>{
    work(getProducts(),setProductList);
}
    ,[]);

const onSort=(type,value)=>{
    console.log(value);
    const chooseFunction = 
    type==='Order' ? sortProduct(value)
    : getProductByCategory(value);
    work(chooseFunction,setProductList);
}

const seeDetails=(id)=>{
    navigate('/Product');
    setProductId(id);
  }
 return(
 <>
 <div>
  <Grid container>

    <Grid item md={3}>
     <Grid item xs={12}>
       <CategoryFilter onSort={onSort}/>
       <OrderFilter onSort={onSort}/>
     </Grid>
    </Grid>
    <Grid item md={9}>
     <Grid item xs={12}>
     <Grid container spacing={2}>
     {productList.length <=0 ? 
     <>
         <div>Loading...</div>
    </> :
     
     productList.map((product)=>{
      return (
        <Grid item md={4}>
        <Grid item xs={12}>
          <ProductDesign product={product} seeDetails={seeDetails}/>
        </Grid>
       </Grid>
      );
    })}
    </Grid>
    </Grid>
    </Grid>


 </Grid>
        </div>
        </>
    );
}
export default ProductListing;