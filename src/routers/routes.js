import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductActionPage from "../pages/ProductActionPage/ProductActionPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage></HomePage>,
  },
  {
    path: "/productlist",
    exact: false,
    main: () => <ProductsPage></ProductsPage>,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => (
      <ProductActionPage history={history}></ProductActionPage>
    ),
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match, history }) => (
      <ProductActionPage match={match} history={history}></ProductActionPage>
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage></NotFoundPage>,
  },
];

export default routes;
