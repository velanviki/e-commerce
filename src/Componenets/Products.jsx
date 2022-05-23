import React from "react";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      setData(await res.clone().json());
      setFilter(await res.json());
    };
    getProducts();
  }, []);

  const  filteredProducts=(cat)=>{
const updatedList = data.filter((x)=>x.category === cat);
setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center">
          <div className="btn btn-outline-success me-3" onClick={()=>setFilter(data)}>All</div>
          <div className="btn btn-outline-success me-3" onClick={()=>filteredProducts("electronics")}>electronics</div>
          <div className="btn btn-outline-success me-3" onClick={()=>filteredProducts("jewelery")}>jewelery</div>
          <div className="btn btn-outline-success me-3" onClick={()=>filteredProducts("men's clothing")}>men's clothing</div>
          <div className="btn btn-outline-success me-3" onClick={()=>filteredProducts("women's clothing")}>women's clothing</div>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 mt-5">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    height="250px"
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <p className="card-title">{product.title}</p>
                    <h4 className="card-text">Rs : {product.price}</h4>
                    <NavLink to={`/product/${product.id}`} className="btn btn-outline-success mt-4">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};

export default Products;
