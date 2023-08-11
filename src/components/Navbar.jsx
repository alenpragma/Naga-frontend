import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[20px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-8'>
          <a href="https://my.nagatrade.info/login">Login</a>
        </li>
        <li className='font-poppins font-normal cursor-pointer text-[16px] text-white'>
          <a href="https://my.nagatrade.info/register">Register</a>
        </li>
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
            ))}
           <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 mt-3'>
              <a href="https://my.nagatrade.info/login?_ga=2.122996226.846724718.1691733495-1123424949.1689999412&_gl=1*dcx1ru*_ga*MTEyMzQyNDk0OS4xNjg5OTk5NDEy*_ga_NDS0GXZLWB*MTY5MTczMzQ5NS4xNC4xLjE2OTE3MzQ1MDQuMC4wLjA.*_ga_36F2K585WP*MTY5MTczMzQ5NS4xNC4xLjE2OTE3MzQ1MDQuMC4wLjA.">Login</a>
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 mt-3'>
              <a href="https://my.nagatrade.info/register?_ga=2.136634681.846724718.1691733495-1123424949.1689999412&_gl=1*gfx6m6*_ga*MTEyMzQyNDk0OS4xNjg5OTk5NDEy*_ga_NDS0GXZLWB*MTY5MTczMzQ5NS4xNC4xLjE2OTE3MzQ1MDQuMC4wLjA.*_ga_36F2K585WP*MTY5MTczMzQ5NS4xNC4xLjE2OTE3MzQ1MDQuMC4wLjA.">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
