import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <div class="bg-img" >
            <div class="content" style={{ height: 690 }}>
                <header>Đăng Ký</header>
                
                <form action="">
                    <Input className='inputR' placeholder="Tên đăng ký" />
                    <Input className='inputR' placeholder="Số điện thoại" />
                    <Input className='inputR'  placeholder="Email" />

                    <Space direction="vertical">
                        <Input.Password
                            className=' '
                            placeholder="Nhập mật khẩu"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Space direction="horizontal">
                            <Input.Password
                                className='inputRpass'
                                placeholder="Nhập lạimật khẩu"
                                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            />
                            
                        </Space>
                    </Space>
                   
                    
                    <div class='pass'>
                        <label style={{color:'white'}}><input type="checkbox" id="rememberMe" />  Nhớ mật khẩu</label>
                        
                    </div>
                    <div class="field">
                        <input type="submit" value="Đăng Ký" />
                    </div>
                </form>
                <div class="login" style={{color:'gray'}}>-------------------------------------</div>
                <div class="links">

                    <div class="instagram">
                        <i class="fa-brands fa-google"></i>
                    </div>
                </div>
                <div class="signup">
                    Đã có tài khoản? <a href="#">Đăng nhập ngay</a>
                </div>
            </div>
        </div>

    );
};
export default Register;