import React,{ useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addCart } from "../redux/action/index";


const Cart = () => {
  const state = useSelector((state)=> state.addCart)
const dispatch = useDispatch()



  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4'>
          <h2>Cart items</h2>
        </div>
      </div>

    </div>
  )
}

export default Cart