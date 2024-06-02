import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faUser, faCalendarDays, faHeart, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { CgEnter } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='Container-header'>
            <div className=" grid-container">
                <div className="  grid-container">
                    <div className='logo' >

                    </div>
                    <div className='' >

                    </div>
                </div>
                
               
                <div className='topH'>
                    <Link to='#'><i class="fa-solid fa-magnifying-glass"></i> Kiểm tra đơn hàng</Link>

                </div>
                <div className='topđk '>
                    <Link to='#'>Đăng chổ nghỉ của bạn?</Link>
                </div>
                <div className='topH1'>
                    <Link to='/Login'><i class="fa-solid fa-user"></i> Đăng Nhập</Link>

                </div>
                <div className='topH1'>
                    <Link to='/Register'><i class="fa-solid fa-user-plus"></i> Đăng Ký</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
