//import Viewport from "../../../hook/viewport";
import cls from "./Products.module.css";
import { Link, useNavigate } from "react-router-dom";
const ProductNav = ({ onOpen }) => {
  const goPrevPage = useNavigate();
  const goBack = () => {
    goPrevPage(".."); //parent Route
  };

  return (
    <nav className={cls.productnav}>
      <button onClick={onOpen}>→</button>
      <div className={cls.navContent}>
        <button onClick={goBack}>←</button>
          <Link to="/cart" className={cls.navContent__cart}>cart</Link>
        <h1>Products</h1>
      </div>
    </nav>
  );
};
export default ProductNav;
