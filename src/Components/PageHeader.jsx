import React from 'react'
import { IoMdDownload } from "react-icons/io";

function PageHeader({ containsButton, title, text }) {
   return (
      <div className='text-white flex justify-between'>
         <div className='flex flex-col gap-2 my-2'>
            <h2 className='font-semibold text-xl'>{title}</h2>
            <p className='text-accentLime'>{text}</p>
         </div>
         {containsButton ?
            <button className='bg-indigo-500  flex p-2 px-3 rounded-sm gap-2 items-center self-center'>
               <IoMdDownload className='h-6' />
               <p>DOWNLOAD REPORTS</p>
            </button> : <></>}
      </div>
   )
}

export default PageHeader
