import { Route } from "react-router-dom";
import loadable from "@loadable/component";

const Layout = loadable(() => import("../common/layout"));
const Login = loadable(() => import("../pages/login"));
const Home = loadable(() => import("../pages/home"));
const ArticleList = loadable(() => import("../pages/article-list"));
const AddArticle = loadable(() => import("../pages/article-add"));
/** 导出路由配置 */
export const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/article",
        component: ArticleList,
      },
      {
        path: "/article-add",
        component: AddArticle,
      },
      // {
      //   path: "/article-classify",
      //   component: ArticleClassify,
      // },
      // {
      //   path: "/discuss",
      //   component: ArticleComments,
      // },
      // {
      //   path: "/article-draft",
      //   component: ArticleDraft,
      // },
      // {
      //   path: "/message-add",
      //   component: AddMessage,
      // },
      // {
      //   path: "/message",
      //   component: MessageList,
      // },
      // {
      //   path: "/music-add",
      //   component: MusicAdd,
      // },
      // {
      //   path: "/music",
      //   component: MusicList,
      // },
      // {
      //   path: "/project-add",
      //   component: ProjectAdd,
      // },
      // {
      //   path: "/project",
      //   component: Projects,
      // },
      // {
      //   path: "/tags",
      //   component: Tags,
      // },
      // {
      //   path: "/tags-add",
      //   component: TagAdd,
      // },
      {
        path: "/",
        component: Home,
      },
    ],
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
