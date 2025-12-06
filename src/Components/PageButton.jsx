import React from 'react'
import { IoHomeOutline } from "react-icons/io5";

function PageButton({ icon, text }) {
    return (
        <div>
            {icon}
            <p>{text}</p>
        </div>
    )
}

export default PageButton
