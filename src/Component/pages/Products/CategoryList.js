import { Link, useParams, Await, useLoaderData, defer } from "react-router-dom";
//import Items from "./Data/GetItem";
import cls from "./Products.module.css";
import { DummyJson } from "../../Util/FetchUrl";
import AsyncPage from "../../Util/AsyncPage";
import Viewport from "../../../hook/viewport";
const CategoryList = () => {
  const param = useParams();
  const { product } = useLoaderData();
  const { phoneViewport } = Viewport();

  const classes = phoneViewport
    ? `${cls.productItems} ${cls.productItems__mobile}`
    : `${cls.productItems}`;
  //console.log(product);
  return (
    <AsyncPage className={cls.productItems}>
      <Await resolve={product}>
        {(loadingProduct) => (
          <section className={classes}>
            <h1>{param.categoryID}</h1>
            {loadingProduct.map((item) => (
              <Link to={"/product/" + item.id} key={item.id}>
                <li key={item.id} className={cls.productItem}>
                  <div className={cls.productItem__imgCont}>
                    <img src={item.thumbnail} alt={item.brand} />
                  </div>
                  <p className={cls.productItem__price}>${item.price}</p>
                  <p className={cls.productItem__title}>{item.title}</p>
                </li>
              </Link>
            ))}
          </section>
        )}
      </Await>
    </AsyncPage>
  );
};
export default CategoryList;
/*
async function SingleCategory() {
  //const param = useParams();
  const res = await DummyJson(`products/category/${param.categoryID}`);
  return res.products;
  //const products = [
  //{ title: "some Item1", id: 2, price: 30 },
  //{ title: " some Other Item 2", id: 3, price: 60 },
  //];
  //return products;
}
*/
export async function SingleCategoryLoad({ params }) {
  const res = await DummyJson(`products/category/${params.categoryID}`);
  //return res.products;

  //  console.log(res);
  //console.log(params);
  return defer({ product: res.products });
}
