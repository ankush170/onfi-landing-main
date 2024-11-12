import React, { useRef } from 'react';
import { useIsVisible } from './useIsVisible';
import Image from 'next/image';
import BackedBy1 from '@/assets/landing/BackedBy1.png';
import BackedBy2 from '@/assets/landing/BackedBy2.png';
import BackedBy3 from '@/assets/landing/BackedBy3.png';
import BackedBy4 from '@/assets/landing/BackedBy4.png';
import BackedBy5 from '@/assets/landing/BackedBy5.png';
import BackedBy6 from '@/assets/landing/BackedBy6.png';
import BackedBy8 from '@/assets/landing/BackedBy8.png';

const BackedBy = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
    return (
        <div ref={refEl} className={`section-inner-shadow flex flex-col items-center w-full gap-7 py-[61px] transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
            <div className='custom-text-gradient poppins-semibold text-[32px] leading-[42px] lg:leading-[66px] text-center px-10'>
                Backed by the best in the Industry
            </div>
            <div className='flex flex-wrap items-center justify-center max-w-[1400px] gap-x-12 gap-y-14 px-6'>
                <div className='flex items-center justify-center w-1/2 sm:w-1/3 lg:w-1/4'>
                    <Image src={BackedBy1} alt='backed-by-1' className='object-contain h-[60px] sm:h-[70px] lg:h-[80px] w-auto' />
                </div>
                <div className='flex items-center justify-center w-1/2 sm:w-1/3 lg:w-1/4'>
                    <Image src={BackedBy2} alt='backed-by-2' className='object-contain h-[90px] sm:h-[100px] lg:h-[120px] w-auto' />
                </div>
                <div className='flex items-center justify-center w-1/2 sm:w-1/3 lg:w-1/4'>
                    <Image src={BackedBy3} alt='backed-by-3' className='object-contain h-[90px] sm:h-[100px] lg:h-[120px] w-auto' />
                </div>
                <div className='flex items-center justify-center w-1/2 sm:w-1/3 lg:w-1/4'>
                    <Image src={BackedBy4} alt='backed-by-4' className='object-contain h-[70px] sm:h-[80px] lg:h-[90px] w-auto' />
                </div>
                <div className='flex items-center justify-center w-1/2 sm:w-1/3 lg:w-1/4'>
                    <Image src={BackedBy5} alt='backed-by-5' className='object-contain h-[50px] sm:h-[60px] lg:h-[70px] w-auto' />
                </div>
                <div className='flex items-center justify-center w-1/2 sm:w-1/3 lg:w-1/4'>
                    <Image src={BackedBy6} alt='backed-by-6' className='object-contain h-[90px] sm:h-[100px] lg:h-[120px] w-auto' />
                </div>
                <div className='flex items-center justify-center w-1/2 sm:w-1/3 lg:w-1/4'>
                    <Image src={BackedBy8} alt='backed-by-8' className='object-contain h-[65px] sm:h-[75px] lg:h-[85px] w-auto' />
                </div>
            </div>
        </div>
    )
}

export default BackedBy