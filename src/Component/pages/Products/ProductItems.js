///import { DummyJson } from "../../Util/FetchUrl";
import Items from "./Data/GetItem";
import cls from "./Products.module.css";
import { Await, useRouteLoaderData } from "react-router-dom";
import AsyncPage from "../../Util/AsyncPage";
import Viewport from "../../../hook/viewport";
const ProductItems = () => {
  const { product } = useRouteLoaderData("product-category");
  const { phoneViewport } = Viewport();

  //  const widthLength = `width: ${width}`;
  const classes = phoneViewport
    ? ` ${cls.productItems} ${cls.productItems__mobile}`
    : `${cls.productItems}`;

  return (
    <AsyncPage className={cls.productItems}>
      <Await resolve={product}>
        {(loadingProduct) => (
          <section className={classes}>
            <h1>Products</h1>
            {!phoneViewport && <Items data={loadingProduct} />}
            {phoneViewport && (
              <div className={cls.productContainer}>
                <Items data={loadingProduct} />
              </div>
            )}
          </section>
        )}
      </Await>
    </AsyncPage>
  );
};
export default ProductItems;

/*
async function ProductData() {
  const res = await DummyJson("products");

  return res.products;
}
export async function GetProduct() {
  console.log(ProductData());
  return defer({ products: ProductData() });
}
*/
