import { useBoolean } from 'ahooks';
import { Layout } from 'antd';
import type { RouterProps } from 'react-router';
import MenuMain from './menu';
const { Sider } = Layout;

export default function Side(props: RouterProps) {
  const [collapsed, { toggle }] = useBoolean(true);
  return (
    <Sider collapsible={true} collapsed={collapsed} onCollapse={toggle}>
      <MenuMain collapsed={collapsed} {...props} />
    </Sider>
  );
}
