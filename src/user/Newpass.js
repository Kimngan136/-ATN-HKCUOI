import React from 'react';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Input, Form, Button, message } from 'antd';
import axiosCustomize from '../axios/axiosCustomize';
import { Link } from 'react-router-dom';
// import './Login.css'; // Import file CSS để custom style

const Newpass = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            console.log('Form values:', values);

            const response = await axiosCustomize.post('/Users/login', {
                Email: values.username,
                Password: values.password
            });

            console.log('Response:', response);

            if (response.status == 200) {
                localStorage.setItem('jwt', response.data.token);
                // Redirect to home or dashboard
                window.location.href = '/';
            } else {
                message.error(response.data || 'Sai tên đăng nhập hoặc mật khẩu');
            }
        } catch (error) {
            console.error('Error:', error);
            message.error('Đã xảy ra lỗi khi đăng nhập');
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
            <div className="bg-img">
                <div className="content"  >
                    <h1 className='login-name'>Quên Mật Khẩu</h1>
                    <Form
                        form={form}
                        name="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        {/* Input cho Email hoặc Số điện thoại */}
                      

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

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu!' }]}
                        >
                            <Input.Password
                                size="large"
                                placeholder="Nhập Lại Mật khẩu"
                                prefix={<LockOutlined />}
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                className="custom-input" // Thêm class để custom style
                            />


                        </Form.Item>

                        <div >
                            <Button type="primary" htmlType="submit" style={{ width: '100%', height: '50px' }}>
                                Gửi
                            </Button>
                        </div>
                    </Form>

                </div>
            </div>
        </>
    );
};

export default Newpass;
