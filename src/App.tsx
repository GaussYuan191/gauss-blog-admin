import { BrowserRouter, Switch } from 'react-router-dom';
import { routes, RouteWithSubRoutes } from './router';
// 主应用
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return <RouteWithSubRoutes key={index} {...route} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
