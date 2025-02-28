import React from 'react'
import LogoDesktop from "../../images/Logo-Desktop.jpg"
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="flex h-[150px] sm:h-[100px] flex-row w-full items-center justify-center border-t-[1px] sm:border-t-0 border-blue-950">
            <div className='hidden flex-1 sm:flex items-center justify-center text-nowrap ml-2 sm:ml-4 sm:font-bold sm:text-xl'>
                <img src={LogoDesktop} className='h-[50px] sm:h-[50px] md:h-[75px] w-auto' />
            </div>
            <div className='flex flex-col flex-1 flex-grow items-start space-y-2 ml-2'>
                <a className='flex flex-row w-36 h-10 rounded-lg text-white bg-blue-950 text-center content-center items-center justify-evenly' href='tel:407-927-1480'>
                    <FaPhoneAlt size={15} /> 407-927-1480
                </a>
                <a className='flex flex-row w-[230px] sm:w-[260px] px-2 h-10 rounded-lg text-white bg-blue-950 text-center content-center items-center justify-evenly sm:text-base text-sm' href='mailto:Andy@resilienceENG.com'>
                    <MdEmail size={15} /> Andy@resilienceENG.com
                </a>
            </div>
            <div className='flex flex-col sm:flex-row flex-1 flex-shrink w-full h-full items-center justify-evenly'>
                <a target='_blank' href='https://www.linkedin.com/company/resilience-engineering-construction-management/'>
                    <FaLinkedin size={30} className='text-blue-950 hover:cursor-pointer' />
                </a>
                <a className='w-32 h-10 rounded-lg underline sm:no-underline sm:bg-gray-300 text-center content-center' target='_blank' href='https://www.termsfeed.com/live/2a5b3548-ddfa-44bd-9dd3-6738cdf181f0'>Privacy <br className='sm:hidden'/> Policy</a>
            </div>

        </footer>
    )
}
