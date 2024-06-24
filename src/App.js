// import logo from './logo.svg';
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

                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/registerhotel" element={<HotelRegister />}></Route>





            </Routes >


        </>
    );
}

export default App;
