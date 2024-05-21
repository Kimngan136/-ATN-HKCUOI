import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='Container-Onlet'>
            <div className='Onlet-body' >
                <p>
                    khu vực chưa có dữ liệu
                </p>
            </div>
            <div className='Onlet-list'>
                <div class='row List' style={{ color: 'black', }}>
                    <div class='col-sm-2' >Ngày Nhận Phòng
                        <input type="date" class="form-control" id="checkIn"></input>
                    </div>
                    <div class='col-sm-2' >Ngày Trả Phòng
                        <input type="date" class="form-control" id="checkIn"></input>
                    </div>
                    <div class='col-sm-2'>Số Khách
                        <input type="number" class="form-control" id="quantity" placeholder="Số lượng"></input>
                    </div>
                    <div class='col-sm-2' >Loại Phòng
                        <select class="form-control col-sm-12" id="classify" style={{ width: 200 }}>
                            <option>Phòng Đơn</option>
                            <option>Phòng Đôi</option>
                            <option>Phòng Lớn (2-4 người)</option>
                        </select>
                    </div>
                    <div class='col-sm-2 TfLIST' >
                        <button className='btn btn-check'  >
                            Kiểm tra thông tin  ...
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </button>
                    </div>
                </div>

                <div className='welcome'>
                    <div className='row'>
                        <div className='col-sm-6 LearnMore'>
                            <h3>
                                WELCOME TO <a style={{ fontWeight: 'bold' }}>BAO PHÊ PHA HOTEL</a>
                            </h3>
                            <p>---------------------------------</p>
                            <h4>
                                lUXURY Resort & Room
                                <br />
                                <br />
                            </h4>
                            <h6 style={{ color: 'black' }}>
                                Chào mừng đến với Bao Phê Pha - điểm đến lý tưởng cho những ai đang tìm kiếm một trải nghiệm nghỉ dưỡng đẳng cấp và thư giãn tại một trong những địa điểm tuyệt vời nhất của Việt Nam.<br />
                                Với vị trí đắc địa tại trung tâm thành phố, Bao Phê Pha mang đến không gian sang trọng và thoải mái, kết hợp với dịch vụ chuyên nghiệp và tiện nghi hiện đại.<br />
                                Ngoài ra, Bao Phê Pha còn tự hào với dịch vụ ẩm thực đa dạng và tinh tế, từ những món ăn đặc sản đến hương vị quốc tế, hứa hẹn sẽ làm hài lòng mọi vị khách khó tính nhất.<br />
                                Hãy đặt chân đến Bao Phê Pha và tận hưởng một kỳ nghỉ tuyệt vời, nơi mọi yêu cầu của bạn được chăm sóc kỹ lưỡng và đem lại trải nghiệm đích thực của sự sang trọng và tiện nghi. <br />
                                <p style={{ color: 'black' }} >Chúng tôi luôn sẵn lòng chào đón bạn!</p>
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
                <div className='row room'>
                    <div className='col'>
                        <div class="card" >
                            <img src='../asset1/images/1.jpg' style={{ width: 600, height: 400, }} />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" >
                            <img src='../asset1/images/2.jpg' style={{ width: 600, height: 400, }} />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" >
                            <img src='../asset1/images/3.jpg' style={{ width: 600, height: 400, }} />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    );
}

export default Header;
