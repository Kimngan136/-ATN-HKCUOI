import React from 'react';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Input, Form, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login-lite';
import { axiosJson } from '../axios/axiosCustomize';
// import './Login.css'; // Import file CSS để custom style

const Login = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            console.log('Form values:', values);

            const response = await axiosJson.post('/Users/login', {
                Email: values.username,
                Password: values.password
            });

            console.log('Response:', response);

            if (response.status == 200) {
                localStorage.setItem('jwt', response.data.token);
                // Redirect to home or dashboard
                window.location.href = '/';

            }
            else {
                message.error('Sai tên đăng nhập hoặc mật khẩu');
            }
        } catch (error) {
            console.error('Error:', error);
            message.error('Đã xảy ra lỗi khi đăng nhập');
        }
    };


    const responseGoogle = async (response) => {
        try {
            const result = await axios.post('https://localhost:7186/api/Users/google-login', {
                tokenId: response.credential,
            });
            console.log(result.data.token);
            // Lưu token và xử lý đăng nhập thành công
            localStorage.setItem('jwt', result.data.token);
            window.location.href = '/';

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const responseFacebook = async (response) => {
        try {
            const result = await axios.post('https://localhost:7186/api/Users/facebook-login', {
                tokenId: response.authResponse.accessToken,
            });

            // Lưu token và xử lý đăng nhập thành công
            localStorage.setItem('token', result.data.token);
            // Redirect to home or dashboard
            window.location.href = '/';
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <>
            <div className='Container-header'>
                <div className="grid-container" style={{ marginLeft: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/">
                        <div className='logo' />
                    </Link>
                </div>
            </div>
            <div className="bg-img" style={{ height: '680px' }}>
                <div className="content"  >
                    <h1 className='login-name'>ĐĂNG NHẬP</h1>
                    <Form
                        form={form}
                        name="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        {/* Input cho Email hoặc Số điện thoại */}
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập Email hoặc Số điện thoại!' }]}
                        >
                            <Input
                                size="large"
                                placeholder="Email hoặc Số điện thoại"
                                prefix={<UserOutlined />}
                                className="custom-input" // Thêm class để custom style
                            />
                        </Form.Item>

                        {/* Input cho Mật khẩu */}
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu!' }]}
                        >
                            <Input.Password
                                size="large"
                                placeholder="Mật khẩu"
                                prefix={<LockOutlined />}
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                className="custom-input" // Thêm class để custom style
                            />
                        </Form.Item>

                        <div className="pass">
                            <a style={{ color: 'black' }} href="#">Quên mật khẩu?</a>
                        </div>
                        <div className='pass'>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <label style={{ color: 'black' }}>
                                    <input type="checkbox" id="rememberMe" />  Nhớ mật khẩu
                                </label>
                            </Form.Item>
                        </div>
                        <div >
                            <Button type="primary" htmlType="submit" style={{ width: '100%', height: '50px' }}>


                                ĐĂNG NHẬP
                            </Button>
                        </div>
                    </Form>
                    <div style={{ color: 'black', margin: 10 }}>
                        hoặc
                    </div>
                    <div className="links">
                        <div >
                            <GoogleOAuthProvider clientId="702226400553-a23melhr8d23jmlvn19vmj578922dlkr.apps.googleusercontent.com">
                                <GoogleLogin
                                    onSuccess={responseGoogle}
                                    onError={() => {
                                        console.error('Login Failed');
                                    }}
                                    size='large'
                                    width={330}
                                />
                            </GoogleOAuthProvider>
                        </div>
                        <div>
                            {/* <FacebookLogin
                                appId="840379307822970"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                icon="fa-facebook"
                            /> */}
                        </div>


                    </div>
                    <div className="signup" style={{ color: 'black' }}>
                        Bạn chưa có tài khoản?
                        <a href="/register"> Đăng ký ngay</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
