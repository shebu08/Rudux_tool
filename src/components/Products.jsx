import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { add } from '../store/CartSlice';
import {  useDispatch } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch();
    const [products , setProducts] = useState([]);
    const [IsError , setError] = useState("");
    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                const res = await axios.get('https://fakestoreapi.com/products')
                // const res = await fetch('https://fakestoreapi.com/products');
                // const data = await res.json();
                console.log(res.data);
                setProducts(res.data)
                
            } catch (error) {
                setError(error)
                
            }
           

        }
        fetchProducts();

    },[])


    const handelAdd = (product) =>{
        dispatch(add(product))


    }
  return (
    <div className='productsWrapper'>
        {IsError !== '' && <h2>{IsError.message}</h2>}
        {
            products.map((product)=>(
                
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h2>{product.title}</h2>
                    <h2>{product.price}</h2>
                    <button onClick={()=> handelAdd(product)} className='btn'>Add To Cart</button>

                </div>
            ))
        }
        
    </div>
  )
}

export default Products