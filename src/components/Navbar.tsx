import { Layout, Menu, MenuProps } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {

  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector(state => state.auth);
  const { logout } = useActions();

  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    onClick?: () => unknown,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      onClick
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Логин', '1', () => navigate(RouteNames.LOGIN), <UserOutlined />),
  ];
  const items2: MenuItem[] = [
    getItem(user.username, '1'),
    getItem('Выйти', '2', () => logout()),
  ];
  
  return (
    <Layout.Header >
      {isAuth
        ?
        <Menu 
          theme="dark" 
          mode="horizontal" 
          selectable={false} 
          items={items2} 
          style={{justifyContent: "end"}}
        />
        :
        <Menu 
          theme="dark" 
          mode="horizontal" 
          selectable={false} 
          items={items} 
          style={{justifyContent: "end"}}
        />
      }
    </Layout.Header>
  );
}

export default Navbar;
