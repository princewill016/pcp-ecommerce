const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      console.log("Adding item to cart:", action.payload);
      console.log("Current cart state:", state);
      const exist = state.find((x) => x.id === product.id);
      console.log("Existing item in cart:", exist);
      console.log(exist);
      if (exist) {
        console.log("Increasing quantity of existing item:", exist);
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        console.log("Adding new item to cart:", action.payload);
        return [
          ...state,
          {
            ...action.payload,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id); // Use exist1.id here
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;
