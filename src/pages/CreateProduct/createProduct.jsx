import React,{useState,useEffect} from 'react';
import './createProduct.css';

const CreateProduct=()=>{

const [inputs, setInputs] = useState({});


const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: inputs.title,
                price: inputs.title,
                description: inputs.title,
                image: inputs.title,
                category: inputs.title
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))

  }
 

    return(
        <>
        <div className='createProduct'>
        <form onSubmit={handleSubmit}>
        <label>Enter product title:
        <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
        />
        </label>
        <label>Enter price:
        <input 
          type="number" 
          name="price" 
          value={inputs.price || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Descripton:
        <input 
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter image:
        <input 
          type="text" 
          name="image" 
          value={inputs.image || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter category:
        <input 
          type="category" 
          name="category" 
          value={inputs.category || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
        </form>
        </div>
        </>
    );
}
export default CreateProduct;