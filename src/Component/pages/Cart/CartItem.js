import cls from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../CartReducer/CartReducer";

const CartItem = () => {
  const ctx = useContext(CartContext);

  const removeItem = (id) => {
    ctx.exitItem(id);
  };
  return (
    <ul className={cls.cartItem}>
      {ctx.cartItem &&
        ctx.cartItem.map((item) => (
          <li key={item.id}>
            <h1>{item.title}</h1>
            <h3>${item.newPrice}</h3>
            <div className={cls.itemPrice}>
              <p>qty: {item.amt}</p>
            </div>

            <div className={cls.action}>
              <button onClick={removeItem.bind(null, item.id)}>
                Remove Item
              </button>
            </div>
          </li>
        ))}

      {ctx.cartItem.length === 0 && (
        <li className={cls.invalid}>
          <h3>No Product Item Available</h3>
        </li>
      )}
    </ul>
  );
};
export default CartItem;
