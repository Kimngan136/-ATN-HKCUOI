import React from 'react';
const Login = () => {

    return (
        <div class="bg-img">
            <div class="content">
                <header>Đăng Nhập</header>
                <form action="#">
                    <div class="field">
                        <span class="fa fa-user"></span>
                        <input type="text" required placeholder="Email hoặc Số điện thoại" />
                    </div>
                    <div class="field space">
                        <span class="fa fa-lock"></span>
                        <input type="password" class="pass-key" required placeholder="Mật Khẩu" />
                        <span class="show">SHOW</span>
                    </div>
                    <div class="pass">
                        <a href="#">Quên mật khẩu?</a>
                    </div>
                    <div class='pass'>
                        <label style={{ color: 'white' }}><input type="checkbox" id="rememberMe" />  Nhớ mật khẩu</label>

                    </div>
                    <div class="field">
                        <input type="submit" value="LOGIN" />
                    </div>
                </form>
                <div class="login">
                   hoặc</div>
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