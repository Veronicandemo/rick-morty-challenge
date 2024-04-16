import React from 'react'
import { SIDEBAR_ITEMS } from './constants'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='bg-[#01AFCA] h-28 text-white'>
    <nav>
        <ul className='flex justify-evenly  text-white'>
            {SIDEBAR_ITEMS.map(item => (
                <li key={item.title}> {/* Adding a unique key for each list item */}
                    <Link href={item.path} className='flex  flex-col '>
                    {item.icon} 

                        <p className='text-2xl font-semibold'>{item.title}</p> 
                    </Link> 
                </li>
            ))}
        </ul>
    </nav>
</div>
  )
}

export default NavBar