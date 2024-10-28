import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'
import HamburgerIcon from '@/assets/icons/hamburger-icon.svg' 
import XIcon from '@/assets/icons/x-icon.svg'
interface NavProps {
  openNav:boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav:React.FC<NavProps> = ({openNav,setOpenNav}) => {
  return (
    <nav className='flex absolute items-center justify-between my-2 lg:my-8 px-4 py-3 bg-[#F9F8EE] rounded-[21px] border border-[#E6E6E6] nav-shadow w-[95%] lg:w-[80%]'>
        <div className='relative'>
            <Image src={Logo} alt='logo' className='object-cover' />
        </div>
        <div className='hidden lg:flex items-center justify-center gap-7 text-base poppins-regular text-[#10A68C]'>
            <a href="#neogpt">Why NeoGPT?</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
        </div>
          {/* <a href='mailto:info@onfinance.in?cc=team@onfinance.in' className='btn-gradient hidden lg:block rounded-[4.5px] text-[13px] text-white exo-2-bold px-[22px] py-[9px]'>Get free trial</a> */}
          <div className='block lg:hidden relative w-8 h-8'>
            {openNav ? 
              <Image onClick={(e)=>{
                e.stopPropagation();
                setOpenNav(false);
              }} src={XIcon} alt='close' className='object-cover' fill /> :
              <Image onClick={(e)=>{
                e.stopPropagation();
                setOpenNav(true);
              }} src={HamburgerIcon} alt='hamburger' className='object-cover' fill />
            }
            {openNav && 
              <div onClick={(e)=>e.stopPropagation()} className='z-[100] absolute right-0 top-10 rounded-xl custom-drop-shadow gap-4 whitespace-pre flex flex-col p-6 bg-[#FFFFFF] text-base poppins-regular text-[#272727]'>
                <a href="#neogpt">Why NeoGPT?</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#blogs">Blogs</a>
                <a href="#contact">Contact</a>
                {/* <a href='#' className='btn-gradient rounded-[4.5px] text-[13px] text-white exo-2-bold px-[22px] py-[9px]'>Get free trial</a> */}
              </div>
            }
          </div>
    </nav>
  )
}

export default Nav