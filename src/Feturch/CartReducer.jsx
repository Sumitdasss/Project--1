// eslint-disable-next-line react-refresh/only-export-components
export const totalItem = (cart) => {
  return cart.reduce((sum, Product) => sum + Product.quantity, 0);
};

// eslint-disable-next-line react-refresh/only-export-components
export const totaPrice = (cart) => {

  return cart.reduce((total, product) => total + product.quantity * product.price, 0);
};

// eslint-disable-next-line react-refresh/only-export-components
const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
     
      { const itemToAdd = action.Product || action.Product2 || action.Product3 || action.item || action.product;

      
      const existingProduct = state.find((p) => p.id === itemToAdd.id);
      
      if (existingProduct) {
        return state.map((p) =>
          p.id === itemToAdd.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      
      
      return [...state, { ...itemToAdd, quantity: 1 }];
     }

    case "Remove":
      return state.filter((p) => p.id !== action.id);

    case "Increase":
      return state.map((p) =>
        p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
      );

    case "Decrease":
      return state.map((p) =>
        p.id === action.id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );

    default:
      return state;
  }
};

export default CartReducer;
