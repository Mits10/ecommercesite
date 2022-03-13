import React,{useState} from 'react';
import { updateProduct } from '../../utills/api';
import { workB } from '../../component/middleware/middleware';
import ProductForm from '../../component/Form/productForm';

const UpdateProduct=({setOption,productId})=>{
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => {
            return{
                ...values,
                 [name]: value
                };
            }
        );
      }
    
      const handleSubmit =  (e) => {
        e.preventDefault();
        const chooseFunction= updateProduct(productId,inputs);
        workB(chooseFunction);
        setOption('Product');
      }

    return(
        <>
        <ProductForm inputs={inputs}handleChange={handleChange}handleSubmit={handleSubmit}/>
        </>
    );
}
export default UpdateProduct;