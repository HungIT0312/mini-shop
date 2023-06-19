import { createBrowserRouter } from "react-router-dom";
import CollectionsLayout from "../layouts/CollectionsLayout";
import HomePage from "../pages/home/HomePage";
import LoadingPage from "../pages/loading/LoadingPage";
import Cart from "../components/cart/Cart";
import Products from "../pages/products/Products";
import User from "../components/user/User";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <LoadingPage />,
  },
  {
    path: "/collections",
    element: <CollectionsLayout />,
    children: [
      {
        path: "TOPS",
        element: <Cart />,

        index: true,
      },
      {
        path: "BOTTOMS",
        element: <Products />,
      },
      {
        path: "Accessories",
        element: <User />,
      },
    ],
    default: true,
  },
  {
    path: "/smart-devices",
    element: <CollectionsLayout />,
    children: [
      {
        path: "PHONES",
        element: <LoadingPage />,
      },
      {
        path: "LAPTOPS",
        element: <LoadingPage />,
      },
    ],
  },
]);
export default routers;
