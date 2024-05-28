import React from "react";

const Book = () => {
    return (
        <div className="container-BookingNow">
            <h2>Đăng Ký Đặt Phòng Khách Sạn</h2>
            <form id="bookingForm">
                <label htmlFor="name">Họ và Tên:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="phone">Số Điện Thoại:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="checkin">Ngày Nhận Phòng:</label>
                <input type="date" id="checkin" name="checkin" required />

                <label htmlFor="checkout">Ngày Trả Phòng:</label>
                <input type="date" id="checkout" name="checkout" required />

                <label htmlFor="rooms">Số Lượng Phòng:</label>
                <input type="number" id="rooms" name="rooms" min="1" required />

                <button type="submit">Đặt Ngay</button>
            </form>
            <div id="result"></div>
        </div>
    )

};

export default Book;