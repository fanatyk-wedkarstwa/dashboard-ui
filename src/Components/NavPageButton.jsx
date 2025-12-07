import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router';

function NavPageButton({ icon, text, path }) {

    return (
        <Link to={path}>
            {icon}
            <p> {text}</p>
        </Link>
    )
}

export default NavPageButton
