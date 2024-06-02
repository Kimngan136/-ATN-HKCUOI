import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

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
    const handleMinReviewsChange = (event) => setMinReviews(event.target.value);
    const handleDistanceChange = (event) => setDistance(event.target.value);
    const handleSortByAscendingChange = () => {
        setSortByPriceAscending(!sortByPriceAscending);
        setSortByPriceDescending(false); // Ensure only one checkbox is checked
    };
    const handleSortByDescendingChange = () => {
        setSortByPriceDescending(!sortByPriceDescending);
        setSortByPriceAscending(false); // Ensure only one checkbox is checked
    };

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
        setAmenities({
            transport: false,
            pool: false,
            balcony: false,
            view: false,
        });
        setFilteredHotels([]);
        swal("Cleared", "Filters have been cleared.", "success");
    };

/**code lấy ngày check in check out VÀ TÍNH TỔNG ĐÊM */

    const handleDateChange = (event) => {
        setDateCheckIn(event.target.value);

    };


    const handleCheckOutChange = (event) => {
        setDateCheckOut(event.target.value);
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


    return (
        <div className="container-filter">
            <div className="hotel-filter">

                <h2>Filter Hotels</h2>
                <div className='where'>
                   
                        <div className="input-group">
                            <label htmlFor="minPrice">Khu Vực: </label>
                            <input
                                type="number"
                                id="minPrice"
                                value={minPrice}
                                onChange={handleMinPriceChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="DateCheckIn">Ngày Nhận Phòng: </label>
                            <input
                                type="date"
                                id="DateCheckIn"
                                value={DateCheckIn}
                                onChange={handleDateChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="DateCheckOut">Ngày Trả Phòng: </label>
                            <input
                                type="date"
                                id="DateCheckOut"
                                value={DateCheckOut}
                                onChange={handleCheckOutChange}
                            />
                        </div>
                        <button className="btn-calculate" onClick={calculateNights}>Tìm</button>
                        {totalNights !== null && <label className="total-nights-label">Tổng: {totalNights} Đêm</label>}
                    
                </div>





                <div className="filter-inputs">
                    <div className="input-group">
                        <label htmlFor="minPrice">Giá thấp nhất: </label>
                        <input
                            type="number"
                            id="minPrice"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="maxPrice">Giá cao nhất: </label>
                        <input
                            type="number"
                            id="maxPrice"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="minReviews">Lượng Review: </label>
                        <input
                            type="number"
                            id="minReviews"
                            value={minReviews}
                            onChange={handleMinReviewsChange}
                        />
                    </div>
                    <div className="input-group">
                        <label>Đánh giá khách sạn: </label>
                        {[1, 2, 3, 4, 5].map(star => (
                            <label key={star}>
                                <input
                                    type="checkbox"
                                    value={star}
                                    checked={selectedStars.includes(star)}
                                    onChange={handleStarChange}
                                />
                                {star} Star{star > 1 && 's'}
                            </label>
                        ))}
                    </div>
                    <div className="input-group">
                        <label htmlFor="distance">Khoản cách (km): </label>
                        <input
                            type="number"
                            id="distance"
                            value={distance}
                            onChange={handleDistanceChange}
                        />
                    </div>
                    <div className="input-group">
                        <label>Tiện ích: </label>
                        {['transport', 'pool', 'balcony', 'view'].map(amenity => (
                            <label key={amenity}>
                                <input
                                    type="checkbox"
                                    name={amenity}
                                    checked={amenities[amenity]}
                                    onChange={handleAmenitiesChange}
                                />
                                {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                            </label>
                        ))}
                    </div>
                    {/* /**hgfjhgf */}
                    <div className="input-group">
                        <label htmlFor="sortByPriceAscending">Xếp theo giá (Tăng dần): </label>
                        <input
                            type="checkbox"
                            id="sortByPriceAscending"
                            checked={sortByPriceAscending}
                            onChange={handleSortByAscendingChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="sortByPriceDescending">Xếp theo giá (Giảm dần): </label>
                        <input
                            type="checkbox"
                            id="sortByPriceDescending"
                            checked={sortByPriceDescending}
                            onChange={handleSortByDescendingChange}
                        />
                    </div>
                    <button className="filter-button" onClick={handleFilter}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="button-group">
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
            <div className="listFilter">
                <div style={{margin:7,}} >
                    <img style={{ height:300, }}  src='../asset1/images/ks1.jpg' />
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
                        <span style={{backgroundColor:'yellow'}}>
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
