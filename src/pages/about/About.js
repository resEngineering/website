import React from 'react'
import profile from '../../images/Profile.jpg';

export default function About() {
    return (
        <div className='w-full h-[88lvh] sm:h-[calc(100lvh-75px)] md:h-[calc(100lvh-125px)]'>
            <div className='w-full h-full flex flex-col sm:flex-row'>
                <div className='w-full sm:w-auto flex flex-row flex-1 flex-grow-0 sm:flex-grow sm:flex-col items-center justify-center'>
                    <img src={profile} className='rounded-xl w-[100%] lg:w-[75%] object-cover h-auto sm:h-[75%] sm:w-auto' />
                </div>
                <div className='w-full sm:w-auto flex flex-1 flex-col text-start sm:justify-center ml-6 sm:ml-0 mt-6 sm:mt-0 space-y-4'>
                    <h1 className='text-blue-950 text-4xl'>Andy Betrand</h1>
                    <h1 className='text-orange-600 text-2xl sm:text-4xl'>President & Founder</h1>
                    <span className='text-black mr-8'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Sociosqu primis ante fusce aenean conubia. Volutpat taciti condimentum rhoncus per aenean vivamus himenaeos enim. Class parturient arcu lacinia semper quis. Proin libero venenatis placerat, netus eros vivamus. Dignissim ullamcorper conubia potenti proin penatibus mus. Semper sit nascetur felis turpis amet.
                    </span>
                </div>
            </div>
        </div>
    )
}
