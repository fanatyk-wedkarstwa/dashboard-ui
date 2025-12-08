import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router';

function NavPageButton({ icon, text, path }) {

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `p-2.5 leading-4 flex items-center gap-3 rounded-lg ${isActive
                    ? 'text-accentIndigo dark:bg-basic-dark bg-white-dark drop-shadow-lg'
                    : 'text-gray-700 dark:text-gray-200'
                }`
            }
        >

            {icon}
            <p> {text}</p>
        </NavLink>
    )
}

export default NavPageButton
