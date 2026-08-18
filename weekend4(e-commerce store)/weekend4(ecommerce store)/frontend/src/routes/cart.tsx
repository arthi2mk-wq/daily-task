import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import Cart from "../pages/Cart";
export const cartRoute = createRoute({ getParentRoute:()=>rootRoute, path:"/cart", component:Cart });
