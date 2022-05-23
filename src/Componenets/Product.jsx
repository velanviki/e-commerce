import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {addCart} from "../redux/action"
import { NavLink, useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await res.json());
    };
    getProducts();
  }, [id]);

  const ShowProducts = () => {
    return (
        
        <>
<div className="col-md-6">
    <img src={product.image} alt={product.titlt} height="400px" width="400px"/>
</div>
<div className="col-md-6">
    <h3 className="text-uppercase text-black-50">
        {product.category}
    </h3>
    <h4 className="display-6">{product.title}</h4>
    <p>{product.description}</p>
    <br></br>
    <p className="lead fw-bold ">
        Rating {product.rating && product.rating.rate} 
         <i className="fa fa-star ms-3"></i>
    </p>
    <p className="display-6 ">
        Rs : {product.price} 
    </p>
    <button className="btn btn-outline-success mt-4" onClick={()=>addProduct(product)}>Add to cart</button>
    <NavLink to="/cart" className="btn btn-outline-success mt-4 ms-3">Go to cart</NavLink>

</div>

        </>

    )
   
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};

export default Product;
