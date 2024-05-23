import MainPage from "@/pages/main";
import ProductsIndex from "./pages/products/index";
import ProductsId from "./pages/products/[id]";
import Layout from "./components/common/layout/_layout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <ProductsId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/products" },
  { route: "/products/:id" },
];
