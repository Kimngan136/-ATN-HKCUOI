import React from 'react';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Input, Form, Button, message } from 'antd';
import axiosCustomize from '../axios/axiosCustomize';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import './Login.css'; // Import file CSS để custom style

const HistoryUser = () => {

    return (
        <>
            
            <div className='container-HistoryUser'>
                <div class="search-containerHistory">

                    <input type="text" class="search-inputHistory" placeholder="Search by name, phone number" />

                    <button class="search-buttonHistory">Search</button>

                </div>


                <table className='table-history'>

                    <tr>

                        <th></th>

                        <th>First and last name</th>

                        <th>Phone number</th>

                        <th>Email</th>

                        <th>Room Type</th>

                        <th>Room</th>

                        <th>Room Price</th>

                        <th>Checkin Date</th>

                        <th>Checkout Date</th>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>hpvodanh</td>

                        <td>1233333</td>

                        <td>hpvodanh030@gmail.com</td>

                        <td>Normal</td>

                        <td>101</td>

                        <td>300.0$</td>

                        <td>09:31 - 6/1/2021</td>

                        <td>Unpaid</td>

                    </tr>

                    <tr>

                        <td>2</td>

                        <td>Phạm Nguyên</td>

                        <td>1233333</td>

                        <td></td>

                        <td>Normal</td>

                        <td>103</td>

                        <td>380.0$</td>

                        <td>09:30 - 6/1/2021</td>

                        <td>Unpaid</td>

                    </tr>

                    <tr>

                        <td>3</td>

                        <td>Phạm Nguyên</td>

                        <td>1233333</td>

                        <td>hpvodanh030@gmail.com</td>

                        <td>Normal</td>

                        <td>102</td>

                        <td>350.0$</td>

                        <td>09:28 - 6/1/2021</td>

                        <td>09:28 - 6/1/2021</td>

                    </tr>

                </table>


                <div class="pagination">

                    <button class="active">First page</button>


                    <button class="active">Last page</button>

                </div>
            </div>
        </>
    );
};

export default HistoryUser;
