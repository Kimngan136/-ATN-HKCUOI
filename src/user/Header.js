import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const token = localStorage.getItem('jwt');
    const decodedToken = token ? jwtDecode(token) : null;

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        window.location.href = '/login';
    };

    const getMenuForRoles = (roles) => {
        const menuItems = [];

        if (roles.includes('User')) {
            menuItems.push(
                <Menu.Item key="profile">
                    <Link to="/profile">Thông tin tài khoản</Link>
                </Menu.Item>,
                <Menu.Item key="favorites">
                    <Link to="/favorites">Danh sách yêu thích</Link>
                </Menu.Item>,
                <Menu.Item key="history">
                    <Link to="/history">Lịch sử</Link>
                </Menu.Item>
            );
        }

        if (roles.includes('Hotel')) {
            menuItems.push(
                <Menu.Item key="my-hotel">
                    <Link to="/owner/dashboard">Khách sạn của bạn</Link>
                </Menu.Item>
            );
        }

        if (roles.includes('Admin')) {
            menuItems.push(
                <Menu.Item key="statistics">
                    <Link to="/admin">Thống kê</Link>
                </Menu.Item>
            );
        }

        menuItems.push(
            <Menu.Item key="logout" onClick={handleLogout}>
                Đăng xuất
            </Menu.Item>
        );

        return <Menu>{menuItems}</Menu>;
    };

    let greeting = null;
    if (decodedToken) {
        const email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        const id = decodedToken['sub'];

        greeting = (
            <Dropdown overlay={getMenuForRoles(roles)}>
                <Button>
                    Xin chào, {email} <DownOutlined />
                </Button>
            </Dropdown>
        );
    }

    return (
        <div className='Container-header'>
            <div className="grid-container" style={{ display: 'flex' }}>
                <div className="  grid-container">
                    <Link to="/">   <div className='logo' /></Link>
                </div>

                <div style={{ display: 'flex', gap: 15 }} >
                    <div className='topH1'>
                        <Link to='#'><FontAwesomeIcon icon={faUser} /> Kiểm tra đơn hàng</Link>
                    </div>
                    <div className='topH1'>
                        <Link to='#'><FontAwesomeIcon icon={faCalendarDays} /> Đăng chổ nghỉ của bạn ?</Link>
                    </div>

                    {!decodedToken ? (
                        <>
                            <div className='topH1'>
                                <Link to='/login'><FontAwesomeIcon icon={faUser} /> Đăng Nhập</Link>
                            </div>
                            <div className='topH1'>
                                <Link to='/register'><FontAwesomeIcon icon={faUserPlus} /> Đăng Ký</Link>
                            </div>
                        </>
                    ) : greeting}
                </div>
            </div>
        </div>
    );
};

export default Header;
