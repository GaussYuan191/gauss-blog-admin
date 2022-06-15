import { Route } from "react-router-dom";
import loadable from "@loadable/component";

const Login = loadable(() => import("../pages/login"));
const Home = loadable(() => import("../pages/home"));
/** 导出路由配置 */
export const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];
/** 导出路由 */
export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} {...route} />}
    ></Route>
  );
}
