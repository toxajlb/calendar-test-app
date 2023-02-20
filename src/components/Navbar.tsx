import { Layout, Menu, MenuProps, Row } from "antd";
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
    getItem('Выйти', '1', () => logout()),
  ];
  
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth
          ?
          <>
            <div style={{color: 'white'}}>
              {user.username}
            </div>
            <Menu theme="dark" mode="horizontal" selectable={false} items={items2} />
          </>
          :
          <Menu theme="dark" mode="horizontal" selectable={false} items={items} />
        }
      </Row>
    </Layout.Header>
  );
}

export default Navbar;
