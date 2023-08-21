// import React, { useState } from 'react'
// import { close, logo, menu } from '../assets'

// import AnotherRoute from '../shared/AnotherRoute'
// import HomeButton from '../shared/HomeButton'
// import { navLinks } from '../constants'
// import { Link } from 'react-scroll'

// const Navbar = () => {

//   const [toggle, setToggle] = useState(false)

//   return (
//     <nav className='w-full flex py-6 max-w-7xl justify-between items-center navbar absolute'>
//       <img src={logo} alt='hoobank' className='w-[124px] h-[20px]' />
//       <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
//         <HomeButton />
//         {navLinks.map((nav, i) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
//           >
//             <Link to={`${nav.id}`} smooth={true} duration={500}>
//               {nav.title}
//             </Link>
//           </li>
//         ))}
//         <AnotherRoute />

//       </ul>
//       <div className='sm:hidden flex flex-1 justify-end items-center'>
//         <img
//           src={toggle ? close : menu}
//           alt='menu'
//           className='w-[28px] h-[28px] object-contain'
//           onClick={() => setToggle((previous) => !previous)}
//         />
//         <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
//           <ul className='list-none flex flex-col justify-end items-center flex-1'>
//             <HomeButton />
//             {navLinks.map((nav, i) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
//               >
//                 <a href={`#${nav.id}`}>
//                   {nav.title}
//                 </a>
//               </li>
//             ))}
//             <AnotherRoute />
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { Link } from 'react-scroll'
import HomeButton from '../shared/HomeButton'
import AboutUsRoute from '../shared/AboutUsRoute'
import Login from '../shared/Login'
import Register from '../shared/Register'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full max-w-7xl flex py-6 justify-between items-center navbar absolute'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[20px]' />
      <ul className='list-none hidden lg:flex justify-end items-center w-full'>
        <HomeButton />
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[14px] ${i === navLinks.length - 1 ? 'mr-6' : 'mr-6'} text-white mr-10`}
          >
            <Link to={`${nav.id}`} >
              {nav.title}
            </Link>
          </li>
        ))}
        <AboutUsRoute />
        <Login />
        <Register />
      </ul>
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            <HomeButton />
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
                <Link to={`${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
            <AboutUsRoute />
            <Login />
            <Register />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
