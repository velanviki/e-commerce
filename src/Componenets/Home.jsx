import React from 'react'
import Products from "./Products";

const Home = () => {
  return (
    <div>
      
        <div class="card bg-dark text-white border-0">
  <img src="https://media.istockphoto.com/photos/full-length-lively-energetic-little-boy-in-tshirt-and-denim-jumping-picture-id1201545348?k=20&m=1201545348&s=612x612&w=0&h=TpM2y7n8lcTpZbDAH6i4-XW3ITbdsqJrk-gVGm02x3c=" class="card-img" alt="Background" height="610px"/>
  <div class="card-img-overlay d-flex  flex-column justify-content-center ml-2">
      <div className="cotainer">
      <h2 class="card-title display-3">SHOPPING </h2>
    <p class="card-text lead fs-2">TRENDING PRODUCTS</p>
   
      </div>
 
  </div>
</div>
<Products/>
    </div>
  )
}

export default Home