import React from 'react'
import PageHeader from '../Components/PageHeader'

function Dashboard() {
   return (
      <>
         <PageHeader
            containsButton={true}
            title={"DASHBOARD"}
            text={"Welcome to your dashboard"}
         />
         <main className='grid grid-cols-12 grid-rows-5 gap-4 h-[85%] my-4'>
            <div className='col-span-3'>
               <p>1</p>
            </div>
            <div className='col-span-3'>
               <p>2</p>
            </div>
            <div className='col-span-3'>
               <p>3</p>
            </div>
            <div className='col-span-3'>
               <p>4</p>
            </div>
            <div className='col-span-8 row-span-2'>
               <p>5</p>
            </div>
            <div className='col-span-4 row-span-2'>
               <p>6</p>
            </div>
            <div className='col-span-4 row-span-2'>
               <p>7</p>
            </div>
            <div className='col-span-4 row-span-2'>
               <p>8</p>
            </div>
            <div className='col-span-4 row-span-2'>
               <p>9</p>
            </div>
         </main>
      </>
   )
}

export default Dashboard
