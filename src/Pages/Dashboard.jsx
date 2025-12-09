import React from 'react'
import PageHeader from '../Components/PageHeader'
import GridDonutSM from '../Components/Charts/GridDonutSM'
import { IoMdPersonAdd, IoMdMail } from "react-icons/io";
import { FaTrafficLight, FaCashRegister } from "react-icons/fa";

function Dashboard() {

   return (
      <>
         <PageHeader
            containsButton={true}
            title={"DASHBOARD"}
            text={"Welcome to your dashboard"}
         />
         <main className='grid grid-cols-12 grid-rows-5 gap-4 h-[85%] my-4 [&>div]:p-5'>
            <div className='col-span-3 dark:bg-basic-light bg-white-light flex flex-row justify-between'>
               <GridDonutSM type={"emails"} icon={<IoMdMail />} />
            </div>

            <div className='col-span-3 dark:bg-basic-light bg-white-light flex flex-row justify-between'>
               <GridDonutSM type={"sales"} icon={<FaCashRegister />} />
            </div>

            <div className='col-span-3 dark:bg-basic-light bg-white-light flex flex-row justify-between'>
               <GridDonutSM type={"clients"} icon={<IoMdPersonAdd />} />
            </div>

            <div className='col-span-3 dark:bg-basic-light bg-white-light flex flex-row justify-between'>
               <GridDonutSM type={"traffic"} icon={<FaTrafficLight />} />
            </div>

            <div className='col-span-8 row-span-2 dark:bg-basic-light bg-white-light'>

            </div>

            <div className='col-span-4 row-span-2 dark:bg-basic-light bg-white-light'>

            </div>

            <div className='col-span-4 row-span-2 dark:bg-basic-light bg-white-light'>

            </div>
            <div className='col-span-4 row-span-2 dark:bg-basic-light bg-white-light'>

            </div>
            <div className='col-span-4 row-span-2 dark:bg-basic-light bg-white-light'>

            </div>
         </main>
      </>
   )
}

export default Dashboard
