import React from 'react'
import { IoMenu, IoHomeOutline, IoPersonOutline, IoCalendarClearOutline } from "react-icons/io5";
import { MdPeopleOutline, MdOutlineBarChart, MdOutlinePieChart } from "react-icons/md";
import { FaRegQuestionCircle, FaChartLine } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import NavPageButton from './NavPageButton';

function Navbar() {
   return (
      <div className='dark:bg-basic-light bg-white-light w-min dark:text-gray-200 text-gray-700 h-dvh p-7'>
         <div className='flex justify-between w-[207px] dark:text-gray-200 text-gray-700'>
            <p className='text-lg'>ADMINIS</p>
            <button><IoMenu /></button>
         </div>
         <div className='text-center m-5'>
            <div className='rounded-full dark:bg-basic-dark bg-white-dark size-20 m-auto'><img></img></div>
            <h2 className='dark:text-white text-black font-semibold text-xl'>Ed Roh</h2>
            <p className='text-accentLime font-semibold'>VP Fancy Admin</p>
         </div>
         <div className='navbar-pages-container'>
            <NavPageButton icon={<IoHomeOutline />} text={"Dashboard"} path={""} />
         </div>
         <p className='text-gray-500 mt-4'>Data</p>
         <div className='navbar-pages-container'>
            <NavPageButton icon={<MdPeopleOutline />} text={"Manage Team"} path={"team"} />
            <NavPageButton icon={<LuContact />} text={"Contacts Information"} path={"contacts"} />
            <NavPageButton icon={<TbInvoice />} text={"Invoices Balances"} path={"invoices"} />
         </div>
         <p className='text-gray-500 mt-4'>Pages</p>
         <div className='navbar-pages-container'>
            <NavPageButton icon={<IoPersonOutline />} text={"Profile Form"} path={"profile"} />
            <NavPageButton icon={<IoCalendarClearOutline />} text={"Calendar"} path={"calendar"} />
            <NavPageButton icon={<FaRegQuestionCircle />} text={"FAQ Page"} path={"faq"} />
         </div>
         <p className='text-gray-500 mt-4'>Charts</p>
         <div className='navbar-pages-container'>
            <NavPageButton icon={<MdOutlineBarChart />} text={"Bar Chart"} path={"bar"} />
            <NavPageButton icon={<MdOutlinePieChart />} text={"Pie Chart"} path={"pie"} />
            <NavPageButton icon={<FaChartLine />} text={"Line Chart"} path={"line"} />
            <NavPageButton icon={<CiGlobe />} text={"Geography Chart"} path={"geography"} />
         </div>
      </div >
   )
}

export default Navbar
