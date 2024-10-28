import React,{useRef} from 'react';
import { useIsVisible } from './useIsVisible';
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'

import MailIcon from '@/assets/icons/email-icon.svg';
import PhoneIcon from '@/assets/icons/call-icon.svg';

import InstaIcon from '@/assets/icons/instagram-icon.svg';
import TwitterIcon from '@/assets/icons/twitter-icon.svg';
import YoutubeIcon from '@/assets/icons/youtube-icon.svg';
import LinkedinIcon from '@/assets/icons/linkedin-icon.svg';



const Footer = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
  return (
    <footer ref={refEl} className={`bg-[#1B1B1B] w-full px-[5%] flex flex-col items-center transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`} >
        <div className='flex my-[75px] justify-between gap-10 w-full px-10 md:px-20 flex-wrap'>

            <div className='flex flex-col'>
                <div className='relative'>
                    <Image src={Logo} alt='logo' className='object-cover' />
                </div>
                <div className='mt-8 mb-2 text-[#CFD3D799] poppins-regular text-base'>Write to us:</div>
                <div className='text-[#CFD3D7] poppins-regular text-base'>
                    <span className='poppins-semibold'>Mindweave Transformers Pvt. Ltd.</span><br/>
                    Reg Office: #677, 1st Floor, 27th main,<br/> 13th cross HSR L/0, Bangalore South,<br/> Bangalore - Karnataka, India<br/> 560102
                </div>
            </div>

            {/* <div className='flex gap-10 sm:gap-20 justify-between'>
                <div className='flex flex-col gap-5 poppins-medium text-base text-[#CFD3D7]'>
                    <div className='poppins-bold text-base text-[#10A68C] mb-[6px]'>Pages</div>
                    <a href="#" className=''>Neo GPT</a>
                    <a href="#" className=''>Features</a>
                    <a href="#" className=''>Pricing</a>
                    <a href="#" className=''>Contact</a>
                </div>
                <div className='flex flex-col gap-5 poppins-medium text-base text-[#CFD3D7]'>
                    <div className='poppins-bold text-base text-[#10A68C] mb-[6px]'>Solutions</div>
                    <a href="#" className=''>Research</a>
                    <a href="#" className=''>Sales Team</a>
                    <a href="#" className=''>Customer Success</a>
                </div>
            </div> */}
            <div className='flex flex-col gap-5'>
                <div className='poppins-bold text-base text-[#10A68C] mb-[6px]'>Connect with us</div>
                <div className='flex gap-10 items-center flex-wrap mb-6'>
                    <a href='#'className='flex items-center gap-4'>
                        <div className='relative w-6 h-6'>
                            <Image src={MailIcon} alt='icon' className='object-cover' fill />
                        </div>
                        <div className='text-base poppins-regular text-[#CFD3D7]'>info@onfinance.in</div>
                    </a>
                    <a href='#' className='flex items-center gap-4'>
                        <div className='relative w-6 h-6'>
                            <Image src={PhoneIcon} alt='icon' className='object-cover' fill />
                        </div>
                        <div className='text-base poppins-regular text-[#CFD3D7]'>+91 72330 89282</div>
                    </a>
                </div>
                <div className='flex gap-9 items-center'>
                    <a href='#' className='relative w-11 h-11'>
                        <Image src={InstaIcon} alt='icon' className='object-cover' fill />
                    </a>
                    <a href='#' className='relative w-11 h-11'>
                        <Image src={TwitterIcon} alt='icon' className='object-cover' fill />
                    </a>
                    <a href='#' className='relative w-11 h-11'>
                        <Image src={YoutubeIcon} alt='icon' className='object-cover' fill />
                    </a>
                    <a href='#' className='relative w-11 h-11'>
                        <Image src={LinkedinIcon} alt='icon' className='object-cover' fill />
                    </a>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center items-center border-t border-[#10A68C] pt-[25px] mb-[40px] poppins-regular text-base text-[#CFD3D7] text-center px-10'>© Copyright OnFInance 2023 -2024 | Privacy Policy | Terms and Conditions</div>

    </footer>
  )
}

export default Footer