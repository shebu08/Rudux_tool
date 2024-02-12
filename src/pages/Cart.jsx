import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../store/CartSlice'


const Cart = () => {
  const dispatch = useDispatch();
  
  const products = useSelector(state=>state.cart)
  const handelRemove = (productid)=>{
    dispatch(remove(productid))
    
  }
  return (
    <div>
      <h3>
        Cart
      </h3>
      <div className='cartWrapper'>
        {
            products.map(product =>(
              <div className='cartCard'>
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button className='btn' onClick={()=>handelRemove(product.id)}>Remove</button>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cart