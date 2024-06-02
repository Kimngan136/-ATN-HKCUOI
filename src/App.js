// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Booking from './user/Book';
import Services from './user/Services';
import Rooms from './user/Rooms';
import Login from './user/Login';
import Register from './user/Register';
import HotelFilter from './user/HotelFilter';

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}></Route>
                    <Route path="/book" element={<Booking />}></Route>
                    <Route path="/Services" element={<Services />}></Route>
                    <Route path="/Rooms" element={<Rooms />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                    <Route path="/HotelFilter" element={<HotelFilter />}></Route>


                </Routes>
            </BrowserRouter >

        </>
    );
}

export default App;
