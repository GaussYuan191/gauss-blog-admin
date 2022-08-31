import { BrowserRouter, Switch } from 'react-router-dom';
import { routes, RouteWithSubRoutes } from './router';
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
