import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faPerson, faHouse } from '@fortawesome/free-solid-svg-icons';
import HotelFilter from './HotelFilter';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';


const Header = () => {
    const validateInput = (input) => {
        if (input.value < 1) {
            input.value = 1;
        } else if (input.value > 6) {
            input.value = 6;
        }
    };
    return (
        <div className='Container-Onlet'>
            <div className='Onlet-body' >
                <div className='onlet-text'>
                    <span className='spanstart'>
                        <h1 style={{ marginTop: 50, marginBottom: 10, }}>DU LỊCH, TRẢI NGHIỆM VÀ THƯ GIẢN CÙNG CASA</h1>

                        <i>------------------------</i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i>------------------------</i>
                        <p style={{ color: 'white', marginTop: 20 }}>Tiện ích tức thời- không mất phí</p>
                    </span>
                </div>
                <div class='row List' style={{ color: 'black' }}>
                    <div className='containerSearch'>
                        <div >
                            <label> Địa Điểm</label>
                            <input type="text" required placeholder="Bạn muốn đến đâu?" ></input>

                        </div>
                        <div>Ngày đến
                            <input type="date" class="form-control" id="checkIn"></input>
                        </div>
                        <div>Ngày đi
                            <input type="date" class="form-control" id="checkIn"></input>
                        </div>
                        <div >Số khách
                            <input type="number" class="form-control" id="quantity" placeholder="Số lượng" min="1" max="6" oninput="validateInput(this)" />
                        </div>
                        <div className="icon-container">
                            <Link to='/HotelFilter'><i style={{ color: 'white' }} className="fa-solid fa-magnifying-glass"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className='Onlet-list'>


                <div className='welcome'>
                    <div className='row'>
                        <div className='col-sm-6 LearnMore' style={{ marginTop: 30 }}>
                            <h3>
                                WELCOME TO <a style={{ fontWeight: 'bold' }}>CASA Booking</a>
                            </h3>
                            <p>---------------------------------</p>
                            <h4>
                                lUXURY Resort & Room
                                <br />
                                <br />
                            </h4>
                            <h6 style={{ color: 'black', lineHeight: 2, }}>
                                Trang web Booking CASA là một nền tảng trực tuyến tiên tiến, chuyên cung cấp dịch vụ đặt phòng và thuê nhà cho khách du lịch trên toàn thế giới. Với giao diện thân thiện và dễ sử dụng, người dùng có thể dễ dàng tìm kiếm và lựa chọn các loại hình lưu trú từ căn hộ, biệt thự đến nhà nghỉ và homestay. CASA Booking nổi bật với hệ thống đánh giá minh bạch, giúp người dùng có được cái nhìn khách quan và chính xác về chất lượng dịch vụ. Ngoài ra, trang web còn cung cấp nhiều ưu đãi hấp dẫn và dịch vụ hỗ trợ khách hàng 24/7, đảm bảo mang đến cho người dùng những trải nghiệm du lịch tuyệt vời và đáng nhớ.
                                <p style={{ color: 'black', lineHeight: 4, }} >Chúng tôi rất vui khi được mang đến trải nghiệm tốt nhất cho bạn!</p>
                            </h6>

                        </div>
                        <div className='col-sm-6 ' style={{ display: 'flex' }}>

                            <div className='col-sm-3'>
                                <img class="moving-image" src='../asset1/images/1.jpg' style={{ width: 150, height: 300, marginTop: 30, }} />

                            </div>
                            <div className='col-sm-3'>
                                <img class="moving-imageDif" src='../asset1/images/2.jpg' style={{ width: 150, height: 360 }} />
                            </div>
                            <div className='col-sm-3'>
                                <img class="moving-image" src='../asset1/images/3.jpg' style={{ width: 150, height: 300, marginTop: 30, }} />
                            </div>

                        </div>

                    </div>
                </div>
                <div className='TOP3' style={{ marginTop: 40, color: 'black', fontWeight: 'bold' }}>
                    <h5>
                        <Link to='#'>ĐANG THỊNH HÀNH <i style={{ color: 'red', marginBottom: 30, }} class="fa-solid fa-fire"></i>
                        </Link>
                    </h5>
                    <div class="containerTrend">
                        <div class="card" >
                            <img class="card-img-top" src='../asset1/images/ks1.jpg' alt="Card image" />
                            <div class="card-body" style={{ lineHeight: 2, }}>
                                <h5 class="card-title" style={{ fontWeight: 'bold' }}>Khách sạn Mường Thanh Hội An</h5>
                                <i class="fa-solid fa-map-pin"> <span>Hội An</span></i>
                                <div >
                                    <i class="fas fa-star bg-yellow-500 "></i>
                                    <i class="fas fa-star bg-yellow-500"></i>
                                    <i class="fas fa-star  bg-yellow-500 "></i>
                                    <i class="fas fa-star  bg-yellow-500 "></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div className='sale'>
                                    <div className='rateCard'>
                                        <a href='#'>
                                            5.5
                                        </a>
                                    </div>
                                    <div >
                                        <span class="price-strikethrough">1.990.000 đ</span>
                                        <h3 >990.000 đ</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" >
                            <img class="card-img-top" src='../asset1/images/ks2.jpg' alt="Card image" />
                            <div class="card-body" style={{ lineHeight: 2, }}>
                                <h5 class="card-title" style={{ fontWeight: 'bold' }}>Khách sạn Pha Lê</h5>
                                <i class="fa-solid fa-map-pin"> <span>Vũng Tàu</span></i>
                                <div >
                                    <i class="fas fa-star bg-yellow-500 "></i>
                                    <i class="fas fa-star bg-yellow-500"></i>
                                    <i class="fas fa-star  bg-yellow-500 "></i>
                                    <i class="fas fa-star   "></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div className='sale'>
                                    <div className='rateCard'>
                                        <a href='#'>
                                            5.0
                                        </a>
                                    </div>
                                    <div >
                                        <span class="price-strikethrough">590.000 đ</span>
                                        <h3 >490.000 đ</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" >
                            <img class="card-img-top" src='../asset1/images/ks3.jpg' alt="Card image" />
                            <div class="card-body" style={{ lineHeight: 2, }}>
                                <h5 class="card-title" style={{ fontWeight: 'bold' }}>Khách sạn The Song</h5>
                                <i class="fa-solid fa-map-pin"> <span>Vũng Tàu</span></i>
                                <div >
                                    <i class="fas fa-star bg-yellow-500 "></i>
                                    <i class="fas fa-star bg-yellow-500"></i>
                                    <i class="fas fa-star  bg-yellow-500 "></i>
                                    <i class="fas fa-star  bg-yellow-500 "></i>
                                    <i class="fas fa-star bg-yellow-500"></i>
                                </div>
                                <div className='sale'>
                                    <div className='rateCard'>
                                        <a href='#'>
                                            .6
                                        </a>
                                    </div>
                                    <div >
                                        <span class="price-strikethrough">520.000 đ</span>
                                        <h3 >390.000 đ</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" >
                            <img class="card-img-top" src='../asset1/images/ks4.jpg' alt="Card image" />
                            <div class="card-body" style={{ lineHeight: 2, }}>
                                <h5 class="card-title" style={{ fontWeight: 'bold' }}>The IMPERIAL Hotel</h5>
                                <i class="fa-solid fa-map-pin"> <span>Hội An</span></i>
                                <div >
                                    <i class="fas fa-star bg-yellow-500 "></i>
                                    <i class="fas fa-star bg-yellow-500"></i>
                                    <i class="fas fa-star  bg-yellow-500 "></i>
                                    <i class="fas fa-star  bg-yellow-500 "></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div className='sale'>
                                    <div className='rateCard'>
                                        <a href='#'>
                                            7.5
                                        </a>
                                    </div>
                                    <div >
                                        <span class="price-strikethrough">990.000 đ</span>
                                        <h3 >790.000 đ</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='TOP3' style={{ marginTop: 60, color: 'black', fontWeight: 'bold', marginBottom: 20, }}>
                    <h5 style={{ marginBottom: 30, }}>CÁC HẠNG PHÒNG TÙY CHỌN</h5>
                    <div className='containerBed'>
                        <div className='column0 '>
                            <img src='../asset1/images/phongdoi.jpg' style={{ width: '100%', height: 300, }} />
                            <h3 style={{ color: '' }}>
                                DOUPLE ROOM
                            </h3>
                            <div >
                                <h5 style={{ marginLeft: 50, marginTop: 10, }}>

                                    <span style={{ marginRight: 10, }}>
                                        <FontAwesomeIcon icon={faPerson} />
                                        2 khách
                                    </span>

                                    <span style={{}}>
                                        <FontAwesomeIcon icon={faHouse} />
                                        20m2
                                    </span>
                                    <p style={{ marginTop: 20, color: 'black' }}>
                                        Mang đến trải nghiệm tốt nhất cho bạn, nơi thư giản cho các cặp đôi muốn tìm không gian riêng tư nhưng vẫn mới lạ và thoải mái.
                                    </p>

                                </h5>
                                <button
                                    style={{ marginLeft: 40, backgroundColor: '#5e503f', marginTop: 10, }} // Inline styling
                                    className='btn-booking'>


                                    <Link to="/book" style={{ color: 'white', marginTop: 50, }}>
                                        Đặt Ngay ...
                                    </Link>
                                </button>

                            </div>
                        </div>

                        {/* /********************************************************** */}
                        <div className='column rowbed'>
                            <div className=' column1 '>
                                <div className='rooms' >
                                    <p style={{ color: 'white', marginLeft: 40, }}>LUXURY ROOM</p>
                                    <button
                                        style={{ marginLeft: 40, backgroundColor: '#5e503f', marginTop: 10, marginBottom: 20 }} // Inline styling
                                        className='btn-booking'>


                                        <Link to="/book" style={{ color: 'white', marginTop: 50, }}>
                                            Đặt Ngay ...
                                        </Link>
                                    </button>

                                </div>
                            </div>
                            <div className='column2'>
                                <div className='rooms'>
                                    <p style={{ color: 'white', marginLeft: 40, }}>FAMILY ROOM</p>
                                    <button
                                        style={{ marginLeft: 40, backgroundColor: '#5e503f', marginTop: 10, marginBottom: 20 }} // Inline styling
                                        className='btn-booking'>


                                        <Link to="/book" style={{ color: 'white', marginTop: 50, }}>
                                            Đặt Ngay ...
                                        </Link>
                                    </button>

                                </div>                          </div>
                            <div className='column3'>

                                <div className='rooms' >
                                    <p style={{ color: 'white', marginLeft: 40, }} >SMALL ROOM</p>
                                    <button
                                        style={{ marginLeft: 40, backgroundColor: '#5e503f', marginTop: 10, marginBottom: 20 }} // Inline styling
                                        className='btn-booking'>


                                        <Link to="/book" style={{ color: 'white', marginTop: 50, }}>
                                            Đặt Ngay ...
                                        </Link>
                                    </button>

                                </div>                        </div>
                            <div className='column4'>
                                <div className='rooms' >
                                    <p style={{ color: 'white', marginLeft: 40, }}>APARMENT ROOM</p>                                    <button
                                        style={{ marginLeft: 40, backgroundColor: '#5e503f', marginTop: 10, marginBottom: 20 }} // Inline styling
                                        className='btn-booking'>


                                        <Link to="/book" style={{ color: 'white', marginTop: 50, }}>
                                            Đặt Ngay ...
                                        </Link>
                                    </button>

                                </div>                       </div>
                        </div>

                    </div>

                </div>
                <div className='TOP3' style={{ marginTop: 10, color: 'black', fontWeight: 'bold', marginBottom: 40, }}>
                    <h5><Link to='/Login'>ĐÃ QUAN TÂM GẦN ĐÂY</Link>
                    </h5>
                </div>
                <div className='room'>
                    <div class="card" >
                        <img class="card-img-top" src='../asset1/images/ks1.jpg' alt="Card image" />
                        <div class="card-body" style={{ lineHeight: 2, }}>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>Khách sạn Mường Thanh Hội An</h5>
                            <i class="fa-solid fa-map-pin"> <span>Hội An</span></i>
                            <div >
                                <i class="fas fa-star bg-yellow-500 "></i>
                                <i class="fas fa-star bg-yellow-500"></i>
                                <i class="fas fa-star  bg-yellow-500 "></i>
                                <i class="fas fa-star  bg-yellow-500 "></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div className='sale'>
                                <div className='rateCard'>
                                    <a href='#'>
                                        5.5
                                    </a>
                                </div>
                                <div >
                                    <span class="price-strikethrough">1.990.000 đ</span>
                                    <h3 >990.000 đ</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" >
                        <img class="card-img-top" src='../asset1/images/ks2.jpg' alt="Card image" />
                        <div class="card-body" style={{ lineHeight: 2, }}>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>Khách sạn Pha Lê</h5>
                            <i class="fa-solid fa-map-pin"> <span>Vũng Tàu</span></i>
                            <div >
                                <i class="fas fa-star bg-yellow-500 "></i>
                                <i class="fas fa-star bg-yellow-500"></i>
                                <i class="fas fa-star  bg-yellow-500 "></i>
                                <i class="fas fa-star   "></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div className='sale'>
                                <div className='rateCard'>
                                    <a href='#'>
                                        5.0
                                    </a>
                                </div>
                                <div >
                                    <span class="price-strikethrough">590.000 đ</span>
                                    <h3 >490.000 đ</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" >
                        <img class="card-img-top" src='../asset1/images/ks3.jpg' alt="Card image" />
                        <div class="card-body" style={{ lineHeight: 2, }}>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>Khách sạn The Song</h5>
                            <i class="fa-solid fa-map-pin"> <span>Vũng Tàu</span></i>
                            <div >
                                <i class="fas fa-star bg-yellow-500 "></i>
                                <i class="fas fa-star bg-yellow-500"></i>
                                <i class="fas fa-star  bg-yellow-500 "></i>
                                <i class="fas fa-star  bg-yellow-500 "></i>
                                <i class="fas fa-star bg-yellow-500"></i>
                            </div>
                            <div className='sale'>
                                <div className='rateCard'>
                                    <a href='#'>
                                        .6
                                    </a>
                                </div>
                                <div >
                                    <span class="price-strikethrough">520.000 đ</span>
                                    <h3 >390.000 đ</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" >
                        <img class="card-img-top" src='../asset1/images/ks4.jpg' alt="Card image" />
                        <div class="card-body" style={{ lineHeight: 2, }}>
                            <h5 class="card-title" style={{ fontWeight: 'bold' }}>The IMPERIAL Hotel</h5>
                            <i class="fa-solid fa-map-pin"> <span>Hội An</span></i>
                            <div >
                                <i class="fas fa-star bg-yellow-500 "></i>
                                <i class="fas fa-star bg-yellow-500"></i>
                                <i class="fas fa-star  bg-yellow-500 "></i>
                                <i class="fas fa-star  bg-yellow-500 "></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div className='sale'>
                                <div className='rateCard'>
                                    <a href='#'>
                                        7.5
                                    </a>
                                </div>
                                <div >
                                    <span class="price-strikethrough">990.000 đ</span>
                                    <h3 >790.000 đ</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >


    );
}

export default Header;
