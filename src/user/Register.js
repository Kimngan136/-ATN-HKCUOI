import React from 'react';
const Register = () => {

    return (
        <div class="bg-img" >
            <div class="content" style={{ height: 690 }}>
                <header>Đăng Ký</header>
                <form action="">
                    
                    <div class="field">
                        <span class="fa fa-user"></span>
                        <input type="text" required placeholder="Tên đăng ký" />
                    </div>
                    <div class="field space">
                        <span class="fa fa-lock"></span>
                        <input type="number" class="pass-key" required placeholder="Số điện thoại" />
                    
                    </div>
                    <div class="field space">
                        <span class="fa fa-lock"></span>
                        <input type="email" class="pass-key" required placeholder="Email" />
                        
                    </div>
                    <div class="field space">
                        <span class="fa fa-lock"></span>
                        <input type="password" class="pass-key" required placeholder="Mật khẩu" />
                        
                    </div>
                    <div class="field space">
                        <span class="fa fa-lock"></span>
                        <input type="password" class="pass-key" required placeholder="Nhập lại mật khẩu" />
                       
                    </div>
                   
                    
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