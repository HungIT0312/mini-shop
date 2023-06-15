import { createBrowserRouter } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

const routers = createBrowserRouter([
  {
    path: "/home",
    // element: ,
  },
  {
    path: "/collections",
    element: <SideBar />,
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
