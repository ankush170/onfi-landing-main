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
        <div ref={refEl} className={`section-inner-shadow flex flex-col items-center w-full gap-7 py-[61px] transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
            <div className='custom-text-gradient poppins-semibold text-[32px] leading-[42px] lg:leading-[66px] text-center px-10'>Supported Regulators and Governing Bodies</div>
            <div className='flex flex-col items-center justify-center max-w-[1400px] gap-y-12'>
                {/* First Row - Featured Regulators */}
                <div className='flex items-center justify-center gap-x-6 sm:gap-x-12 lg:gap-x-16'>
                    <div className='relative mx-2 h-20 sm:h-28 lg:h-32 transition-transform hover:scale-105 duration-300'>
                        <Image src={Regulator7} alt='regulator-7' className='object-contain h-full w-auto' />
                    </div>
                    <div className='relative mx-2 h-20 sm:h-28 lg:h-32 transition-transform hover:scale-105 duration-300'>
                        <Image src={Regulator8} alt='regulator-8' className='object-contain h-full w-auto' />
                    </div>
                </div>

                {/* Second Row - Other Regulators */}
                <div className='flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-8 lg:gap-x-12 gap-y-6'>
                    <div className='relative mx-1 sm:mx-2 h-12 sm:h-16'>
                        <Image src={Regulator1} alt='regulator-1' className='object-contain h-full w-auto' />
                    </div>
                    <div className='relative mx-1 sm:mx-2 h-10 sm:h-16'>
                        <Image src={Regulator2} alt='regulator-2' className='object-contain h-full w-auto' />
                    </div>
                    <div className='relative mx-1 sm:mx-2 h-10 sm:h-16'>
                        <Image src={Regulator3} alt='regulator-3' className='object-contain h-full w-auto' />
                    </div>
                    <div className='relative mx-1 sm:mx-2 h-13 sm:h-16'>
                        <Image src={Regulator4} alt='regulator-4' className='object-contain h-full w-auto' />
                    </div>
                    <div className='relative mx-1 sm:mx-2 h-12 sm:h-16'>
                        <Image src={Regulator5} alt='regulator-5' className='object-contain h-full w-auto' />
                    </div>
                    <div className='relative mx-1 sm:mx-2 h-12 sm:h-16'>
                        <Image src={Regulator6} alt='regulator-6' className='object-contain h-full w-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportedRegulators