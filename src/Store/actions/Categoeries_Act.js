export const inactive = () => {
    return {
      type: 'INACTIVE'
    }
  }
  
  

  export const getAction = (payload) => {
    return {
      type: "GET_CATE",
      payload 
    }
  }


  export const getCategories = () => {
    return async (dispatch, getState) => {
      // const state = getState();
      const raw = await fetch('https://api-js401.herokuapp.com/api/v1/categories');
      const results = await raw.json();
      console.log('DATA', results.results);
      dispatch(getAction(results.results));
    };
  };


