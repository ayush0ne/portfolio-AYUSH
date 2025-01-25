import React , { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Power1 } from 'gsap'
function Navbar() {

  const currentScrollY = window.scrollY;
  let lastScrollY = window.scrollY;
  const nav = useRef();


  window.onscroll = () => {
      if (window.scrollY > 80) {
          nav?.current?.classList.add('nav-active');
      } else {
          nav?.current?.classList.remove('nav-active');
      }
  };

  return (
     <div className='w-full flex justify-center items-center'>
                    <nav ref={nav}  className='flex px-3 w-full lg:w-[64rem] pt-[5rem] shadow-2xl navbar-short z-[99] fixed top-0  items-center justify-between  '>
    
                        <a className='text-[rgb(255,255,255)] text-[2rem] logoNav' href="/">आ<span className="accent">0.</span></a>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li className='text-[#cecece] font-medium text-[1.1rem]  navLinks'>
                            <a className='cursor-pointer'
                            onClick={() => document.querySelector('.about')?.scrollIntoView({
                                    behavior: "smooth",  
                                })}
                             >About me</a>
    
                             </li>
                            <li className='text-[#cecece] font-medium text-[1.1rem]  navLinks'><Link to="/terminal">Terminal</Link></li>
                        </ul>
    
                    </nav>
                </div>)
}

export default Navbar