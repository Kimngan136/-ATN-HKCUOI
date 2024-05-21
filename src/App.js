// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Layout from './layout';


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
                    <Route path="/" element={<Layout />}>


                    </Route>
                </Routes>
            </BrowserRouter >

        </>
    );
}

export default App;
