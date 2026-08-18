import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { indexRoute } from "./index";
import { loginRoute } from "./login";
import { registerRoute } from "./register";
import { productsRoute } from "./products";
import { productDetailsRoute } from "./products.$productId";
import { cartRoute } from "./cart";
import { checkoutRoute } from "./checkout";
import { ordersRoute } from "./orders";
import { adminRoute } from "./admin";

const routeTree = rootRoute.addChildren([
  indexRoute, loginRoute, registerRoute, productsRoute, productDetailsRoute,
  cartRoute, checkoutRoute, ordersRoute, adminRoute
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register { router: typeof router; }
}
