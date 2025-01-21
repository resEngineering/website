import React, { useState } from 'react'
import { IoMdMenu as MenuIcon } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Logo from "../../images/Logo.jpg"
import LogoDesktop from "../../images/Logo-Desktop.jpg"

export default function Header({ tab, setSelectedTab }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='flex h-[12lvh] sm:h-[75px] md:h-[125px] flex-row w-full items-center justify-center'>
            <div className='flex-1 flex flex-grow items-center justify-center text-nowrap ml-2 sm:ml-4 sm:font-bold sm:text-xl'>
                <img src={LogoDesktop} className='h-full w-auto sm:hidden' />
                <img src={LogoDesktop} className='hidden sm:block sm:h-[75px] md:h-[100px] w-auto' />
            </div>
            <div className='flex-1 flex flex-row flex-grow-0 sm:flex-grow items-center justify-end'>
                {/* Mobile Components */}
                <MenuIcon className='sm:hidden mr-6' size={30} onClick={() => {
                    setShowMenu(!showMenu);
                }} />
                <div className={`sm:hidden z-50 fixed top-0 flex flex-col transition-all duration-500 h-[100lvh] overflow-hidden bg-white w-full ${showMenu ? 'right-0' : '-right-full'}`}>
                    {/* Slide-out Menu */}
                    <div className='w-full min-h-[15%] flex flex-row justify-end items-end flex-grow-0' >
                        <MdClose className='w-8 h-auto mr-4' onClick={() => {
                            setShowMenu(!showMenu);
                        }} />
                    </div>
                    <div className='w-full min-h-[15%] flex flex-row justify-center items-center flex-grow-0'>
                        <div className='flex h-auto items-center justify-center text-xl'>
                            <img src={LogoDesktop} className='h-full w-auto' />
                        </div>
                    </div>
                    {/* Menu Options */}
                    <div className='min-h-[70%]'>
                        {
                            ['Home', 'About', 'Contact'].map(option => {
                                return (
                                    <div className='w-full h-20 flex flex-row items-end justify-start text-xl border-b-2 border-solid' onClick={
                                        () => {
                                            setSelectedTab(option);
                                            setShowMenu(!showMenu);
                                        }
                                    }>
                                        <h1 className='ml-2 mb-2'>{option}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Web Components */}
                <div className='hidden sm:flex flex-1 w-full h-full flex-row items-center justify-center gap-8'>
                    {
                        ['Home', 'About', 'Contact'].map(page => {
                            return (
                                <a className={`flex hover:cursor-pointer h-8 w-16 md:w-20 text-center items-center justify-center rounded-lg ${tab === page ? 'bg-gray-300 text-zinc-950' : ' '}`}
                                    onClick={
                                        () => {
                                            setSelectedTab(page);
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
