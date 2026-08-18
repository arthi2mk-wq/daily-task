import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import Register from "../pages/Register";
export const registerRoute = createRoute({ getParentRoute:()=>rootRoute, path:"/register", component:Register });
