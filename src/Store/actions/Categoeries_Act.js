export const inactive = () => {
    return {
      type: 'INACTIVE'
    }
  }
  
  export const active = (category, description) => {
    return {
      type: "ACTIVE",
      payload: {
        category,
        description
      }
    }
  }