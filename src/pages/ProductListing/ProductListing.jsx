import Grid from '@mui/material/Grid';
import React , {useEffect,useState} from 'react';
import ProductDesign from './../../component/products/Product/product';
import CategoryFilter from '../../component/Filters/CategoryFilter';
import { getProductByCategory, sortProduct } from '../../utills/api';
import { work } from '../../component/middleware/middleware';
import OrderFilter from '../../component/Filters/OrderFilter';

const ProductListing=({statusControl,setProductId})=>{
const [productList,setProductList]=useState([]);
const onSort=(type,value)=>{
console.log(value);
const chooseFunction = 
type==='Order' ? sortProduct(value)
: getProductByCategory(value);
work(chooseFunction,setProductList);
}
const seeDetails=(id)=>{
    statusControl('Product');
    setProductId(id);
  }
 return(
 <>
 <div>
  <Grid container>

    <Grid item md={4}>
     <Grid item xs={12}>
       <CategoryFilter onSort={onSort}/>
       <OrderFilter onSort={onSort}/>
     </Grid>
    </Grid>
    <Grid container>
    {/*<Grid item md={8}>
     <Grid item xs={12}>*/}
     {productList.length <=0 ? 
     <>
         <div>Loading...</div>
    </> :
     
     productList.map((product)=>{
      return (
          <ProductDesign product={product} seeDetails={seeDetails}/>
      );
    })
    
    }
    </Grid>
     {/*</Grid>
    </Grid>*/}

 </Grid>
        </div>
        </>
    );
}
export default ProductListing;