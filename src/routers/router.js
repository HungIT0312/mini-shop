import { createBrowserRouter } from "react-router-dom";
import CollectionsLayout from "../layouts/CollectionsLayout";
import HomePage from "../pages/home/HomePage";
import LoadingPage from "../pages/loading/LoadingPage";
import Products from "../pages/products/Products";
import Cart from "../components/cart/Cart";
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
    path: "/checkouts",
    element: <CollectionsLayout />,
    children: [
      {
        path: ":idCart",
        element: <LoadingPage />,
      },
    ],
  },
  {
    path: "/cart",
    element: <CollectionsLayout />,
    children: [
      {
        path: "",
        element: <Cart />,
      },
      {
        path: "information",
        element: <LoadingPage />,
      },
    ],
  },
  {
    path: "/account",
    element: <CollectionsLayout />,

    children: [
      {
        path: "login",
        element: <LoadingPage />,
      },
      {
        path: "register",
        element: <LoadingPage />,
      },
    ],
  },
  {
    path: "/collections",
    element: <CollectionsLayout />,
    children: [
      {
        path: "TOPS",
        element: <Products />,

        index: true,
      },
      {
        path: "BOTTOMS",
        element: <Products />,
      },
      {
        path: "Accessories",
        element: <Products />,
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
