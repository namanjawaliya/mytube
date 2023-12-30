import { useRoutes } from "react-router-dom";
import routes from "@/routes/routes";

const RouterOutlet = () => {
  const content = useRoutes(routes);
  return content;
};

export default RouterOutlet;
