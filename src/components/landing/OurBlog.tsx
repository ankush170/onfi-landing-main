import React,{useRef} from 'react'
import { useIsVisible } from './useIsVisible'
import Image,{StaticImageData} from 'next/image'
import Blog1Img from "@/assets/landing/Blog1.png"
import Blog2Img from "@/assets/landing/Blog2.png"
import Blog3Img from "@/assets/landing/Blog3.png"

import ArrowRightIcon from '@/assets/icons/right-arrow.svg'

interface BlogCardProps {
    title:string;
    description:string;
    link:string;
    tags:string[];
    imgSrc:StaticImageData
}

const uiData:BlogCardProps[] = [
    {
        title:'RAG v2 at Onfinance AI',
        description:'Learn how we are migrating to more accurate RAG systems powered by low entropy fine-tuned LLMs for finance',
        link:'https://www.linkedin.com/posts/priyesh-srivastava_hi-all-as-we-at-onfinance-ai-are-migrating-activity-7245296013446422528-fQAU?utm_source=share&utm_medium=member_desktop',
        tags:[],
        imgSrc:Blog1Img,
    },
    {
        title:'ComplianceOS Announcement',
        description:'Visualize a completely disruptive compliance journey powered by NeoGPT ComplianceOS financial agent',
        link:'https://www.youtube.com/watch?v=UHBxLM8Ghvo&feature=youtu.be',
        tags:[],
        imgSrc:Blog2Img,
    },
    {
        title:'NeoGPT Equity Analyst',
        description:'Visualize the latest avatar of our equity analyst assistant as it raises the bar for what it means to be informed in the financial markets',
        link:'https://www.linkedin.com/posts/onfinanceofficial_ai-neogpt-userexperience-activity-7240002485145214976-9WHv?utm_source=share&utm_medium=member_desktop',
        tags:[],
        imgSrc:Blog3Img,
    }
]


const BlogCard:React.FC<BlogCardProps> = ({title,description,link,tags,imgSrc}) => {
    return (
        <a href={link} target='_blank' className='flex flex-col w-[280px] md:w-[380px] shrink-0'>
            <div className='relative overflow-hidden rounded-2xl w-full h-[280px] lg:h-[380px]'>
                <Image src={imgSrc} alt='blog-img' className='object-cover' fill />
            </div>
            <div className='poppins-semibold text-[21px] text-[#272727] text-wrap lg:whitespace-pre-line mt-6 mb-2'>{title}</div>
            <div className='poppins-regular text-[16px] text-[#272727] text-wrap lg:whitespace-pre-line mb-6'>{description}</div>
            <div className='flex gap-2'>
            {tags.map((tag:string,idx:number)=>
                <div key={idx} className='bg-[#10A68C8F] rounded-[4px] text-[#272727] poppins-medium text-sm px-2.5 py-1'>{tag}</div>
            )}
            </div>
        </a>
    )
}


const OurBlog = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
  return (
    <div ref={refEl} className={`section-inner-shadow flex flex-col items-center w-full pt-[50px] pb-[100px] pl-10 transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`} >
        <h1 className='poppins-semibold text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[64px] px-8 sm:px-10 custom-text-gradient text-center lg:leading-[84px] mb-8 pr-10'>
        Our blog
        </h1>
        <div className='flex gap-4 md:gap-8 mb-8 overflow-x-scroll hide-scrollbar w-full xl:justify-center pb-10 xl:pb-0 pr-10'>
            {uiData.map((item:BlogCardProps,idx:number)=>
                <BlogCard title={item.title} description={item.description} link={item.link} imgSrc={item.imgSrc} tags={item.tags} key={idx} />
            )}
        </div>
        <a href='https://www.linkedin.com/company/onfinanceofficial/posts/?feedView=all' target='_blank' className='flex items-center ml-auto mr-auto xl:mr-40'>
            <div className='text-[21px] text-[#5BB5A2] poppins-semibold'>All Articles</div>
            <div className='relative w-6 h-6'>
                <Image src={ArrowRightIcon} alt='right-arrow' className='object-cover' fill />
            </div>
        </a>
    </div>
  )
}

export default OurBlog