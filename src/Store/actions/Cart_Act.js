export const addToCart = (product_id,product_name,product_inStock) => {
    return {
      type: 'ADD_TO_CART',
      payload:{product_id,product_name,product_inStock}
    }
  }
  
  export const removeFromCart = (product_id) => {
    return {
      type: "REMOVE_FROM_CART",
      payload:{product_id}
    }
  }