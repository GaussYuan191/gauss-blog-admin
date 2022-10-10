import loadable from '@loadable/component';
import { Route } from 'react-router-dom';
// 页面布局
const Layout = loadable(() => import('../common/layout'));
// 登录页面
const Login = loadable(() => import('../pages/login'));
// 主页面
const Home = loadable(() => import('../pages/home'));
// 文章列表
const ArticleList = loadable(() => import('../pages/article-list'));
// 文章新增
const AddArticle = loadable(() => import('../pages/article-add'));
// 文章分类
const ArticleClassify = loadable(() => import('../pages/article-classify'));
// 草稿箱
const ArticleDraft = loadable(() => import('../pages/article-draft'));
// 评论管理
const ArticleComments = loadable(() => import('../pages/article-comments'));
// 标签列表
const Tags = loadable(() => import('../pages/tags'));
// 标签新增
const TagAdd = loadable(() => import('../pages/tag-add'));
// 新增留言
const AddMessage = loadable(() => import('../pages/message-add'));
// 留言板
const MessageList = loadable(() => import('../pages/messages-list'));
// 项目新增
const ProjectAdd = loadable(() => import('../pages/project-add'));
// 项目列表
const Projects = loadable(() => import('../pages/projects'));
/** 导出路由配置 */
export const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/article',
        component: ArticleList,
      },
      {
        path: '/article-add',
        component: AddArticle,
      },
      {
        path: '/article-classify',
        component: ArticleClassify,
      },
      {
        path: '/discuss',
        component: ArticleComments,
      },
      {
        path: '/article-draft',
        component: ArticleDraft,
      },
      {
        path: '/message-add',
        component: AddMessage,
      },
      {
        path: '/message',
        component: MessageList,
      },
      {
        path: '/project-add',
        component: ProjectAdd,
      },
      {
        path: '/project',
        component: Projects,
      },
      {
        path: '/tags',
        component: Tags,
      },
      {
        path: '/tags-add',
        component: TagAdd,
      },
      {
        path: '/',
        component: Home,
      },
    ],
  },
];
/** 导出路由 */
export function RouteWithSubRoutes(route: any) {
  return (
    <Route path={route.path} render={(props) => <route.component {...props} {...route} />}></Route>
  );
}
