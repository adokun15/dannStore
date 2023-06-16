import { CartContext } from "../../CartReducer/CartReducer";
import { useContext, useState } from "react";
import cls from "./Cart.module.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Viewport from "../../../hook/viewport";
import Nav from "../Home/NavBar";
const Cart = () => {
  const CartCtx = useContext(CartContext);
  const { phoneViewport } = Viewport();

  const classes = phoneViewport
    ? `${cls.cart} ${cls.cart__mobile}`
    : `${cls.cart}`;

  const [success, setSuccess] = useState(false);
  const orderHandler = () => {
    setSuccess(true);
    CartCtx.orderHandler();
  };

  return (
    <section className={cls.cart__section}>
      <Nav />
      <main className={classes}>
        {!success && (
          <>
            <header className={cls.header}>
              <h1>Cart</h1>
              <h3>Total: ${CartCtx.cartTotal ? CartCtx.cartTotal : 0}</h3>
            </header>

            <CartItem />

            <div className={cls.cart__action}>
              <div>
                <button>
                  <Link to="/product">Products</Link>
                </button>
                {CartCtx.cartItem.length > 0 && (
                  <button onClick={orderHandler}>Order</button>
                )}
              </div>
            </div>
          </>
        )}
        {success && (
          <>
            <h1 className={cls.success}>Successful!!</h1>
            <p className={cls.success__paragraph}>
              <Link to="/">visit Store</Link>
            </p>
          </>
        )}
      </main>
    </section>
  );
};
export default Cart;
