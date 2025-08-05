import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end  ' >

        <h1 className=' text-2xl '>Welcome <br /><span className='text-3xl text-shadow-sky-500  '>Sandesh</span> </h1>
        <button className='bg-red-500 text-white px-5 py-2 rounded-2xl text-lf font-medium ' >Log Out</button>

      
    </div>
  )
} 

export default Header
