import Viewport from "../../../hook/viewport";
import AsyncPage from "../../Util/AsyncPage";
//import { DummyJson } from "../../Util/FetchUrl";
import Category from "./Data/GetCategory";
import cls from "./Products.module.css";
import { Await, useRouteLoaderData } from "react-router-dom";
const ProductSideBar = ({ onClose }) => {
  const { category } = useRouteLoaderData("product-category");

  const { phoneViewport } = Viewport();

  const classes = phoneViewport
    ? ` ${cls.productsidebar} ${cls.productsidebar__mobile} 
    `
    : `${cls.productsidebar}`;

  return (
    <AsyncPage className={cls.productsidebar}>
      <Await resolve={category}>
        {(loadingProduct) => (
          <div key={loadingProduct} className={classes}>
            <h2>product Category</h2>
            <Category data={loadingProduct} onClose={onClose} />
          </div>
        )}
      </Await>
    </AsyncPage>
  );
};

export default ProductSideBar;
