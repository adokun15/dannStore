import { createContext, useReducer } from "react";
export const CartContext = createContext({
  items: [],
  total: 0,
  addToItem: (item) => {},
  removeItem: (id) => {},
  exitItem: (id) => {},
  orderHandler: () => {},
});

const DefaultCartContext = {
  items: [],
  total: 0,
};

const reducerFn = (state, action) => {
  if (action.type === "add") {
    const updateTotalAmt =
      state.total + action.items.newPrice * action.items.amt;
    const ids = state.items.findIndex((item) => item.id === action.items.id);
    const existed = state.items[ids];

    let newItems;
    if (existed) {
      const newItem = {
        ...existed,
      };
      newItem.amt++;
      newItems = [...state.items]; //get previous stored item
      newItems[ids] = newItem; //set new items
    } else {
      newItems = state.items.concat(action.items);
    }

    console.log("newItem", newItems);
    return {
      items: newItems,
      total: updateTotalAmt,
    };
  }

  if (action.type === "remove") {
    const ids = state.items.findIndex((item) => item.id === action.id);
    const existed = state.items[ids];

    const total = state.total - existed.newPrice;

    let newItems;
    console.log(ids);
    if (existed.amt === 1) {
      newItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const newItem = { ...existed };
      newItem.amt--;

      newItems = [...state.items];

      newItems[ids] = newItem;
    }

    return {
      items: newItems,
      total: total,
    };
  }
  if (action.type === "exit") {
    const items = state.items.filter((item) => item.id !== action.id);
    const CurrentItem = state.items.find((item) => item.id === action.id);

    const total = state.total - CurrentItem.newPrice * CurrentItem.amt;
    return {
      items: items,
      total: total,
    };
  }
  if (action.type === "order") {
    return {
      items: [],
      total: 0,
    };
  }
  return DefaultCartContext;
};
const Cart = (prop) => {
  const [cartState, dispatchCart] = useReducer(reducerFn, DefaultCartContext);

  const addItemHandler = (item) => {
    dispatchCart({ type: "add", items: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "remove", id: id });
  };

  const exitItemHandler = (id) => {
    dispatchCart({ type: "exit", id: id });
  };
  const orderHandler = () => {
    dispatchCart({ type: "order" });
  };
  const cartContext = {
    cartItem: cartState.items,
    cartTotal: cartState.total,
    addToItem: addItemHandler,
    removeItem: removeItemHandler,
    exitItem: exitItemHandler,
    orderHandler: orderHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {prop.children}
    </CartContext.Provider>
  );
};

export default Cart;
