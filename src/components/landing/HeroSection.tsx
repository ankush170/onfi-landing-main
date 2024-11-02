import React from 'react'
import Image from 'next/image'
import HeroImage from '@/assets/landing/HeroImage.svg'
import HERO2 from '@/assets/landing/HERO2.svg'

const HeroSection = () => {
  return (
    <div className='hero-background justify-between lg:justify-start w-full flex flex-col items-center pt-32 lg:pt-40 pb-20 lg:pb-4'>
      <div className='flex flex-col items-center'>
        <div className='space-grotesk-bold text-[32px] leading-10 sm:text-[36px] sm:leading-[44px] md:text-[42px] md:leading-[50px] lg:text-[52px] lg:leading-[62px] mb-10 md:mb-[13px] custom-text-gradient text-center px-6'>
          Explainable AI Agents for financial services
        </div>
        <div className='text-base md:text-lg dm-sans-regular text-[#505050] mb-8 md:mb-[26px] px-10 text-center'>
          Get verifiable and controllable responses from LLMs on financial documents like regulatory circulars.
        </div>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
          <a 
            href='https://www.loom.com/share/8c89b40783c8416a9bbf3cdd97719b9a?sid=90b47d7f-f2ea-457d-8d25-cd284dbf036a' 
            target="_blank" 
            className='btn-gradient rounded-[4.5px] text-base text-white exo-2-bold px-[52px] py-3 md:py-4 hover:opacity-90 transition-opacity'
          >
            Watch Demo
          </a>
          <a 
            href='https://calendly.com/anujonfinance' 
            target="_blank"
            className='border-2 border-[#6355D8] rounded-[4.5px] text-base text-[#6355D8] exo-2-bold px-[52px] py-3 md:py-4 hover:bg-[#6355D8] hover:text-white transition-all duration-300'
          >
            Schedule Demo
          </a>
        </div>
      </div>
      <div className='relative hidden md:block w-[99%] md:w-[80%] lg:w-[65%] h-fit mt-8 md:mt-12 mr-12 ml-[-40px]'>
        <Image src={HERO2} alt='hero-image' className='object-cover' />
      </div>
    </div>
  )
}

export default HeroSection
