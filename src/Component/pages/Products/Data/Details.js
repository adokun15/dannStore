import cls from "../../Products/Products.module.css";
import { CartContext } from "../../../CartReducer/CartReducer";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Viewport from "../../../../hook/viewport";
const Details = ({ d }) => {
  const navigate = useNavigate();

  d.newPrice = Number.parseInt(
    (d.price - (d.price * d.discountPercentage) / 100).toFixed(2)
  );

  const goHome = () => {
    navigate("/product");
  };

  const Cart = useContext(CartContext);

  const getCurrentCart = () => {
    const currentObj = Cart.cartItem.find((item) => item.id === d.id);
    const amt = currentObj ? currentObj.amt : "";
    return amt;
  };

  const addToCart = () => {
    let stock;

    stock = d.stock - getCurrentCart();
    if (stock === 0) return;

    Cart.addToItem({ ...d, amt: 1 });
    getCurrentCart();
  };

  const removeFromCart = () => {
    Cart.removeItem(d.id);
    getCurrentCart();
  };

  const { phoneViewport } = Viewport();

  const classes = phoneViewport
    ? `${cls.productDetail} ${cls.productDetail_mobile}`
    : `${cls.productDetail}`;

  return (
    <main className={classes}>
      <div className={cls.productDetail__imgCont}>
        <img src={d.thumbnail} alt={d.brand} />
      </div>
      <h2>
        <span>rating: {d.rating ? `${d.rating} / 5.0` : ""}</span>
        <span className={cls.title}>{d.title}</span>
      </h2>

      <div className={cls.productDetail__price}>
        <h3>${d.newPrice}</h3>

        <h3>${d.price}</h3>
      </div>

      <div className={cls.productDetail__qty}>
        {getCurrentCart() && (
          <h3 className={cls.productDetail__qty__cart}>
            cart : <span>{getCurrentCart()}</span>
          </h3>
        )}
        <h3 className={cls.productDetail__qty__stock}>
          In Stock: <span>{d.stock ? d.stock - getCurrentCart() : 0}</span>{" "}
        </h3>
      </div>
      <div className={cls.productDetail__desc}>
        <p>{d.description}</p>
      </div>

      <div className={cls.productDetail__action}>
        <button onClick={goHome}>Go back</button>
        <div className={cls.productDetail__Cart}>
          <button onClick={addToCart}>Add to Cart</button>
          {getCurrentCart() && (
            <button onClick={removeFromCart} className={cls.reduce__item}>
              -
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Details;
