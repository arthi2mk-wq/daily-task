import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const rootRoute = createRootRoute({
  component: () => <><Navbar/><Outlet/></>
});
