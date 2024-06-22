import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const Login = () => {

    return (
        <div class="bg-img">
            <div class="content">
                <h1 className='login-name'>ĐĂNG NHẬP</h1>
                <form action="#">
                    <Input size="large" placeholder="Email hoặc Số điện thoại" prefix={<UserOutlined />} />
                    <br />
                    <br />
                    <Input placeholder="Mật Khẩu" prefix={<LockOutlined />} />
                    <br />
                    <br />
                    <div class="pass" >
                        <a style={{ color: 'black' }} href="#">Quên mật khẩu?</a>
                    </div>
                    <div class='pass'>
                        <label style={{ color: 'black' }}><input type="checkbox" id="rememberMe" />  Nhớ mật khẩu</label>

                    </div>
                    <div class="field">
                        <input type="submit" value="LOGIN" />
                    </div>
                </form>
                <div style={{ color: 'black', margin: 10, }}>
                    hoặc
                </div>
                <div class="links">

                    <div class="instagram">
                        <i class="fa-brands fa-google"></i>
                    </div>
                </div>
                <div class="signup">
                    Bạn chưa có tài khoản? <a href="#">Đăng ký ngay</a>
                </div>
            </div>
        </div>

    );
};
export default Login;