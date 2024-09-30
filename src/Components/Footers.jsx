import React from 'react'
import { NavLink } from 'react-router-dom'

const Footers = () => {
  return (
    <>
      <div className='bg-blue-gray-100'>
        <div className='flex justify-center text-2xl'>
          Cartoon Here
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-row'>
            <p className='ml-4 mr-4 hover:font-bold'><NavLink to="">Contact Us</NavLink></p>
            <p className='ml-4 mr-4 hover:font-bold'><NavLink>About Us</NavLink></p>
            <p className='ml-4 mr-4 hover:font-bold'><NavLink>Sitemap</NavLink></p>
            <p className='ml-4 mr-4 hover:font-bold'><NavLink>More</NavLink></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footers