import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, UserAddOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <div class="bg-img" >
            <div class="content" style={{ height: 690 }}>
                <h1 className='login-name'>ĐĂNG KÝ</h1>

                <form action="">
                    <Input size="large" placeholder="Tên đăng ký" prefix={<UserAddOutlined />} />
                    <br />
                    <br />
                    <Input placeholder="Số điện thoại" prefix={<PhoneOutlined />} />
                    <br />
                    <br />
                    <Input placeholder="Email" prefix={<MailOutlined />} />
                    <br />
                    <br />

                    <Space direction="vertical">
                        <Input.Password
                            prefix={<LockOutlined />}
                            className=' '
                            placeholder="Nhập mật khẩu"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Space direction="horizontal">
                            <Input.Password
                                prefix={<LockOutlined />}
                                className='inputRpass'
                                placeholder="Nhập lạimật khẩu"
                                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            />

                        </Space>
                    </Space>


                    <div class='pass'>
                        <label style={{ color: 'black' }}><input type="checkbox" id="rememberMe" />  Nhớ mật khẩu</label>

                    </div>
                    <div class="field">
                        <input type="submit" value="Đăng Ký" />
                    </div>
                </form>
                <div class="login" style={{ color: 'gray' }}>-------------------------------------</div>
                <div class="links">

                    <div class="instagram">
                        <i class="fa-brands fa-google"></i>
                    </div>
                </div>
                <div class="signup">
                    Đã có tài khoản? <a href="#"> Đăng nhập </a>
                </div>
            </div>
        </div>

    );
};
export default Register;