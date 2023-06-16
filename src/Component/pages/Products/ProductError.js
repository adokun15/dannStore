import ErrorImg from "../../../Imgs/error_FILL0_wght400_GRAD0_opsz48.png";
//import ProductNav from "./ProductNav";
import cls from "./Products.module.css";
import { useRouteError } from "react-router-dom";
import Viewport from "../../../hook/viewport";
//import ProductSideBar from "./SideBar";
const ProductError = () => {
  const err = useRouteError();

  const { phoneViewport } = Viewport();

  const classes = phoneViewport
    ? `${cls.productError} ${cls.productError__mobile}`
    : `${cls.productError}`;

  let title = "An Error Occured";
  let message = "Something Went Wrong";

  if (err.status === 500) {
    message = err.data.message;
  }
  if (err.status === 401) message = err.message;

  return (
    <main>
      <section className={classes}>
        <img src={ErrorImg} alt="an error" />
        <h1>{title}</h1>
        <h3>{message}</h3>

        <button>Reload</button>
      </section>
    </main>
  );
};

export default ProductError;
