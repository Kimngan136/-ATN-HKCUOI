import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import { DatePicker, Space } from 'antd';
import { Flex, Rate } from 'antd';
import { Checkbox } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];






const onChangee = (checkedValues) => {
    console.log('checked = ', checkedValues);
};
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    {
        label: 'Apple',
        value: 'Apple',
    },
    {
        label: 'Pear',
        value: 'Pear',
    },
    {
        label: 'Orange',
        value: 'Orange',
    },
];
const optionsWithDisabled = [
    {
        label: 'Apple',
        value: 'Apple',
    },
    {
        label: 'Pear',
        value: 'Pear',
    },
    {
        label: 'Orange',
        value: 'Orange',
        disabled: false,
    },
];
const onChange = (date, dateString) => {
    console.log(date, dateString);
};
const hotels = [
    { id: 1, name: 'Hotel A', price: 100, reviews: 50, stars: 3, distance: 5, amenities: ['Phương Tiện', 'Hồ Bơi'] },
    { id: 2, name: 'Hotel B', price: 200, reviews: 30, stars: 4, distance: 10, amenities: ['Ban Công', 'view'] },
    { id: 3, name: 'Hotel C', price: 150, reviews: 100, stars: 5, distance: 2, amenities: ['Hồ Bơi', 'view'] },
    { id: 4, name: 'Hotel D', price: 300, reviews: 70, stars: 2, distance: 8, amenities: ['Phương Tiện', 'Ban Công'] },
];

