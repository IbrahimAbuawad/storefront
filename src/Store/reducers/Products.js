import {getProducts} from "../actions/Product_Act";
const initialState = {

    productList: [
        { _id: '1', name: "1TB USB", category: "Electronics", inStock: 1936, price: 100.99 ,image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/SanDisk-Cruzer-USB-4GB-ThumbDrive.jpg/1200px-SanDisk-Cruzer-USB-4GB-ThumbDrive.jpg' },
        { _id: '2', name: "Printer", category: "Electronics", inStock: 1926, price: 100.99,image:'https://www.bhphotovideo.com/images/images2500x2500/canon_3771c002_pixma_ts3320_wireless_inkjet_1500489.jpg' },
        { _id: '3', name: "Mouse", category: "Electronics", inStock: 886, price: 100.99 ,image:'https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-hero.png?v=1'},
        { _id: '4', name: "Keyboard", category: "Electronics", inStock: 931, price: 100.99,image:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430231_sd.jpg' },
        { _id: '5', name: "TV", category: "Electronics", inStock: 1825, price: 698 ,image:'https://www.lg.com/eg_en/images/tvs/md07526146/gallery/D-2.jpg'},

        { _id: '6', name: "Pizza", category: "Food", inStock: 792, price: 100.1 ,image:'https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg'},
        { _id: '7', name: "Calzones", category: "Food", inStock: 777, price: 100.1,image:'https://hips.hearstapps.com/vidthumb/images/190130-calzone-horizontal-2-1549482540.png'},
    ],

    activeProduct: '',
    products: [],
}


export default function productReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            const products = getProducts(payload.category);
            return { ...state, products: products, activeProduct:payload.active}
        default:
            return state;
    }
}


