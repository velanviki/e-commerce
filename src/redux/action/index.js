// Add item to cart

export const addCart = (product)=>{
    return{
        type : "ADDITEM",
        payload : product
    }
}


// Delete item from cart

export const deleteCart = (product)=>{
    return{
        type : "DELETEITEM",
        payload : product
    }
}