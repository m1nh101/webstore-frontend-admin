import { createBrowserRouter, LoaderFunction, RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import OrderDetailPage from "../pages/orders/OrderDetailPage";
import OrderListPage from "../pages/orders/OrderListPage";
import ProductDetailPage from "../pages/products/ProductDetailPage";
import ProductListPage from "../pages/products/ProductListPage";
import SalePage from "../pages/SalePage";
import VariantPage from "../pages/VariantPage";
import ProtectedRoute from "./ProtectedRoute";

const getRoute = (
  path: string,
  element: React.ReactNode,
  children?: Array<RouteObject>,
  loader?: LoaderFunction,
): RouteObject => {
  return {
    path,
    element,
    children,
    loader
  } as RouteObject;
}

const protecteRoutes: Array<RouteObject> = [
  getRoute('dashboard', <Dashboard />),
  getRoute('sales', <SalePage />),
  getRoute('variants', <VariantPage />),
  getRoute('products', <ProductListPage />),
  getRoute('products/:id', <ProductDetailPage />),
  getRoute('orders', <OrderListPage />),
  getRoute('orders/:id', <OrderDetailPage />)
]

const mainRoutes: Array<RouteObject> = [
  getRoute('/', <ProtectedRoute />, protecteRoutes),
  getRoute('/login', <Login />)
]

const router = createBrowserRouter(mainRoutes);

export default router;  