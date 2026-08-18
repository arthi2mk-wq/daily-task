import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import ProductDetails from "../pages/ProductDetails";
export const productDetailsRoute = createRoute({ getParentRoute:()=>rootRoute, path:"/products/$productId", component:ProductDetails });
