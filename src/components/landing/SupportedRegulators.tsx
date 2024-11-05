import React, { useRef } from 'react';
import { useIsVisible } from './useIsVisible';
import Image from 'next/image';
import Regulator1 from '@/assets/landing/regulator1.png';
import Regulator2 from '@/assets/landing/regulator2.png';
import Regulator3 from '@/assets/landing/regulator3.png';
import Regulator4 from '@/assets/landing/regulator4.png';
import Regulator5 from '@/assets/landing/regulator5.png';
import Regulator6 from '@/assets/landing/regulator6.png';
import Regulator7 from '@/assets/landing/regulator7.png';
import Regulator8 from '@/assets/landing/regulator8.png';

const SupportedRegulators = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
    return (
        <div ref={refEl} className={`section-inner-shadow flex flex-col items-center w-full gap-5 sm:gap-7 py-10 sm:py-[61px] transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
            <div className='custom-text-gradient poppins-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[42px] lg:leading-[66px] text-center px-4 sm:px-10'>
                Supported Regulators and Governing Bodies
            </div>
            
            <div className='flex flex-col items-center justify-center max-w-[1400px] gap-y-8 sm:gap-y-12 px-4 sm:px-6'>
                {/* First Row - Featured Regulators */}
                <div className='flex items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16'>
                    <div className='relative mx-1 sm:mx-2 h-16 sm:h-20 md:h-24 lg:h-32 transition-transform hover:scale-105 duration-300'>
                        <Image 
                            src={Regulator7} 
                            alt='regulator-7' 
                            className='object-contain h-full w-auto'
                            priority 
                        />
                    </div>
                    <div className='relative mx-1 sm:mx-2 h-16 sm:h-20 md:h-24 lg:h-32 transition-transform hover:scale-105 duration-300'>
                        <Image 
                            src={Regulator8} 
                            alt='regulator-8' 
                            className='object-contain h-full w-auto'
                            priority 
                        />
                    </div>
                </div>

                {/* Second Row - Other Regulators */}
                <div className='grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-x-8 md:gap-x-12'>
                    {[Regulator1, Regulator2, Regulator3, Regulator4, Regulator5, Regulator6].map((regulator, index) => (
                        <div 
                            key={index} 
                            className='relative flex justify-center h-8 sm:h-10 md:h-12 lg:h-16'
                        >
                            <Image 
                                src={regulator} 
                                alt={`regulator-${index + 1}`} 
                                className='object-contain h-full w-auto'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SupportedRegulators