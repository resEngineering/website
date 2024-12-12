import React, { useState } from 'react'
import { IoMdMenu as MenuIcon } from "react-icons/io";

export default function Header({ tab, setSelectedTab}) {

    return (
        <div className='flex h-[12lvh] flex-row w-full items-center justify-center'>

            <div className='flex-1 flex flex-grow items-center justify-center text-nowrap ml-2 sm:ml-4 sm:font-bold sm:text-xl'>
                Resilience Engineering
            </div>
            <div className='sm:flex-1 hidden'></div>
            <div className='flex-1 flex flex-row items-center justify-end'>
                <MenuIcon className='sm:hidden mr-4' size={30} />
                <div className='hidden sm:flex flex-1 w-full h-full flex-row items-center justify-center gap-8'>
                    {
                        ['Home', 'About', 'Services', 'Contact'].map(page => {
                            return (
                                <a className={`flex hover:cursor-pointer h-8 w-16 md:w-20 text-center items-center justify-center rounded-lg ${tab === page ? 'bg-gray-300 text-zinc-950' : ' '}`}
                                    onClick={
                                        () => { 
                                            setSelectedTab(page) 
                                        }
                                    }>{page}
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
