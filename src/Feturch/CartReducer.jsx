// eslint-disable-next-line react-refresh/only-export-components
export const totalItem=(cart)=>{
    return cart.reduce((sum,Product)=> sum+Product.quantity,0)
}
 // eslint-disable-next-line react-refresh/only-export-components
 export const totaPrice = (cart) => {
    // Product.Price এর বদলে Product.price হবে
    return cart.reduce((total, product) => total + product.quantity * product.price, 0);
};

// eslint-disable-next-line react-refresh/only-export-components
const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.Product];

    case "Remove":
      // রিমুভ করার জন্য ফিল্টার ব্যবহার করুন
      return state.filter(p => p.id !== action.id);

    case "Increase":
      return state.map(p => 
        p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
      );

    case "Decrease":
      return state.map(p => 
        p.id === action.id && p.quantity > 1 
          ? { ...p, quantity: p.quantity - 1 } 
          : p
      );

    default:
      return state; // এখানে return দিতেই হবে
  }
};

export default CartReducer;
