import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faPerson, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Checkbox, Flex, Input, InputNumber } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const Details = () => {
    const onChange = (value) => {
        console.log('changed', value);
    };
    const phongtrong = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <>
            <div>
                <div className='TOP3' style={{ marginTop: 60, color: 'black', fontWeight: 'bold', marginBottom: 20, }}>
                    <h5 style={{ marginBottom: 30, marginLeft: 30, }}>THÔNG TIN CHI TIẾT CỦA PHÒNG</h5>
                    <div className='containerBed'>
                        <div className=' colum01 '>
                        </div>
                        <div className='column rowbed'>
                            <div className=' column1 '>
                            </div>
                            <div className='column2'>
                            </div>
                            <div className='column3'>
                            </div>
                            <div className='column4'>
                                <Link to=''>
                                    <button className='btn-seepic'>
                                        XEM THÊM
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <label className='liner' >------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</label>
                        <br />

                    </div>

                </div>
            </div>


            <div className='row containerDetails'>
                <div className='col' style={{paddingLeft:300,}} >
                    <div><i class="fa-solid fa-bars"> </i> Khách Sạn
                    </div>
                    <div>
                        <i class="fas fa-star bg-yellow-500 "></i>
                        <i class="fas fa-star bg-yellow-500"></i>
                        <i class="fas fa-star  bg-yellow-500 "></i>
                        <i class="fas fa-star  bg-yellow-500 "></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>THE SONG VŨNG TÀU</h3>
                    </div>
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        162 Đường Thùy Vân, Phường 7, TP Vũng tàu
                    </div>

                </div>
                <div className='col ' style={{ paddingLeft: 95, }}>
                    <div>Giá Phòng Từ:</div>
                    <div>
                        <div class="price">1.990.000 đ</div>
                        <span style={{color:'red'}}> 320.000 VNĐ /Đêm</span>
                    </div>
                    <div>
                        <button class="btn-dat-phong">ĐẶT PHÒNG</button>                    </div>
                </div>

            </div>



            <div className='tien-ich1 '>
                <h4 style={{ marginBottom: 20,color:'black', }}>Tiện Ích Khách Sạn</h4>
                <div className='tien-ich'>
                    <div>Gần trung tâm</div>
                    <div>Nhà hàng</div>
                    <div>Quày Bar</div>
                    <div>Phòng Spa</div>
                    <div>Gần trung tâm</div>
                    
                </div>
            </div>
            <div class='row List' style={{ color: 'black' }}>
                <div className='containerSearch'>
                    <div className='loai-phong'>
                        <label>Loại phòng</label>
                        <Flex vertical gap={12}>
                            <Input placeholder="" />
                        </Flex>
                    </div>
                    <div style={{ marginTop: 23, }}>
                        <label>Phòng trống </label>
                        <Checkbox onChange={phongtrong}></Checkbox>

                    </div>
                    <div >
                    </div>
                    <div className="icon-container" >
                        <Link to='/HotelFilter'><i style={{ color: 'white' }} className="fa-solid fa-magnifying-glass"></i></Link>
                    </div>
                </div>

            </div>



            <div className='TOP3' style={{ marginTop: 40, color: 'black', fontWeight: 'bold' }}>
                <h5 style={{ marginLeft: 30, marginBottom: 30, }}>
                    <Link to='/Details'>XEM GẦN ĐÂY </Link>
                </h5>
                <div class="containerTrend">
                    <div class="card" style={{ width: 250, height: 420, }} >
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
                </div>
            </div>





            
            <div className='TOP3' style={{ marginTop: 40, color: 'black', fontWeight: 'bold' }}>
                <h5 style={{ marginLeft: 30, marginBottom: 30, }}>
                    <Link to=''>KHÁCH SẠN TƯƠNG TỰ</Link>
                </h5>
                <div class="containerTrend">
                    <div class="card" style={{ width: 250, height: 420, }} >
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


                </div>
            </div>


            <div className='TOP3' style={{ marginTop: 40, color: 'black', fontWeight: 'bold' }}>
                <h5 style={{ marginLeft: 30, marginBottom: 30, }}>
                    <Link to=''>ĐÁNH GIÁ</Link>
                </h5>
                
            </div>
        </>
    );
}
export default Details;