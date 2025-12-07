import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router';

function NavPageButton({ icon, text, path }) {

    return (
        <NavLink to={path}>
            {icon}
            <p> {text}</p>
        </NavLink>
    )
}

export default NavPageButton
