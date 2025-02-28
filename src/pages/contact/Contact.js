import React, {useState} from 'react'
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser"
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import Config from '../../constants/Config.json';

export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [summary, setSummary] = useState("");

    const [formSubmitted, setFormSubmitted] = useState(false);

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_REGEX = /^(\+\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    const handleSubmit = () => {
        if (firstName && lastName && email && summary) {
            emailjs.send(Config.emailJS.SERVICE_ID, Config.emailJS.TEMPLATE_ID, {
                firstName, lastName, email, summary
            }, { publicKey: Config.emailJS.PUBLIC_KEY }).then(() => {
                console.log('Request Submitted');
                setFormSubmitted(true);
            }, (error) => {
                console.log('Request Submission Failed', error);
            })
        }
    }
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
                    <a className='flex flex-row w-[230px] sm:w-[260px] px-2 h-10 rounded-lg text-white bg-blue-950 text-center content-center items-center justify-evenly sm:text-base text-sm' href='mailto:Andy@resilienceENG.com'>
                        <MdEmail size={15} /> Andy@resilienceENG.com
                    </a>

                </div>
                <div className='flex h-[600px] sm:h-[600px] flex-none sm:flex-1 flex-row p-2'>
                    <div className='w-full h-full bg-blue-950 rounded-2xl pt-4'>
                        <div className='w-full h-[100px] sm:h-[100px] flex items-center justify-around'>
                            <div className='flex flex-row items-start justify-center'>
                                <h1 className='text-white'>First Name</h1>
                            </div>

                            <input className='w-48 sm:w-64 h-10 rounded-lg' onChange={(e) => { setFirstName(e.target.value) }}/>
                        </div>
                        <div className='w-full h-[100px] flex items-center justify-around'>
                            <div className='flex flex-row items-start justify-center'>
                                <h1 className='text-white'>Last Name</h1>
                            </div>
                            <input className='w-48 sm:w-64 h-10 rounded-lg' onChange={(e) => { setLastName(e.target.value) }}/>
                        </div>
                        <div className='w-full h-[100px] flex items-center justify-around'>
                            <div className='flex flex-row items-start justify-center'>
                                <h1 className='text-white'>Email</h1>
                            </div>
                            <input className='w-48 sm:w-64 h-10 rounded-lg' onChange={(e) => { setEmail(e.target.value) }}/>
                        </div>
                        <div className='w-full h-[150px] flex flex-col sm:flex-row items-center justify-around'>
                            <h1 className='text-white w-full mb-2 sm:mb-0 sm:w-auto ml-10 sm:ml-0'>Project Summary</h1>
                            <textarea className='w-64 h-[100px] rounded-lg' onChange={(e) => { setSummary(e.target.value) }}/>
                        </div>
                        <div className='w-full h-[100px] flex items-center justify-center'>
                            <button className={`flex flex-row w-36 h-10 rounded-lg text-white bg-orange-600 text-center content-center items-center justify-evenly active:opacity-90 ${!(firstName && lastName && email && summary && EMAIL_REGEX.test(email)) ? 'hover:cursor-not-allowed opacity-50' : 'hover:cursor-pointer'}`} disabled={!(firstName && lastName && email && summary && EMAIL_REGEX.test(email))} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
