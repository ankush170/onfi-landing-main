import React,{useRef} from 'react'
import { useIsVisible } from './useIsVisible';
import Image,{StaticImageData} from 'next/image'
import YourStoryImg from '@/assets/landing/YourStory.png';
import CNBCTVImg from '@/assets/landing/CNBCTV.png';
import MicrosoftImg from '@/assets/landing/Microsoft.png';
import TheFinExpImg from '@/assets/landing/TheFinExp.png';
import ForbesImg from '@/assets/landing/Forbes.png';


interface ArticleCardProps {
    title: string;
    description: string;
    imgSrc: StaticImageData;
    link: string;
}

const uiData:ArticleCardProps[] = [
    {
        title:"Your Story",
        description:"OnFinance.ai raises\n $1.05m to productionize\n their AI agents for BFSI",
        imgSrc:YourStoryImg,
        link:"#"
    },
    {
        title:"CNBC TV18",
        description:"The Srivastava duo's\n OnFinance AI has\n introduced NeoGPT,\n Vertical LLM for BFSI.",
        imgSrc:CNBCTVImg,
        link:"#"
    },
    {
        title:"Microsoft",
        description:'Recognized by Microsoft\n as a distinguished "AI First\n Mover" across India &\n SEA.',
        imgSrc:MicrosoftImg,
        link:"#"
    },
    {
        title:"The Financial Express",
        description:"BFSI can now convert their\n unstructured data into AI\n Agents with NeoGPT",
        imgSrc:TheFinExpImg,
        link:"#"
    },
    {
        title:"Forbes",
        description:"Featured in prestigious\n Forbes Asia's 30 under 30:\n 2024 class of emerging\n leaders.",
        imgSrc:ForbesImg,
        link:"#"
    }
]

const ArticleCard:React.FC<ArticleCardProps> = ({title,description,link,imgSrc}) => {
    return (
        <a href={link} target='_blank' className='flex flex-col shrink-0 w-[210x]'>
            <div className='w-[210x] h-[210px] p-[20px] rounded-2xl flex justify-center items-center bg-[#F4F1DE]'>
                <Image src={imgSrc} alt='article-img' width={170} />
            </div>
            <div className='mt-4 mb-1 poppins-medium text-wrap whitespace-pre-line text-[21px] text-[#1A191E]'>{title}</div>
            <div className='poppins-regular text-base text-wrap whitespace-pre-line text-[#1A191E80]'>{description}</div>
        </a>
    )
}

const MediaArticles = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
  return (
    <div ref={refEl} className={`section-inner-shadow flex flex-col items-center w-full pt-[50px] pb-20 transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`} >
        <div className='poppins-semibold text-[32px] custom-text-gradient text-center leading-[66px]'>
            Media Articles
        </div>
        <div className='poppins-regular text-[21px] text-center text-[#2F2F2F] mb-16 px-10' >Featured in 15+ reputable news sources</div>
        <div className='w-[85%] mx-auto articles-container overflow-hidden hide-scrollbar'>
        <div className='flex gap-[50px] px-[25px] articles-animation'>
            {uiData.map((item:ArticleCardProps,idx:number)=>
                <ArticleCard title={item.title} description={item.description} imgSrc={item.imgSrc} link={item.link} key={idx} />
            )}
            <div className='flex gap-[50px] hide-extra-articles'>
            {uiData.map((item:ArticleCardProps,idx:number)=>
                <ArticleCard title={item.title} description={item.description} imgSrc={item.imgSrc} link={item.link} key={idx} />
            )}
            </div>
        </div>
        </div>
    </div>
  )
}

export default MediaArticles