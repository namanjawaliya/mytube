import Hello from "@/components/Hello";
import ChannelDetailsPage from "@/pages/ChannelDetailsPage";
import HomePage from "@/pages/HomePage";

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
];

export default routes;
