import { DummyJson } from "../../Util/FetchUrl";
import ProductNav from "./ProductNav";
import ProductSideBar from "./SideBar";
import cls from "./Products.module.css";
import { useState } from "react";
import { Outlet, defer } from "react-router-dom";
import Viewport from "../../../hook/viewport";

const Product = () => {
  const { phoneViewport, laptopViewPort } = Viewport();
  const [toggleSideBar, setToggle] = useState(false);

  const sideBarOpen = () => {
    setToggle(true);
  };

  const sideBarClose = () => {
    setToggle(false);
  };

  return (
    <main className={cls.product}>
      {toggleSideBar && phoneViewport && (
        <ProductSideBar toggle={toggleSideBar} onClose={sideBarClose} />
      )}
      {laptopViewPort && <ProductSideBar />}
      <ProductNav onOpen={sideBarOpen} />
      <Outlet />
    </main>
  );
};
export default Product;

async function ProductData() {
  const res = await DummyJson("products");
  if (res.status === 404) return res;
  return res.products;
  /*const products = [
    { title: "jewel", id: 2, price: 30 },
    { title: " electronic", id: 3, price: 60 },
    { title: " frangance", id: 1, price: 90 },
    { title: " toiletries", id: 5, price: 190 },
    { title: " furniture", id: 4, price: 900 },
  ];

  return products;
*/
  ///rEMOVE COMMENTS ONLY
}

async function CategoryData() {
  const res = await DummyJson("products/categories");
  return res;
  //const items = ["BAGS", "SHOES", "JEWEL"];
  //return items;
}

export function GetProductsCategories() {
  console.log(ProductData());
  //console.log(CategoryData());
  return defer({ product: ProductData(), category: CategoryData() });
}
