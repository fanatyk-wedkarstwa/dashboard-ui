import React from 'react'
import { GoGear, GoBell, GoMoon, GoPerson } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";


function Topbar() {
    return (
        <div className='w-full dark:bg-basic-dark bg-white-dark p-4 flex justify-between'>

            <div className='flex dark:bg-basic-light bg-white-light dark:text-gray-400 text-black p-1 px-2 w-fit rounded'>
                <input placeholder='Search' className='outline-0'></input>
                <HiMagnifyingGlass className='h-6 cursor-pointer' />
            </div>

            <div className='flex text-[20px] gap-4 mr-2 dark:text-white text-black'>
                <GoMoon className='m-auto' />
                <GoBell className='m-auto' />
                <GoGear className='m-auto' />
                <GoPerson className='m-auto' />
            </div>
        </div>
    )
}

export default Topbar
