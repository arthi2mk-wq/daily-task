import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import Checkout from "../pages/Checkout";
export const checkoutRoute = createRoute({ getParentRoute:()=>rootRoute, path:"/checkout", component:Checkout });
