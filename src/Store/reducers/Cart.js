
const initialState = {

    cartItems: [],
    cartNumbers: 0,

}

export default function Reducer(state = initialState, action) {
    

    const { type, payload } = action;
    let remove;
    switch (type) {
        case 'ADD_TO_CART':
            let dublicate = true;

            console.log('before', payload.product_inStock);
            payload.product_inStock--;
            console.log('after', payload.product_inStock);

            console.log('cart',state.cartItems);
            // eslint-disable-next-line array-callback-return
            state.cartItems.map(item => {
                if (item._id === payload.product_id) {
                    dublicate = false
                }
            }

            )
            if (dublicate) {
                return { cartItems: [...state.cartItems, { 'name': payload.product_name, '_id': payload.product_id,'inStock':payload.product_inStock }], cartNumbers: state.cartNumbers + 1 };
            }
            return { cartItems: [...state.cartItems], cartNumbers: state.cartNumbers }






        case 'REMOVE_FROM_CART':
            remove = state.cartItems.filter((items => items._id !== payload.product_id));
            return { cartItems: remove, cartNumbers: state.cartNumbers - 1 }

        default:
            return state;
    }
}




