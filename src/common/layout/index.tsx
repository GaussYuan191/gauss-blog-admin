import type { RouterProps } from 'react-router';
import './layout.scss';
import Main from './main';
import Side from './side';

export default function Layout(props: RouterProps) {
  return (
    <section className="layout">
      <Side {...props} />
      <Main {...props} />
    </section>
  );
}
