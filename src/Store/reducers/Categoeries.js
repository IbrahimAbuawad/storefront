const initialState = {
  // categoryList: [
  //   { _id: 98765, name: 'electronics', description: 'Category Description Goes Here' },
  //   { _id: 12345, name: 'food', description: 'Category Description Goes Here' }
  // ],
  
  categories: []
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INACTIVE':
      return initialState;

    

    case 'GET_CATE':
      const categories = payload // [{},{},{}]
      return {categories : categories};

    default:
      return state;
  }
}





