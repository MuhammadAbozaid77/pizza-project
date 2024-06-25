import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./Routers/AppLayout";
import PageNotFound from "./components/ui/PageNotFound";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <PageNotFound />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:orderId",
          loader: orderLoader,
          element: <Order />,
          errorElement: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
