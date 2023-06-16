import { createBrowserRouter } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import LoadingPage from "../pages/loading/LoadingPage";
import HomePage from "../pages/home/HomePage";
import CollectionsLayout from "../layouts/CollectionsLayout";

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
        element: <SideBar />,

        index: true,
      },
      {
        path: "BOTTOMS",
        element: <SideBar />,
      },
      {
        path: "Accessories",
        element: <SideBar />,
      },
    ],
    default: true,
  },
  {
    path: "/smart-devices",
    // element:
    children: [
      {
        path: "PHONES",
      },
      {
        path: "LAPTOPS",
      },
    ],
  },
]);
export default routers;
