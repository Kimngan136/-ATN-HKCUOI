import React, { useEffect, useState } from 'react';
import {
  PieChartOutlined,
  NotificationOutlined,
  DesktopOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Dropdown } from 'antd';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import '../Owner/Owner.css'

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link to="/owner/dashboard" style={{ color: 'black', textDecoration: 'none' }}>
      Tổng quan
    </Link>,
    "1",
    <DesktopOutlined />
  ),
  getItem(
    <Link to="/owner/booking" style={{ color: 'black', textDecoration: 'none' }}>
      Danh sách Booking
    </Link>,
    "2",
    <DesktopOutlined />
  ),
  getItem(
    <NavLink to="/owner/roomtype" style={{ color: 'black', textDecoration: 'none' }}>
      Loại phòng
    </NavLink>,
    "3",
    <NotificationOutlined />
  ),
  getItem(
    <NavLink to="/owner/information" style={{ color: 'black', textDecoration: 'none' }}>
      Thông tin khách sạn
    </NavLink>,
    "4",
    <UserOutlined />
  ),
];

// const LayoutAdmin = ({ Component }) => {
const LayoutOwner = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  // let user = localService.get();

  // useEffect(() => {
  //   // if (!user || user.role === "") {
  //   //   window.location.href = "/user-admin";
  //   // }
  // }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: '#FFFFFF',
          borderRight: '2px solid #379AE6',
        }}
      >
        <div style={{ height: 32, margin: 16, textAlign: 'center', color: 'black' }}>
          {/* <NavLink to="/">Trang Chủ</NavLink> */}
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          style={{ color: 'black' }}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Dropdown overlay={
            <Menu style={{ marginTop: '-20px' }}>
              <Menu.Item key="1">
                <a href="/logout">
                  <LogoutOutlined /> Log out
                </a>
              </Menu.Item>
            </Menu>
          } trigger={['click']}>
            <span style={{ marginRight: '20px' }}>Hello, tinnguyentrung2002@gmail.com</span>
          </Dropdown>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          {/* <Breadcrumb style={{ margin: '10px 0' }} /> */}
          <div style={{ marginTop: 30, padding: 24, minHeight: 360, background: 'white' }}>
            {/* <Component /> */}
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
       
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default LayoutOwner;
