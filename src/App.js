import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter, Outlet } from 'react-router-dom';
import Layout from './layout';
import Login from './user/Login';
import Register from './user/Register';
import HotelFilter from './user/HotelFilter';
import Details from './user/Details';
import Pay from './user/Pay';
import Confirmpayment from './user/confirmpayment ';
import Xemthem from './user/Xemthem';
import Book from './user/Book';
import HomePage from './user/HomePage';
import HotelRegister from './user/HotelRegister';
import LayoutOwner from './Owner/LayoutOwner';
import DashBoard from './Owner/Pages/Booking/DashBoard';
import Information from './Owner/Pages/Booking/Information';
import BookingTable from './Owner/Pages/Booking/BookingTable';
import RoomType from './Owner/Pages/Booking/RoomType';
import ListFilter from './user/ListFilter';

import Review from './user/Review';

import NotFound from './user/NotFound';
import PrivateRoute from './axios/PrivateRoute';
import Repass from './user/Repass';
import Newpass from './user/Newpass';


function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    }

    const handleLogout = () => {
        setLoggedIn(false);
    }

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            setLoggedIn(true);
        }
    }, []);
    return (
        <>

            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/filter" element={<HotelFilter />} />
                    <Route path="/detail/:id" element={<Details />}></Route>
                    <Route path="/pay" element={<Pay />}></Route>
                    <Route path="/confirmpayment" element={<Confirmpayment />}></Route>



                </Route>



                <Route path="/owner" element={<PrivateRoute><LayoutOwner /></PrivateRoute>} >
                    <Route index path="dashboard" element={<DashBoard />} />
                    <Route path="information" element={<Information />} />
                    <Route path="booking" element={<BookingTable />} />
                    <Route path="roomtype" element={<RoomType />} />
                </Route>


                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/registerhotel" element={<HotelRegister />}></Route>
                <Route path="/listfilter" element={<ListFilter />}></Route>
                <Route path="/Review" element={<Review />}></Route>
                <Route path="/Repass" element={<Repass />}></Route>
                <Route path="/Newpass" element={<Newpass />}></Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes >


        </>
    );
}

export default App;
