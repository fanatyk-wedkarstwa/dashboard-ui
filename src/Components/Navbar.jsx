import React from 'react'
import { IoMenu, IoHomeOutline, IoPersonOutline, IoCalendarClearOutline } from "react-icons/io5";
import { MdPeopleOutline, MdOutlineBarChart, MdOutlinePieChart } from "react-icons/md";
import { FaRegQuestionCircle, FaChartLine } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";

function Navbar() {
   return (
      <div className='bg-basic-light w-min text-gray-400 h-dvh p-7'>
         <div className='flex justify-between w-[207px] text-gray-300'>
            <p className='text-lg'>ADMINIS</p>
            <button><IoMenu /></button>
         </div>
         <div className='text-center m-5'>
            <div className='rounded-full bg-basic-dark size-20 m-auto'><img></img></div>
            <h2 className='text-white'>Ed Roh</h2>
            <p>VP Fancy Admin</p>
         </div>
         <div className='navbar-pages-container'>
            <div>
               <IoHomeOutline />
               <p>Dashboard</p>
            </div>
         </div>
         <p className='text-gray-500'>Data</p>
         <div className='navbar-pages-container'>
            <div >
               <MdPeopleOutline />
               <p>Manage Team</p>
            </div>
            <div>
               <LuContact />
               <p>Contacts Information</p>
            </div>
            <div>
               <TbInvoice />
               <p>Invoices Balances</p>
            </div>
         </div>
         <p className='text-gray-500'>Pages</p>
         <div className='navbar-pages-container'>
            <div>
               <IoPersonOutline />
               <p>Profile Form</p>
            </div>
            <div>
               <IoCalendarClearOutline />
               <p>Calendar</p>
            </div>
            <div>
               <FaRegQuestionCircle />
               <p>FAQ Page</p>
            </div>
         </div>
         <p className='text-gray-500'>Charts</p>
         <div className='navbar-pages-container'>
            <div>
               <MdOutlineBarChart />
               <p>Bar Chart</p>
            </div>
            <div>
               <MdOutlinePieChart />
               <p>Pie Chart</p>
            </div>
            <div>
               <FaChartLine />
               <p>Line Chart</p>
            </div>
            <div>
               <CiGlobe />
               <p>Geography Chart</p>
            </div>
         </div>
      </div >
   )
}

export default Navbar
