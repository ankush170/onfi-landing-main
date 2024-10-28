import React,{useRef} from 'react';
import Image from 'next/image';
import Cert1 from '@/assets/landing/ISO.svg';
import Cert2 from '@/assets/landing/SOC.svg';

import { useIsVisible } from './useIsVisible';

const Certifications = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
    return (
        <div ref={refEl} className={`section-inner-shadow flex flex-wrap items-center justify-center w-full gap-7 py-[61px] transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
            <div className='custom-text-gradient poppins-regular text-[21px] text-center px-6'>OnFinance is SOC II and ISO 27001 Certified.<span className='hidden sm:inline'><br/></span></div>
            <div className='flex items-center justify-center flex-wrap px-4'>
                <div className='relative mx-2 sm:mx-8 lg:mx-[48px] h-16 my-3'> {/* Increased height */}
                    <Image src={Cert1} alt='cert-1' className='object-cover grayscale h-full w-auto' />
                </div>
                <div className='relative mx-2 sm:mx-8 lg:mx-[48px] h-20 my-3'> {/* Increased height */}
                    <Image src={Cert2} alt='cert-2' className='object-cover grayscale h-full w-auto' />
                </div>
            </div>
        </div>
    )
}

export default Certifications
