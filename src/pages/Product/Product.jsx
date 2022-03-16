import DailyDeals from './../Home/DailyDeals/dailyDeals';
import './Product.css';
import React,{useState,useEffect} from 'react';
import {getProduct,deleteProduct} from './../../utills/api';
import {work,workB} from './../../component/middleware/middleware';
import { useNavigate} from "react-router-dom";

const Product=({productId})=>{
 
 const [productDetail,setProductDetail]=useState(null);
 const navigate=useNavigate();
 const toEditProduct=()=>{
   navigate(`/Edit-product/${productId}`);
 }
 const status=()=>{
    toEditProduct();
 }

 useEffect(() => {
  const chooseFunction=getProduct(productId);
  work(chooseFunction,setProductDetail);       
 }, [productId])

const on_delete=()=>{
    const chooseFunction= deleteProduct(productId);
    workB(chooseFunction);  
    }

    return(
        <>
        {productDetail=== null ? <h2>.....Loading</h2>
        :
        <>
       
       
         <div>
        <div className='productA'>
            <div className='productAChild'>
                <div className='imageA'>
                        <h2>hi</h2>
                        <img src={productDetail.image} className='imageyu'/>
                    </div> 
                    <div className='imageB'>
                    <h2>hi</h2>
                    </div>
            </div>
            <div className='productB'>
                <h2>title : {productDetail.title}</h2>
                <h2>price : {productDetail.price}</h2>
                <h2>Category : {productDetail.category}</h2>
                <h2>size</h2>
                <ul>
                    <li><button>S</button></li>
                </ul>
                <h2>Color</h2>
                <ul>
                    <li>
                        <button>RED</button>
                    </li>
                </ul>
                <h2>Quantity</h2>
                <button>ADD To Basket</button>
                <button>WishList</button>
                <button onClick={()=>status()}>Edit</button>
                <button onClick={on_delete}>Delete</button>
                <div>
                    <div>
                        <h2>Free Shipping</h2>
                        <p>fffffffffff</p>
                    </div>
                    <div>
                        <h1>Retrurn Policy</h1>
                        <p>fdddddddddd</p>
                    </div>
                </div>
                <button>Description</button>
                <button>Size & Fit</button>
            </div>
        </div>
        <div>
            <h2>Customers also brought these</h2>
            <DailyDeals/>
        </div>
        </div>
        
       </>
        }
        </>
    );
}
export default Product;