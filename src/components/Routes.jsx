import { useRoutes } from "react-router-dom";
import AllProducts from "./AllProducts"
import AllUserCarts from "./AllUserCarts";
import SingleProduct from "./SingleProduct"


export default function Routes() {


  let element = useRoutes([
    {
      path: "/",
      element: <AllProducts />,
    },
    { path: "products", 
      element: <AllProducts  /> 
    },
    { path: "users", 
      element: <AllUserCarts  />
    },
    {
      path:"product/:productId",
      element: <SingleProduct  />
    },
    { path: "*", 
      element: <AllProducts /> 
    }
  ]);
  return element;
}
