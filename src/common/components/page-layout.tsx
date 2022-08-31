import { FC } from 'react';
import HeaderTittle from './header-title';

interface TittleProps {
  title: string;
  children: any;
}

const PageLayout: FC<TittleProps> = (props: any) => {
  return (
    <>
      <HeaderTittle title={props.title} />
      <div className="content">{props.children}</div>
    </>
  );
};

export default PageLayout;
