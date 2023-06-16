import { DummyJson } from "../../Util/FetchUrl";
import { Await, defer, useLoaderData } from "react-router-dom";
import cls from "../Products/Products.module.css";
import AsyncPage from "../../Util/AsyncPage";
import Details from "./Data/Details";
const ProductDetail = () => {
  const { data } = useLoaderData();

  console.log(data);
  return (
    <AsyncPage className={cls.productDetail}>
      <Await resolve={data}>{(d) => <Details d={d} />}</Await>
    </AsyncPage>
  );
};
export default ProductDetail;

async function Detail(id) {
  const SingleProduct = await DummyJson("products/" + id);
  return SingleProduct;
  /*
  return {
    id: id,
    title: `item${id}`,
    price: 100 * id,
    discountPercentage: id / 0.5,
    rating: 3.5,
    stock: 5,
  };*/
}

export function DetailAction({ params }) {
  const id = params.productID;
  return defer({ data: Detail(id) });
}
