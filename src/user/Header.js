import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faUser, faCalendarDays, faHeart, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { CgEnter } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
   
    return (
        <div className='Container-header'>

            <div className='headertop'>

                <div className="row">

                    <div className="column">
                        <div className='row phone'>
                            <div className="topleft" style={{ marginRight: 25 }}>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>1800-119-123</span>
                            </div>
                            <div className="topleft">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>134 VÕ THỊ SÁU, PHƯỜNG 8, QUẬN 3, TPHCM</span>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{ textAlign: 'right', justifyContent: 'center', }}>
                            <div className="topright ">
                                <FontAwesomeIcon icon={faUser} />
                                <span style={{ marginRight: 40, marginLeft: 5 }}>
                                    <a href='#' className='log'>
                                        ĐĂNG KÝ
                                    </a>
                                </span>
                                <FontAwesomeIcon icon={faUnlock} />
                                <span style={{ marginLeft: 5 }}>
                                    <a href='#' className='log'>
                                        ĐĂNG NHẬP
                                    </a>
                                </span>

                            </div>
                            <button
                                style={{ marginLeft: 40, backgroundColor: '#5e503f', marginTop: -10, }} // Inline styling
                                className='btn-booking'>


                                <Link to="/book" style={{ color: 'white' }}>
                                    Đặt Ngay ...<FontAwesomeIcon icon={faCalendarDays} />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="headerLogo">
                <div class="content-wrapper">
                    <img class="blinking-image" src="../asset1/images/logo.jpg" />
                </div>
                <div class="grid-container">
                    <div class="grid-item">
                        <button id="homeButton" onClick={()=>{navigate('/')}}>
                            TRANG CHỦ
                        </button>
                    </div>

                    <div class="grid-item"  >
                        <a href='#' > YÊU THÍCH</a>
                    </div>

                    <div class="grid-item"><Link to='/Services'>TIỆN ÍCH</Link></div>
                    <div class="grid-item"><Link to='/Rooms'>PHÒNG</Link></div>
                    <div class="grid-item"><a href='#'>LIÊN HỆ</a></div>
                </div>

            </div>

        </div>
    );
}

export default Header;
