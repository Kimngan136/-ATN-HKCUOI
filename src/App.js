// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Login from './user/Login';
import Register from './user/Register';
import HotelFilter from './user/HotelFilter';
import Details from './user/Details';
import Pay from './user/Pay';
import Confirmpayment from './user/confirmpayment ';
import Xemthem from './user/Xemthem';
import Book from './user/Book';

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
                    <Route path="/book" element={<Book />}></Route>
                    
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                    <Route path="/HotelFilter" element={<HotelFilter />}></Route>
                    <Route path="/Details" element={<Details />}></Route>
                    <Route path="/Pay" element={<Pay />}></Route>
                    <Route path="/Xemthem" element={<Xemthem />}></Route>

                    <Route path="/Confirmpayment" element={<Confirmpayment />}></Route>

                </Routes>
            </BrowserRouter >

        </>
    );
}

export default App;
