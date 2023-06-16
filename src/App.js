//import { lazy, Suspense } from "react";
//import Home from "./Component/Home/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/pages/Root";
import Product, {
  GetProductsCategories,
} from "./Component/pages/Products/Products";
import ErrorPage from "./Component/pages/ErrorPage";
import Cart from "./Component/pages/Cart/Cart";
import ProductError from "./Component/pages/Products/ProductError";
import ProductItems from "./Component/pages/Products/ProductItems";
import ProductDetail, {
  DetailAction,
} from "./Component/pages/Products/ProductDetail"; //DetailAction,
import CategoryList, {
  SingleCategoryLoad,
} from "./Component/pages/Products/CategoryList";
import InfoPage from "./Component/pages/Info";
import Home from "./Component/pages/Home/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/product",
        id: "product-category",
        element: <Product />,
        loader: GetProductsCategories,
        children: [
          {
            index: true,
            element: <ProductItems />,
            errorElement: <ProductError />,
          },
          {
            path: ":productID",
            element: <ProductDetail />,
            loader: DetailAction,
            id: "single-data",
          },
          {
            path: "category/:categoryID",
            element: <CategoryList />,
            loader: SingleCategoryLoad,
          },
        ],
      },
      { path: "/cart", element: <Cart /> },
      { path: "info", element: <InfoPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
