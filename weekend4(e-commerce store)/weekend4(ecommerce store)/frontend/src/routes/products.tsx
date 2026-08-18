import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import Products from "../pages/Products";
export const productsRoute = createRoute({
  getParentRoute:()=>rootRoute, path:"/products", component:Products,
  validateSearch:(search:Record<string,unknown>)=>({ category:typeof search.category==="string"?search.category:undefined })
});
