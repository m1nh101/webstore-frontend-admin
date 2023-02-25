import { Route } from "antd/es/breadcrumb/Breadcrumb";
import { createBrowserRouter, LoaderFunction, RouteObject } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const getRoute = (
  path: string,
  element: React.ReactNode,
  children?: Array<Route>,
  loader?: LoaderFunction,
): RouteObject => {
  return {
    path,
    element,
    children,
    loader
  } as RouteObject;
}

const mainRoutes: Array<RouteObject> = [
  getRoute('/', <ProtectedRoute children={<App />} />),
  getRoute('/login', <Login />)
]

const router = createBrowserRouter(mainRoutes);

export default router;  