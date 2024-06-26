import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AutoComplete, DatePicker, Dropdown, InputNumber, Menu, Select, Table, Slider, Checkbox, Button as AntButton, Row, Col, message } from 'antd';
import { GlobalOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import axios from 'axios';
import axiosCustomize from '../axios/axiosCustomize';
import Map from '../Components/Map';
import ListFilter from './ListFilter';


const { RangePicker } = DatePicker;

dayjs.locale('vi');

const HotelFilter = () => {
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    const [tempAdults, setTempAdults] = useState(adults);
    const [tempChildren, setTempChildren] = useState(children);
    const [tempRooms, setTempRooms] = useState(rooms);

    const [checkIn, setCheckIn] = useState();
    const [checkOut, setCheckOut] = useState();
    const dateFormat = 'DD/MM/YYYY';


    const [messageApi, contextHolder] = message.useMessage()

    const [hotelData, setHotelData] = useState();
    useEffect(() => {
        // Lấy query params từ URL hiện tại
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        // Lấy các giá trị từ query params
        const province = urlParams.get('province');
        const checkIn = urlParams.get('checkinDate');
        const checkOut = urlParams.get('checkoutDate');
        const numberOfPeople = urlParams.get('numberOfPeople');
        const numberOfRooms = urlParams.get('numberOfRooms');

        if (province && checkIn && checkOut && numberOfPeople && numberOfRooms) {
            // Tạo object chứa dữ liệu để gửi đi
            // const requestData = {
            //     province: province,
            //     checkinDate: checkIn,
            //     checkinDate: checkOut,
            //     numberOfPeople: parseInt(numberOfPeople),
            //     numberOfRooms: parseInt(numberOfRooms)
            // };

            // URL endpoint
            const fetchHotel = async () => {
                console.log('requestData', province);
                // Gửi yêu cầu Axios
                try {
                    const fetch = await axiosCustomize.post(`/Hotels/getavailablehotel?province=${province}&checkinDate=${checkIn}&checkoutDate=${checkOut}&numberOfPeople=${numberOfPeople}&numberOfRooms=${numberOfRooms}`)
                    console.log(fetch.data);
                    setHotelData(fetch.data)
                    messageApi.open({
                        type: 'success',
                        content: 'Thành công',
                    });
                } catch (error) {
                    console.error('Đã xảy ra lỗi khi gửi yêu cầu:', error);
                }
            }
            fetchHotel();
        }
    }, []);

    const disabledDate = (current) => {
        return current && current < dayjs().endOf('day');
    };

    const handleDateChange = (dates, dateStrings) => {
        if (dateStrings[0] && dateStrings[1]) {
            const fromDate = dayjs(dateStrings[0], dateFormat).format('YYYY-MM-DD');
            const toDate = dayjs(dateStrings[1], dateFormat).format('YYYY-MM-DD');
            setCheckIn(fromDate);
            setCheckOut(toDate);
        }
    };

    const handleDone = () => {
        setAdults(tempAdults);
        setChildren(tempChildren);
        setRooms(tempRooms);
    };

    const [budget, setBudget] = useState(100000);
    const [services, setServices] = useState({
        acceptChildren: false,
        acceptPet: false,
        supportPeopleWithDisabilities: false,
        haveSwimmingPool: false,
        haveElevator: false,
    });
    const [stars, setStars] = useState({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
        noRating: false,
    });



    const menu = (
        <Menu>
            <Menu.Item key="1">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label>Người lớn</label>
                    <InputNumber
                        min={1}
                        max={10}
                        value={tempAdults}
                        onChange={value => setTempAdults(value)}
                    />
                </div>
            </Menu.Item>
            <Menu.Item key="2">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label>Trẻ em</label>
                    <InputNumber
                        min={0}
                        max={10}
                        value={tempChildren}
                        onChange={value => setTempChildren(value)}
                    />
                </div>
            </Menu.Item>
            <Menu.Item key="3">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label>Phòng</label>
                    <InputNumber
                        min={1}
                        max={10}
                        value={tempRooms}
                        onChange={value => setTempRooms(value)}
                    />
                </div>
            </Menu.Item>
            <Menu.Item key="4">
                <AntButton type="primary" style={{ width: '100%' }} onClick={handleDone}>Xong</AntButton>
            </Menu.Item>
        </Menu>
    );


    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <>
            {contextHolder}
            <div className='row' style={{ top: '-60px' }}>
                <div className='containerSearch' style={{ width: '950px' }}>
                    <div style={{ marginTop: 20 }}>
                        <AutoComplete
                            style={{ width: 200, borderRadius: '40px' }}
                            placeholder={<span style={{ fontWeight: 'normal', color: 'gray' }}>Bạn muốn đến đâu?</span>}
                            prefix={<GlobalOutlined />}
                        />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <RangePicker
                            style={{ paddingLeft: 30 }}
                            format={dateFormat}
                            placeholder={['Ngày đến', 'Ngày đi']}
                            disabledDate={disabledDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <AntButton icon={<UserOutlined />}>
                                {adults} người lớn - {children} trẻ em - {rooms} phòng
                            </AntButton>
                        </Dropdown>
                    </div>
                    <div className="icon-container">
                        <AntButton type="primary">
                            <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                        </AntButton>
                    </div>
                </div>
            </div>
            <div className='container-filterList'>
                <div className="filter-sidebar" style={{ height: 600,width:340, }}>

                    <button className='clear-button ' >X</button>

                    <div className='map-filter'>
                        <Map hotelData={hotelData} />
                    </div>

                    <div style={{ padding: '10px', marginTop:90}}>
                        <p style={{ fontWeight: 'bold', color:'black' }}>Giá tiền của bạn</p>
                        <Slider range defaultValue={[20, 50]} />
                        <hr></hr>

                        <p style={{ fontWeight: 'bold', color: 'black' }}>Dịch vụ chung của khách sạn:</p>
                        <Checkbox onChange={onChange}>Chấp nhận trẻ em</Checkbox>
                        <Checkbox onChange={onChange}>Chấp nhận thú cưng </Checkbox>
                        <Checkbox onChange={onChange}>Hỗ trợ người khuyết tật</Checkbox><br/>
                        <Checkbox onChange={onChange}>Có thang máy</Checkbox>
                        <br />
                        <Checkbox onChange={onChange}>Có hồ bơi</Checkbox>

                        <p style={{ fontWeight: 'bold', color: 'black' }}>Số sao</p>
                        <Checkbox onChange={onChange}>5 <i class="fa-solid fa-star" style={{color:'yellow'}}></i></Checkbox>
                        <Checkbox onChange={onChange}>4 <i class="fa-solid fa-star" style={{ color: 'yellow' }}></i></Checkbox>
                        <Checkbox onChange={onChange}>3 <i class="fa-solid fa-star" style={{ color: 'yellow' }}></i></Checkbox>
                        <Checkbox onChange={onChange}>2 <i class="fa-solid fa-star" style={{ color: 'yellow' }}></i></Checkbox>
                        <Checkbox onChange={onChange}>1 <i class="fa-solid fa-star" style={{ color: 'yellow' }}></i></Checkbox>
                    </div>

                </div>
                <div className="filter-listCard">


                    {/* VÍ DỤ MÀ NHẬP ListFilter VÀO HOTELFILTER THÌ ĐẶT NÓ NGAY ĐÂY NHA
                    NHỚ THÊM ANT.CSS */}
                    <ListFilter />


                </div>

            </div>

        </>
    );
};

export default HotelFilter;
