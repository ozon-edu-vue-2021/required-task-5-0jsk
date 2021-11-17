export default [
  {
    path: "/",
    name: "Products",
    component: () => import("@/views/Catalog"),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("@/views/Order"),
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () => import("@/views/Favourites"),
  },
];
