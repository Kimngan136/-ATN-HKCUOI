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
                    <h1 style={{marginTop:50,}}>Iqra Beach Hotel</h1>
                    <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                   </span>
                </div>
                <div class='row List' style={{ color: 'black'}}>
                    <div class='col-sm-2' >Ngày Nhận Phòng
                        <input type="date" class="form-control" id="checkIn"></input>
                    </div>
                    <div class='col-sm-2' >Ngày Trả Phòng
                        <input type="date" class="form-control" id="checkIn"></input>
                    </div>
                    <div class="col-sm-2">Số Khách
                        <input type="number" class="form-control" id="quantity" placeholder="Số lượng" min="1" max="6" oninput="validateInput(this)" />
                    </div>

                    <div class='col-sm-2' >Loại Phòng
                        <select class="form-control col-sm-12" id="classify" style={{ width: 200 }}>
                            <option>Phòng Đơn</option>
                            <option>Phòng Đôi</option>
                            <option>Phòng Lớn (2-6 người)</option>
                        </select>
                    </div>
                    <div class='col-sm-2 TfLIST' >
                        <button className='btn btn-check'  >
                            Kiểm tra thông tin  ...
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='Onlet-list'>
                

                <div className='welcome'>
                    <div className='row'>
                        <div className='col-sm-6 LearnMore'>
                            <h3>
                                WELCOME TO <a style={{ fontWeight: 'bold' }}>Iqra Beach Hotel</a>
                            </h3>
                            <p>---------------------------------</p>
                            <h4>
                                lUXURY Resort & Room
                                <br />
                                <br />
                            </h4>
                            <h6 style={{ color: 'black' }}>
                                Trang web Booking Iqra Beach là một nền tảng trực tuyến tiên tiến, chuyên cung cấp dịch vụ đặt phòng và thuê nhà cho khách du lịch trên toàn thế giới. Với giao diện thân thiện và dễ sử dụng, người dùng có thể dễ dàng tìm kiếm và lựa chọn các loại hình lưu trú từ căn hộ, biệt thự đến nhà nghỉ và homestay. Booking Iqra Beach nổi bật với hệ thống đánh giá minh bạch, giúp người dùng có được cái nhìn khách quan và chính xác về chất lượng dịch vụ. Ngoài ra, trang web còn cung cấp nhiều ưu đãi hấp dẫn và dịch vụ hỗ trợ khách hàng 24/7, đảm bảo mang đến cho người dùng những trải nghiệm du lịch tuyệt vời và đáng nhớ.
                                <p style={{ color: 'black' }} >Chúng tôi rất vui khi được mang đến trải nghiệm tốt nhất cho bạn!</p>
                            </h6>
                            <button className='btn btnLearnMore'>
                                Xem Thêm
                            </button>
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
                <div className='TOP3' style={{ marginTop: 10, color: 'black', fontWeight: 'bold', marginBottom:20, }}>
                    <h5>CÁC HẠNG PHÒNG TÙY CHỌN

                    </h5>
                </div>
                <div>
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

                        {/* /********************************************************** */ }
                        <div className='column rowbed'>
                            <div className=' column1 '>
                                <div className='rooms' >
                                    <p style={{ color:'white', marginLeft:40,}}>LUXURY ROOM</p>
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
                <div className='TOP3' style={{ marginTop: 10, color: 'black', fontWeight: 'bold' }}>
                    <h5>TOP KHÁCH SẠN YÊU THÍCH
                    </h5>
                </div>
                <div className='row room'>

                    <div className='col'>
                        <div class="card" >
                            <img src='../asset1/images/1.jpg' style={{ width: 600, height: 400, }} />
                            <div class="card-body">
                                <h5 class="card-title">KHÁCH SẠN ĐỀ XUẤT 1</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" >
                            <img src='../asset1/images/2.jpg' style={{ width: 600, height: 400, }} />
                            <div class="card-body">
                                <h5 class="card-title">KHÁCH SẠN ĐỀ XUẤT 2</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" >
                            <img src='../asset1/images/3.jpg' style={{ width: 600, height: 400, }} />
                            <div class="card-body">
                                <h5 class="card-title">KHÁCH SẠN ĐỀ XUẤT 3</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <HotelFilter />
                </div>
            </div>

        </div >


    );
}

export default Header;
