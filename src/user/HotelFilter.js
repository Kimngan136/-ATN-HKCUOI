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

    return (
        <div className="hotel-filter">
            <h2>Filter Hotels</h2>
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
                {/* /**hgfjhgf */ }
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
    );
};

export default HotelFilter;
