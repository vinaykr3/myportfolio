import React from 'react';

const Skills = () => {
    return <div className='pt-12' id='skills'>
        <h1 className='text-center mt-6 text-3xl font-bold'>Skills</h1>
        <p className='text-center'>--<span className='text-red-700'>what i know</span>--</p>
        <main className='w-full px-6 py-8 md:flex md:flex-row '>
            <div className="left md:w-6/12 md:px-3 md:flex md:flex-col md:mt-12">
                <div className='w-14 h-1 ml-3 mb-5 bg-blue-600'></div>
                <h2 className='font-bold text-lg text-center md:text-left md:pr-10 lg:pr-28'>Designing With Passion While Exploring The World.</h2>
                <p className='py-6 text-center md:text-left md:pr-10 lg:pr-28 font-light text-gray-800'>I am learning web designing since 2020 and i am UX Designer UI Designing React Librarise To be Honest i give us enugh time to learn front end web development! And I am learning now and again and again!</p>
                <button className='w-2/3 md:w-1/2 hover:bg-blue-400 text-blue-600 hover:text-white rounded font-bold text-xl border-2 border-gray-700 py-2'>Read More</button>
            </div>
            <div className="right md:w-6/12">
                <div className="bg-orange-100 my-6 py-2 px-3 shadow-lg">
                    <div className="flex justify-between">
                        <p>HTML</p>
                        <p className=''>90%</p>
                    </div>
                    <div className="w-full bg-gray-300 rounded-2xl">
                        <div className="skills w-11/12 h-3 bg-sky-400 rounded-2xl py-1 text-right text-lg"></div>
                    </div>
                </div>

                <div className="bg-orange-100 shadow-lg my-6 py-2 px-3">
                <div className="flex justify-between">
                    <p>CSS</p>
                    <p className=' right-2 top-2'>83%</p>
                    </div>
                    <div className="w-full bg-gray-300 rounded-2xl">
                        <div className="skills w-10/12 h-3 bg-sky-400 rounded-2xl py-1 text-right text-lg"></div>
                    </div>
                </div>
                <div className="bg-orange-100 shadow-lg my-6 py-2 px-3">
                <div className="flex justify-between">
                    <p>Bootstrap/Tailwind</p>
                    <p className=' right-2 top-2'>91%</p>
                    </div>
                    <div className="w-full bg-gray-300 rounded-2xl">
                        <div className="skills w-11/12 h-3 bg-sky-400 rounded-2xl py-1 text-right text-lg"></div>
                    </div>
                </div>
                <div className="bg-orange-100 shadow-lg my-6 py-2 px-3">
                <div className="flex justify-between">
                    <p>JAVASCRIPT</p>
                    <p className=' right-2 top-2'>80%</p>
                    </div>
                    <div className="w-full bg-gray-300 rounded-2xl">
                        <div className="skills w-4/5 h-3 bg-sky-400 rounded-2xl py-1 text-right text-lg"></div>
                    </div>
                </div>
                <div className="bg-orange-100 shadow-lg my-6 py-2 px-3">
                <div className="flex justify-between">
                    <p>REACT JS</p>
                    <p className=' right-2 top-2'>80%</p>
                    </div>
                    <div className="w-full bg-gray-300 rounded-2xl">
                        <div className="skills w-4/5 h-3 bg-sky-400 rounded-2xl py-1 text-right text-lg"></div>
                    </div>
                </div>

            </div>
        </main>
    </div>;
};

export default Skills;