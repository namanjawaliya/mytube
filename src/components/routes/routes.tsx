// routes.tsx
import HomePage from "@/components/HomePage";
import Hello from "@/components/Hello";

import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "body",
        element: <Hello />,
      },
    ],
  },
];

export default routes;
