import React from 'react'
import stockImage from '../../images/stock_image.jpg';

export default function Home() {
    return (
        <div className="w-full h-auto">
            <div className='w-full h-auto relative'>
                <img src={stockImage} className="w-full h-auto object-contain" alt="Stock Image" />

                {/* Desktop Content */}
                <div className='hidden sm:flex absolute top-[25%] right-0 w-[50%] h-[30%] bg-white rounded-xl items-center text-blue-950'>
                    <span className='mx-6 sm:text-4xl xl:text-6xl opacity-100 font-sans flex flex-col h-full w-full justify-center items-start'>
                        Providing<br />
                        <div><span className='text-orange-600'>Efficient</span> & <span className='text-orange-600'>Reliable</span></div>
                        <div><span className='text-orange-600'>Structural</span> and <span className='text-orange-600'>Civil Engineering</span></div>
                        Services
                    </span>
                </div>
            </div>
            <div className='w-full h-[450px] sm:h-[300px] flex flex-col items-center justify-center space-y-2'>
                <span className='text-2xl font-bold text-blue-950'>WHO WE ARE</span>
                <span className='text-center mx-6 sm:mx-20'>
                    Resilience Engineering and Construction Management provides leading structural engineering, façade consulting, integrated design and detailing, forensic, and construction consulting services for all types of buildings. Known for the highest quality of service, the firm provides each client with personal, dedicated, and inspiring engineering services.
                </span>
            </div>
        </div>
    )
}