const HotelFilter = () => {
    const [DateCheckOut, setDateCheckOut] = useState('');
    const [DateCheckIn, setDateCheckIn] = useState('');
    const [totalNights, setTotalNights] = useState(0);

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minReviews, setMinReviews] = useState('');
    const [selectedStars, setSelectedStars] = useState([]);
    const [sortByPriceAscending, setSortByPriceAscending] = useState(false);
    const [sortByPriceDescending, setSortByPriceDescending] = useState(false);
    const [distance, setDistance] = useState('');
    const [amenities, setAmenities] = useState({
        transport: false,
        pool: false,
        balcony: false,
        view: false,
    });
    const [filteredHotels, setFilteredHotels] = useState([]);

    const handleMinPriceChange = (event) => setMinPrice(event.target.value);
    const handleMaxPriceChange = (event) => setMaxPrice(event.target.value);

    const handleAmenitiesChange = (event) => {
        const { name, checked } = event.target;
        setAmenities((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleStarChange = (event) => {
        const { value, checked } = event.target;
        setSelectedStars((prev) =>
            checked ? [...prev, parseInt(value)] : prev.filter(star => star !== parseInt(value))
        );
    };

    const handleFilter = () => {
        const min = parseInt(minPrice);
        const max = parseInt(maxPrice);
        const minRev = parseInt(minReviews);
        const maxDistance = parseInt(distance);
        const selectedAmenities = Object.keys(amenities).filter(key => amenities[key]);

        let filtered = hotels.filter(hotel =>
            (isNaN(min) || hotel.price >= min) &&
            (isNaN(max) || hotel.price <= max) &&
            (isNaN(minRev) || hotel.reviews >= minRev) &&
            (selectedStars.length === 0 || selectedStars.includes(hotel.stars)) &&
            (isNaN(maxDistance) || hotel.distance <= maxDistance) &&
            selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
        );

        if (sortByPriceAscending) {
            filtered.sort((a, b) => a.price - b.price); // Sort by price ascending
        } else if (sortByPriceDescending) {
            filtered.sort((a, b) => b.price - a.price); // Sort by price descending
        }

        setFilteredHotels(filtered);
    };

    const handleClear = () => {
        setMinPrice('');
        setMaxPrice('');
        setMinReviews('');
        setSelectedStars([]);
        setSortByPriceAscending(false);
        setSortByPriceDescending(false);
        setDistance('');
        setFilteredHotels([]);
        swal("Cleared", "Filters have been cleared.", "success");
    };


    const calculateNights = () => {
        if (DateCheckIn && DateCheckOut) {
            const checkInDate = new Date(DateCheckIn);
            const checkOutDate = new Date(DateCheckOut);

            if (checkInDate < checkOutDate) {
                const differenceInTime = checkOutDate - checkInDate;
                const differenceInDays = differenceInTime / (1000 * 3600 * 24);
                setTotalNights(differenceInDays);
            } else if (checkInDate.getTime() === checkOutDate.getTime()) {
                setTotalNights(1);
            } else {
                setTotalNights(-1);
            }
        } else {
            setTotalNights(0);
        }
    };

    const [start, setStart] = useState(3);
    return (
        <div className="container-filter">
            <div className="hotel-filter">

                <div style={{ backgroundColor: 'orange' }}>

                    <h2>Filter Hotels</h2>
                    <div style={{ marginLeft: 10, width: 360, }}>

                        <div className="input-group">
                            <label htmlFor="minPrice">Khu Vực: </label>
                            <input
                                type="number"
                               
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="DateCheckIn">Ngày Nhận Phòng: </label>
                            <Space direction="vertical">
                                <DatePicker onChange={onChange} />

                            </Space>
                        </div>
                        <div className="input-group">
                            <label htmlFor="DateCheckOut">Ngày Trả Phòng: </label>
                            <Space direction="vertical">
                                <DatePicker onChange={onChange} />

                            </Space>
                        </div>
                        <button className="btn-calculate" onClick={calculateNights}>Tìm</button>
                        {totalNights !== null && <label className="total-nights-label">Tổng: {totalNights} Đêm</label>}

                    </div>
                </div>




                <label className='liner' >--------------------------------------------------------------------------------------------------------</label>
                <div >
                    <h5 style={{ marginBottom: 20, color: 'black' }}>TÌM KIẾM NÂNG CAO</h5>
                    <div className="filter-inputs">
                        <div className="input-group">
                            <label htmlFor="minPrice">Giá từ: </label>
                            <input
                                type="number"
                                id="minPrice"
                                value={minPrice}
                                onChange={handleMinPriceChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="maxPrice">Đến: </label>
                            <input
                                type="number"
                                id="maxPrice"
                                value={maxPrice}
                                onChange={handleMaxPriceChange}
                            />
                        </div>
                        <label className='liner' >--------------------------------------------------------------------------------------------------------</label>
                        <label htmlFor="minReviews">Chọn dịch vụ bao quát của khách sạn của bạn:  </label>

                        <div className="input-group">

                            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                            <br />
                            <br />
                            <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
                            <br />
                            <br />
                           
                        </div>
                        <label className='liner' >--------------------------------------------------------------------------------------------------------</label>
                        <label htmlFor="minReviews">Cho chúng tôi biết khoảng cách của khách sạn bạn:   </label>

                        <div className="input-group">
                            <label htmlFor="maxPrice">Đến sân bay: </label>
                            <input className='input-Go' required placeholder="Tên sân bay" type="text" />

                            <label htmlFor="maxPrice">Đến bãi biển: </label>
                            <input className='input-Go' required placeholder="Tên bãi biển" type="text" />

                            <label htmlFor="maxPrice">Đến trung tâm thành phố: </label>
                            <input className='input-Go' required placeholder="Tên thành phố" type="text" />

                            <label htmlFor="maxPrice">Giá thấp nhất 1 đêm của bạn là bao nhiêu? </label>
                            <input className='input-Go' required placeholder="Giá tiền" type="number" />

                        </div>
                        <label className='liner'>--------------------------------------------------------------------------------------------------------</label>

                        <label>RATING</label>
                        <Flex gap="middle" vertical>
                            <Rate tooltips={desc} onChange={setStart} value={start} />
                            {start ? <span>{desc[start - 1]}</span> : null}
                        </Flex>


                    </div>
                    <div className="button-group">
                        <button className="filter-button" onClick={handleFilter}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <button className="clear-button" onClick={handleClear}>
                            Clear
                        </button>
                    </div>
                    <h3>Kết Quả:</h3>
                    <ul className="hotel-list">
                        {filteredHotels.map(hotel => (
                            <li key={hotel.id}>
                                {hotel.name} - ${hotel.price} - {hotel.stars} Star{hotel.stars > 1 && 's'} - Reviews: {hotel.reviews} - Distance: {hotel.distance}km - Amenities: {hotel.amenities.join(', ')}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>











            <div className="listFilter">

                <div style={{ margin: 7, }} >

                    <img style={{ height: 300, }} src='../asset1/images/ks1.jpg' />
                </div>
                <div className=''>

                    <div >
                        <h2>Summer Beach Hotel</h2>
                        <i class="fas fa-star bg-yellow-500 "></i>
                        <i class="fas fa-star bg-yellow-500"></i>
                        <i class="fas fa-star  bg-yellow-500 "></i>
                        <i class="fas fa-star   "></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <span style={{ backgroundColor: 'yellow' }}>
                            <i class="fa-regular fa-thumbs-up"></i>
                            <i class="fa-regular fa-star"></i>
                        </span>
                        <span> Nổi Bật</span>
                    </div>

                    <li ><a href='#'>Back Beach, Vũng Tàu</a> <a href='#'>--Xem vị trí</a></li>

                    <span>cách trung tâm 1.9km</span>
                    <li>
                        <i class="fa-solid fa-umbrella"> </i>
                        <span> Gần Biển</span>
                    </li>
                    <div class='firstFilter'>

                        <div className='filter2'>
                            <li>Phòng Đôi </li>
                            <li>1 giường đôi lớn</li>
                            <i class="fa-solid fa-check"><span>Miễn phí hủy</span></i>
                            <i class="fa-solid fa-check"><span>Miễn Phí Ăn Sáng</span></i>

                        </div>
                        <div className='filter1'>
                            <span class="price-strikethrough">590.000 đ</span>
                            <h3 >490.000 đ</h3>
                            <p>Đã bao gồm thuế</p>
                            <button >Đặt Phòng Ngay</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HotelFilter;
