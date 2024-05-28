import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faLink, } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";


const Services = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let selectedVehicles = [];

    // Lặp qua từng checkbox và kiểm tra xem có được chọn không
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedVehicles.push(checkbox.value);
        }
    });

    // Kiểm tra xem có checkbox nào được chọn không
    if (selectedVehicles.length > 0) {
        // Thực hiện các hành động khi có ít nhất một checkbox được chọn
        console.log("Các phương tiện được chọn: ", selectedVehicles);
        // Thêm mã lệnh để lưu thông tin đăng ký thuê ở đây
    } else {
        // Thông báo cho người dùng biết rằng họ chưa chọn bất kỳ phương tiện nào
        console.log("Vui lòng chọn ít nhất một phương tiện để thuê.");
    }
    return (

        <div>
            <Header />
            <div className="containerServic">
                <div className="item1">

                </div>
                <div class="item2">
                    <div class="rental-container">
                        <h3>Đăng ký thuê phương tiện ngay</h3>
                        <label for="moto">
                            <input type="checkbox" id="moto" name="vehicle" value="moto" /> Xe máy
                        </label>

                        <label for="car">
                            <input type="checkbox" id="car" name="vehicle" value="car" /> Xe ô tô
                        </label>
                        <label>
                            <button class="btn-thue" onclick="thuePhuongTien()">Thuê</button>
                        </label>
                    </div>

                </div>



                <div className="item3">
                    <h3 style={{ marginTop: 350, float: "left", marginLeft: 30, }}>
                        RELAX ZONE
                    </h3>
                </div>
                <div className="item4">
                    <h4 style={{ marginBottom: 20 }}>
                        PHƯƠNG TIỆN <FontAwesomeIcon icon={faMotorcycle} />
                    </h4 >
                    <p style={{ lineHeight: 2, }}>
                        {/* <FontAwesomeIcon icon={faQuoteleft} /> */}
                        <i class="fas fa-quote-left quote-icon"> </i>
                        KHÔNG CÒN LO NGẠI VỀ VẤN ĐỀ ĐI LẠI, VẤN ĐỀ PHƯƠNG TIỆN. THOẢI MÁI THỜI GIAN SỬ DỤNG .
                        KHÔNG TỐN CÔNG MANG XE. GIÁ CẢ HỢP LÍ. 
                        <i class="fas fa-quote-right quote-icon"> </i>
                    </p>
                </div>
                <div className="item5">5</div>
                <div className="item6"></div>
                <div className="item7">
                    <div style={{ top: 90 }}>
                        <FontAwesomeIcon icon={faLink} />
                    </div>
                    <div style={{ top: 100 }}>
                        Check New Events
                    </div>
                </div>
                <div className="item9">
                    <h3>
                        Around Us
                    </h3>
                    <h5 style={{ marginTop: 30, marginBottom: 25, }}>X</h5>
                    <h6 style={{ lineHeight: 2, }}>
                        <i class="fas fa-quote-left quote-icon"> </i>
                        You will be free, gentle like the life of a wise person,
                        a seasoning of significant and large elements.
                        Everyone should use this adjustment method to achieve stability.
                        <i class="fas fa-quote-right quote-icon"> </i>
                    </h6>
                </div>
                <div className="item10">
                    <h3 style={{ marginTop: 230, float: "left", marginLeft: 30, }}>
                        Daily Walk
                    </h3>
                </div>

            </div>
            <Footer/>
        </div>
    );
};
export default Services;