import React,{useState,useRef} from 'react'
import { useIsVisible } from './useIsVisible'
import Image from 'next/image'
import StarsIcon from '@/assets/icons/stars-icon.svg'
import CheckIcon from '@/assets/icons/check-icon.svg'

interface DeployUIData {
    title: string;
    useCase: string;
    pointsLarge: string[];
    pointsSmall: string[];
    link: string;
    toShowLarge:number;
    toShowSmall:number;
    cardNumber:number;
}

const uiData:DeployUIData[] = [
    {
        title: "FinDoc Plan",
        useCase: "Docs at tips",
        pointsLarge: [
            'OnFinance AI number guarantee',
            'Annual Reports, Earnings and BRSR for 1000 Indian listed companies',
            'Custom Report Generation Formats',
            'Excel extraction of charts',
            'SEBI Research Analyst Guardrails',
            'Fast processing for 10K and 10Q',
            'Supports Slides'
        ],
        pointsSmall: [
            'OnFinance AI number guarantee',
            'Excel extraction of charts',
            'SEBI Research Analyst Guardrails'
        ],
        link: 'mailto:info@onfinance.in?cc=team@onfinance.in',
        toShowLarge:7,
        toShowSmall:3,
        cardNumber:0,
    },
    {
        title: "Compliance360",
        useCase: "Most popular",
        pointsLarge: [
            'Regulation library with amendment history',
            'Auto assign compliance tasks based on bandwith and manner of compliance',
            'Allow business teams to drag-and-drop compliance workflows',
            'AI generated audit-ready MIS and PPT',
            '1-click organization chart import',
            'Setup email forwarding for private regulator communications',
            'Agentic search over entire knowledgebase'
        ],
        pointsSmall: [
            'Regulation library with amendment history',
            'AI generated audit-ready MIS and PPT',
            'Allow business teams to drag-and-drop compliance workflows'
        ],
        link: 'mailto:info@onfinance.in?cc=team@onfinance.in',
        toShowLarge:7,
        toShowSmall:3,
        cardNumber:1,
    },
    {
        title: "CreditRM Plan",
        useCase: "Most used by Credit",
        pointsLarge: [
            'Generate credit reports for 1000+ listed and unlisted companies',
            'Get 40+ SME persona templates',
            'Custom reporting format',
            'Upto 5 document sourcing automations',
            'Custom logic for ability and willingness to pay',
            'AI commentary with reasoning',
            'Extract intermediate excel'
        ],
        pointsSmall: [
            'Get 40+ SME persona templates',
            'Custom reporting format',
            'Upto 5 document sourcing automations'
        ],
        link: 'mailto:info@onfinance.in?cc=team@onfinance.in',
        toShowLarge:7,
        toShowSmall:3,
        cardNumber:2,
    }
]

const cardOrders = [[2,0,1],[0,1,2],[1,2,0]]

interface DeployCardProps {
    data:DeployUIData,
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const DeployCenter:React.FC<DeployCardProps> = ({data}) => {
    return (
        <div className='flex w-[34rem] flex-col rounded-xl border-4 shrink-0 border-[#10A68C] overflow-hidden custom-drop-shadow'>
            <div className='flex w-full gap-2 poppins-semibold bg-[#10A68C] text-[#FFFFFF] text-2xl py-5 justify-center items-center'>
                <div>{data.useCase}</div>
                <div className='relative w-6 h-6'>
                    <Image src={StarsIcon} alt='icon' className='object-cover' fill />
                </div>
            </div>
            <div className='w-full flex justify-center items-center poppins-semibold text-[#323232] text-[40px] leading-[60px] py-8 px-10 bg-[#FFFFFF] border border-[#0000001A]'>
                {data.title}
            </div>
            <div className='bg-[#F5F5F5] p-10 flex flex-col justify-center gap-4'>
                {data.pointsLarge.map((point:string,idx:number)=>{
                    if(idx<data.toShowLarge){
                        return (
                            <div key={idx} className='flex gap-4 items-center'>
                                <div className='relative w-8 h-8 shrink-0'>
                                    <Image src={CheckIcon} alt='icon' className='object-cover' fill />
                                </div>
                                <div className='text-[#636363] text-wrap poppins-regular text-[20px]'>{point}</div>
                            </div>
                        )
                    }else{
                        return <></>;
                    }
                })}
                <a href={data.link} className='w-full mt-6 rounded-lg text-center text-[#FFFFFF] bg-[#10A68C] text-[20px] poppins-medium py-4'>Deploy Now</a>
            </div>
        </div>
    )
}

const DeploySide:React.FC<DeployCardProps> = ({data,setCurrent}) => {
    return (
        <div onClick={()=>setCurrent(data.cardNumber)} className='flex flex-col shrink-0 rounded-l-xl overflow-hidden custom-drop-shadow w-[22rem]'>
            <div className='w-full flex justify-center items-center poppins-medium text-[#323232] text-[32px] leading-[60px] py-8 px-10 bg-[rgb(255,255,255)] border border-[#0000001A]'>
                {data.title}
            </div>
            <div className='bg-[#F5F5F5] p-8 flex flex-col justify-center gap-4'>
                {data.pointsSmall.map((point:string,idx:number)=>{
                    if(idx<data.toShowSmall){
                        return (
                            <div key={idx} className='flex gap-4 items-center'>
                                <div className='relative w-8 h-8 shrink-0'>
                                    <Image src={CheckIcon} alt='icon' className='object-cover' fill />
                                </div>
                                <div className='text-[#636363] text-wrap poppins-regular text-[20px]'>{point}</div>
                            </div>
                        )
                    }else{
                        return <></>;
                    }
                })}
            </div>
        </div>
    )
}

const DeployedSecurely = () => {
    const [current,setCurrent] = useState<number>(1);
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
    return (
        <div ref={refEl} className={`section-inner-shadow flex flex-col items-center overflow-hidden w-full pb-0 pt-[91px] lg:pb-[91px] transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
            <h1 className='poppins-semibold text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[64px] px-8 sm:px-10 custom-text-gradient text-center lg:leading-[84px] mb-0 xl:mb-[70px]'>
                Deployed securely on your premises
            </h1>
            <div className='w-full flex h-[50rem] items-center justify-center -my-40  sm:-my-32 md:-my-20 lg:-my-10 xl:my-0 scale-[0.4] sm:scale-50 md:scale-[0.60] lg:scale-75 xl:scale-100'>
                <DeploySide data={uiData[cardOrders[current][0]]} setCurrent={setCurrent} />
                <DeployCenter data={uiData[cardOrders[current][1]]} setCurrent={setCurrent} />
                <DeploySide data={uiData[cardOrders[current][2]]} setCurrent={setCurrent} />
            </div>
        </div>
    )
}

export default DeployedSecurely;