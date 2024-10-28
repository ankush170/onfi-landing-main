import React,{useRef} from 'react';
import { useIsVisible } from './useIsVisible';
import Image from 'next/image';
import BackedBy1 from '@/assets/landing/BackedBy1.png';
import BackedBy2 from '@/assets/landing/BackedBy2.png';
import BackedBy3 from '@/assets/landing/BackedBy3.png';
import BackedBy4 from '@/assets/landing/BackedBy4.png';
import BackedBy5 from '@/assets/landing/BackedBy5.png';
import BackedBy6 from '@/assets/landing/BackedBy6.png';
import BackedBy7 from '@/assets/landing/BackedBy7.png';
import BackedBy8 from '@/assets/landing/BackedBy8.png';

const BackedBy = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
    return (
    <div ref={refEl} className={`section-inner-shadow flex flex-col items-center w-full gap-7 py-[61px] transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
        <div className='custom-text-gradient poppins-semibold text-[32px] leading-[42px] lg:leading-[66px] text-center px-10'>Backed by the best in the Industry</div>
        <div className='flex items-center justify-center flex-wrap'>
            <div className='relative mx-1 sm:mx-4 lg:mx-[48px] h-[45px]'>
                <Image src={BackedBy1} alt='backed-by-1' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-1 sm:mx-4 lg:mx-[48px] h-20'>
                <Image src={BackedBy2} alt='backed-by-2' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-1 sm:mx-4 lg:mx-[48px] h-20'>
                <Image src={BackedBy3} alt='backed-by-3' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-1 sm:mx-4 lg:mx-[48px] h-[54px]'>
                <Image src={BackedBy4} alt='backed-by-4' className='object-cover h-full w-auto' />
            </div>
            <div className='hidden xl:block'><br/></div>
            <div className='relative mx-1 sm:mx-4 lg:mx-[30px] h-11'>
                <Image src={BackedBy5} alt='backed-by-5' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-1 sm:mx-4 lg:mx-[30px] h-20'>
                <Image src={BackedBy6} alt='backed-by-6' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-1 sm:mx-4 lg:mx-[30px] h-[67px]'>
                <Image src={BackedBy7} alt='backed-by-7' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-1 sm:mx-4 lg:mx-[30px] h-[50px]'>
                <Image src={BackedBy8} alt='backed-by-8' className='object-cover h-full w-auto' />
            </div>
        </div>
    </div>
  )
}

export default BackedBy