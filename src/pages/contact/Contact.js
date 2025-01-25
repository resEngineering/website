import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";


export default function Contact() {
    return (
        <div className='w-full h-auto'>
            <div className='w-full h-auto sm:h-auto md:min-h-[calc(100lvh-125px)] items-center sm:flex flex-col sm:flex-row space-y-6 sm:space-y-0 my-10 sm:mb-10 sm:my-0'>
                <div className='flex flex-none sm:flex-1 flex-col items-start ml-[50px] justify-center space-y-2'>
                    <h1 className='text-4xl'>Get In Touch</h1>
                    <a target='_blank' href='https://www.linkedin.com/company/resilience-engineering-construction-management/'>
                        <FaLinkedin size={40} className='text-blue-950 hover:cursor-pointer' />
                    </a>
                    <a className='flex flex-row w-36 h-10 rounded-lg text-white bg-blue-950 text-center content-center items-center justify-evenly' href='tel:407-927-1480'>
                        <FaPhoneAlt size={15} /> 407-927-1480
                    </a>
                    <a className='flex flex-row w-[230px] sm:w-[260px] px-2 h-10 rounded-lg text-white bg-blue-950 text-center content-center items-center justify-evenly sm:text-base text-sm' href='mailto:Resilienceengineer@gmail.com'>
                        <MdEmail size={15} /> Resilienceengineer@gmail.com
                    </a>

                </div>
                <div className='flex h-[600px] sm:h-[600px] flex-none sm:flex-1 flex-row p-2'>
                    <div className='w-full h-full bg-blue-950 rounded-2xl pt-4'>
                        <div className='w-full h-[100px] sm:h-[100px] flex items-center justify-around'>
                            <div className='flex flex-row items-start justify-center'>
                                <h1 className='text-white'>First Name{"\t"}</h1>
                            </div>

                            <input className='w-48 sm:w-64 h-10 rounded-lg' />
                        </div>
                        <div className='w-full h-[100px] flex items-center justify-around'>
                            <div className='flex flex-row items-start justify-center'>
                                <h1 className='text-white'>Last Name{"\t"}</h1>
                            </div>
                            <input className='w-48 sm:w-64 h-10 rounded-lg' />
                        </div>
                        <div className='w-full h-[100px] flex items-center justify-around'>
                            <div className='flex flex-row items-start justify-center'>
                                <h1 className='text-white'>Email{"\t"}</h1>
                            </div>
                            <input className='w-48 sm:w-64 h-10 rounded-lg' />
                        </div>
                        <div className='w-full h-[150px] flex flex-col sm:flex-row items-center justify-around'>
                            <h1 className='text-white w-full mb-2 sm:mb-0 sm:w-auto ml-10 sm:ml-0'>Project Summary</h1>
                            <textarea className='w-64 h-[100px] rounded-lg' />
                        </div>
                        <div className='w-full h-[100px] flex items-center justify-center'>
                            <a className='hover:cursor-pointer flex flex-row w-36 h-10 rounded-lg text-white bg-orange-600 text-center content-center items-center justify-evenly active:opacity-90'>
                                Submit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
