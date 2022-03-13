import React from 'react';
import './Header.css';
const Header =({statusControl})=>{
    return(
        <>
        <div className="topnav">
        <a className="active" href="#home" onClick={()=>statusControl('Home')}>Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#create" onClick={()=>statusControl('Create Product')}>Create Product</a>
        <a href="#products" onClick={()=>statusControl('Products')}>Products</a>
        <input type="text" placeholder="Search.."/>
        </div>
        </>
    );
}
export default Header;