import axios from "axios";
const initialState = {

    cartItems: [],
    cartNumbers: 0,
    justForRealLoad: 0
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

            console.log('cart', state.cartItems);
            // eslint-disable-next-line array-callback-return
            try {
                // eslint-disable-next-line array-callback-return
                state.cartItems.map(item => {
                    if (item._id === payload.product_id) {
                        dublicate = false
                    }
                }

                )
                if (dublicate) {
                    const data = {
                        'inStock': payload.product_inStock--
                    }
                    const update = async () => {
                        await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${payload.product_id}`, data);

                    }
                    update()
                    return { cartItems: [...state.cartItems, { 'name': payload.product_name, '_id': payload.product_id, 'inStock': payload.product_inStock }], cartNumbers: state.cartNumbers + 1,justForRealLoad:state.justForRealLoad-1 };

                }
            } catch (error) {
                console.error();
            }

            return { ...state, justForRealLoad:state.justForRealLoad+1 }

        case 'REMOVE_FROM_CART':
            const data = {
                'inStock': payload.product_inStock + 2
            }
            console.log('👌', payload.product_inStock);
            const returnItem = async () => {
                await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${payload.product_id}`, data);

            }
            returnItem()
            remove = state.cartItems.filter((items => items._id !== payload.product_id));
            return { cartItems: remove, cartNumbers: state.cartNumbers - 1 }

        default:
            return state;
    }
}




