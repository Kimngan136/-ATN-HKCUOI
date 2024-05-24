import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faBars, faCalendarDays, faStar } from '@fortawesome/free-solid-svg-icons';
import { CgEnter } from 'react-icons/cg';

const Header = () => {
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
                                <FontAwesomeIcon icon={faBars} />
                                <span >Ngôn Ngữ</span>

                            </div>
                            <button
                                style={{ marginLeft: 40, backgroundColor: '#5e503f', marginTop: -10, }} // Inline styling
                                className='btn-booking'>
                                Đặt Ngay ...
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="headerLogo">

                <div class="grid-container">
                    <div class="grid-item">
                        <div class="content-wrapper">
                            <img src="../asset1/images/logo.jpg" />
                            <span class="blinking-text">BAO PHÊ PHA</span>
                        </div>
                    </div>
                    <div class="grid-item"  >
                        <a><FontAwesomeIcon icon={faStar} /></a>
                        <p> YÊU THÍCH</p>
                    </div>
                    <div class="grid-item">ƯU ĐÃI</div>
                    <div class="grid-item">DỊCH VỤ</div>
                    <div class="grid-item">PHÒNG</div>
                    <div class="grid-item">TIỆN ÍCH</div>
                    <div class="grid-item">LIÊN HỆ</div>
                </div>

            </div>

        </div>
    );
}

export default Header;
