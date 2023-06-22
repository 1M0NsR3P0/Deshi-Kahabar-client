import React from 'react';
import { NavLink } from 'react-router-dom';
import './Active.css'

const ActiveLink = ({ to, children }) => {
    return (

        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "bg-info hover:bg-info" : ""
            }>
            {children}
        </NavLink>

    );
};

export default ActiveLink;