import React from "react";

const CommonLayout = React.lazy(
  () => import("@/components/common/layout/_layout")
);
const MainPage = React.lazy(() => import("@/pages/main"));
const ProductsIndex = React.lazy(() => import("@/pages/products/index"));
const ProductsId = React.lazy(() => import("@/pages/products/[id]"));

export const routes = [
  {
    path: "/",
    element: <CommonLayout />,
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
