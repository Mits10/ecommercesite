import React,{useState,useEffect} from 'react';
const OrderFilter=({onSort})=>{
    const[order,setOrder]=useState(null);
    const handleChange = (e) => {
        setOrder(e.target.value);
        onSort("Order",order);
     }
    return (
        <>
        <form>
      <select value={order} onChange={handleChange}>
        <option value="asc">Ascending Order</option>
        <option value="desc">Dscending Order</option>
      </select>
    </form>
        </>
    )
}
export default OrderFilter;