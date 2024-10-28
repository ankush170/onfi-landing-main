import React,{useRef} from 'react'
import { useIsVisible } from './useIsVisible';
import Image,{StaticImageData} from 'next/image'
import IconLibrary from '@/assets/icons/icon-library.svg';
import IconAssignmentAdd from '@/assets/icons/icon-assignment-add.svg';
import IconCompliance from '@/assets/icons/icon-compliance.svg';

import AutomateImg from '@/assets/landing/AutomateSectionImg.png'

interface AutomateCardsProps {
  icon: StaticImageData,
  title: string
  description: string;
}

const uiData:AutomateCardsProps[] = [
  {
    title: 'Versioned Library',
    description: 'Track changes across multiple\n amendments at a regulation level with\n semantically linked master circulars.',
    icon: IconLibrary,
  },
  {
    title: 'Auto Assignment',
    description: 'Automatically assign tasks with manner\n of compliance to relevant people in the\n business teams.',
    icon: IconAssignmentAdd,
  },
  {
    title: 'Compliance Forge',
    description: 'Allow business teams to edit Generative\n AI powered evidence collection, reporting\n and monitoring pipelines.',
    icon: IconCompliance,
  },
  {
    title: '1 click Audit MIS',
    description: 'Be instantly audit ready by exporting\n custom MIS PDFs based on audit scope,\n live compliance status and tagged\n evidence repository.',
    icon: IconCompliance,
  }
]

const AutomateCards:React.FC<AutomateCardsProps> = ({icon,title,description}) => {
  return (
    <div className='bg-[#ecf9ef] w-[22rem] rounded-xl p-6 flex flex-col gap-4'>
      <div className='flex items-center gap-[14px]'>
        <div className='w-12 h-12 rounded-[10px] btn-gradient p-2.5'>
          <div className='relative w-full h-full'>
            <Image src={icon} alt='icon' className='object-cover' />
          </div>
        </div>
        <div className='poppins-semibold text-[21px] text-[#272727]'>{title}</div>
      </div>
      <div className='poppins-regular text-base text-[#272727] whitespace-pre-line' >{description}</div>
    </div>
  )
}

const AutomateFinance = () => {
  const refEl = useRef(null);
  const isVisible = useIsVisible(refEl);
  return (
    <div ref={refEl} className={`section-inner-shadow flex flex-col items-center w-full gap-16 py-20 transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
        <div className='poppins-semibold text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[64px] px-6 sm:px-10 custom-text-gradient text-center lg:leading-[84px]'>
            Automate Financial Compliance<span className='hidden xl:inline'><br/></span> with NeoGPT ComplianceOS AI Agent
        </div>
        <div className='flex items-center w-full justify-center gap-16 px-10'>
            <div className='flex flex-row flex-wrap items-center justify-center xl:flex-col gap-8'>
              {uiData.map((item:AutomateCardsProps,idx:number)=>
                <AutomateCards title={item.title} description={item.description} icon={item.icon} key={idx} />
              )}
            </div>
            <div className='relative w-[60%] hidden xl:block'>
              <Image src={AutomateImg} alt='automate-img' className='object-cover' />
            </div>
        </div>
    </div>
  )
}

export default AutomateFinance