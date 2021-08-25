
export const filtering = (payload) => {
  return {
    type: "FILTER",
    payload
  }
}


export const active = (payload) => {
  return {
    type: "ACTIVE",
    payload
  }
}




export const getProduct = () => {
  return async (dispatch, getState) => {
    // const state = getState();
    const raw = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    const results = await raw.json();
    console.log('product', results.results);
    dispatch(active(results.results));
  };
};



// export const removeFromStock = () => {
//   return async (dispatch, getState) => {
//     const state = getState();
//     try {
      
//       const data = {
//         'inStock': state.cart.cartItems[state.cart.cartItems.length-1].inStock--
//       }
//       let updatedStock;
//       // eslint-disable-next-line array-callback-return
//       state.products.allProducts.map(async e => {
  
//         if (e._id === state.cart.cartItems[state.cart.cartItems.length-1]._id) {
//           console.log('all product ids',e._id,'id state',state.cart.cartItems[state.cart.cartItems.length-1]._id);
//           updatedStock = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${e._id}`, data);
//           console.log('update Stock', updatedStock)

//         }
//       })

//     } catch (error) {
//       console.error();
//     }
    

//   };
// };