import Hello from "@/pages/Hello";
import ChannelDetailsPage from "@/pages/ChannelDetailsPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

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
        path: "/channel/:channelId",
        element: <ChannelDetailsPage />,
      },
      {
        path: "test",
        element: <Hello />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />, // Replace with the actual component for 404
  },
];

export default routes;
