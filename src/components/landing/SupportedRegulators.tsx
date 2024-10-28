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

const SupportedRegulators = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
    return (
        <div ref={refEl} className={`section-inner-shadow flex flex-col items-center w-full gap-7 py-[61px] transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
            <div className='custom-text-gradient poppins-semibold text-[32px] leading-[42px] lg:leading-[66px] text-center px-10'>Supported Regulators</div>
            <div className='flex items-center justify-center flex-wrap'>
                <div className='relative mx-1 sm:mx-4 lg:mx-[48px] h-20'>
                    <Image src={Regulator1} alt='regulator-1' className='object-cover h-full w-auto' />
                </div>
                <div className='relative mx-1 sm:mx-4 lg:mx-[48px] h-20'>
                    <Image src={Regulator2} alt='regulator-2' className='object-cover h-full w-auto' />
                </div>
                <div className='relative mx-1 sm:mx-4 lg:mx-[48px] h-20'>
                    <Image src={Regulator3} alt='regulator-3' className='object-cover h-full w-auto' />
                </div>
                <div className='relative mx-1 sm:mx-4 lg:mx-[48px] h-20'>
                    <Image src={Regulator4} alt='regulator-4' className='object-cover h-full w-auto' />
                </div>
                <div className='hidden xl:block'><br/></div>
                <div className='relative mx-1 sm:mx-4 lg:mx-[30px] h-20'>
                    <Image src={Regulator5} alt='regulator-5' className='object-cover h-full w-auto' />
                </div>
                <div className='relative mx-1 sm:mx-4 lg:mx-[30px] h-20'>
                    <Image src={Regulator6} alt='regulator-6' className='object-cover h-full w-auto' />
                </div>
                <div className='relative mx-1 sm:mx-4 lg:mx-[30px] h-20'>
                    <Image src={Regulator7} alt='regulator-7' className='object-cover h-full w-auto' />
                </div>
            </div>
        </div>
    )
}

export default SupportedRegulators