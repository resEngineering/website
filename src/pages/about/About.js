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
                    <div className='text-black flex flex-col mr-8 overflow-scroll sm:overflow-auto space-y-2'>
                        <span>I’m a natural born leader with an agility in communication, a fire in my belly and a drive to succeed, all while always trying to improve our collective existence. I’m looking for a position where I will be able to express my leadership and communication talents. I’d like to tell you a little more about myself so that you can better understand my drive and passion.</span>
                        <br/>
                        <span>Raised in a single parent household, my mom worked day and night to give me a private school education. As a kid, out of my group of friends, I was always the one with less and because of that, I wake up every morning with a fiery craving to succeed. My mom showed me that an impeccable work ethic can coexist with, not just personal success but also success for others. As a result of these experiences throughout my early life, I molded myself into the candidate that I am today.</span>
                        <br/>
                        <span>Finishing college, I realized I needed to fast forward and accelerate my path to success. I got some valuable work experience while in school with the help of a few internships. I have gained valuable experience with the positions I’ve held and have discovered and developed a certain skill set that contributes to my value in any team:</span>
                        <ul>
                            <li>
                                • I have the unique ability to manage multi-disciplinary projects and to navigate complex challenges.
                            </li>
                            <li>
                                • I have the charisma and organizational skills to lead a team of individuals to success.
                            </li>
                            <li>
                                • I like to keep things simple and focus on making difficult things simpler
                            </li>
                            <li>
                                • I have a hunger to succeed and a never give up attitude.
                            </li>
                            <li>
                                • I have a logical sense of approach to any obstacle or challenge.
                            </li>
                            <li>
                                • I ostracize insignificant issues and chase the real fires
                            </li>
                            <li>
                                • I’m a team player and believe in responsibility.
                            </li>
                            <li>
                                • I have focused ideas and I’m not afraid to execute them!
                            </li>
                        </ul>
                        <span>I am always looking for new journeys and opportunities feel free to contact me.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
