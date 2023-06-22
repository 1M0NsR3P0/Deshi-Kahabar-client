import React from 'react';
import Navbar from './Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Home from './Layout/Home';
import Footer from './Layout/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;