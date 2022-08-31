import { useUpdateEffect } from "ahooks";
import { useState } from "react";
import { Menu } from "antd";
import type { menuType } from "./menu-config";
import { menuConfig } from "./menu-config";
import type { RouteProps, RouterProps } from "react-router-dom";
const { SubMenu } = Menu;

interface menuProps {
  collapsed: boolean;
}

export default function MenuMain(props: menuProps & RouteProps & RouterProps) {
  const [openKey, setOpenKey] = useState([""]);
  const click = (path?: string) => {
    if (path) {
      props.history.push(path);
    }
  };
  const open = (path: string) => {
    setOpenKey([path]);
  };
  useUpdateEffect(() => {
    if (props.location) {
      const arr = props.location.pathname.substring(1).split("-");
      setOpenKey([arr[0]]);
    }
  }, [props.location]);
  return (
    <Menu mode="inline" theme="dark" defaultOpenKeys={openKey} className="menu">
      {menuConfig.map((menu: menuType) => {
        if (!menu.children) {
          return (
            <Menu.Item
              key={menu.key}
              icon={<menu.icon />}
              onClick={() => click(menu.path)}
            />
          );
        } else {
          return (
            <SubMenu
              key={menu.key}
              icon={<menu.icon />}
              title={<span>{menu.title}</span>}
              onTitleClick={() => open(menu.key)}
            >
              {menu.children
                ? menu.children.map((item: menuType) => (
                    <Menu.Item key={item.key} onClick={() => click(item.path)}>
                      {item.title}
                    </Menu.Item>
                  ))
                : null}
            </SubMenu>
          );
        }
      })}
    </Menu>
  );
}
