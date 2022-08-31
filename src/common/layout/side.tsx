import type { RouterProps } from "react-router";
import { Layout } from "antd";
import MenuMain from "./menu";
import { useBoolean } from "ahooks";
const { Sider } = Layout;

export default function Side(props: RouterProps) {
  const [collapsed, { toggle }] = useBoolean(true);
  return (
    <Sider collapsible={true} collapsed={collapsed} onCollapse={toggle}>
      <MenuMain collapsed={collapsed} {...props} />
    </Sider>
  );
}
