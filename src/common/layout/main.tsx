import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../router';

export default function Layout(props: any) {
  const state = {
    computedMatch: props.computedMatch,
    history: props.history,
    location: props.location,
    match: props.match,
    path: props.path,
    staticContext: props.staticContext,
  };
  return (
    <div className="main">
      {props.children ? (
        <Switch>
          {props.children.map((route: any, index: number) => {
            return <RouteWithSubRoutes key={index} {...state} {...route} />;
          })}
        </Switch>
      ) : null}
    </div>
  );
}
