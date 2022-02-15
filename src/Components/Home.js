import React from 'react';
import Navbar from './Navbar';
import Typical from 'react-typical';

const Home = () => {
    return <>
        <Navbar />
        <main className='px-6 py-6 flex flex-col-reverse bg-gradient-to-t from-black to-white md:flex-row-reverse md:justify-evenly md:w-full md:px-7 md:bg-gradient-to-l md:items-center md:h-screen' id="home">
            <div className="left w-full flex justify-center">
                <div className="h-52 w-52 lg:w-72 lg:h-72 border-4 bg-red-400 rounded-full border-purple-500 mt-14 md:mt-0">
                    <img src="/images/myphoto2.png" className='h-64 lg:h-80 border-b-8 border-red-500' alt="owner image" />
                </div>
            </div>

            <div className="right cursor-default mt-10 w-full mx-6 md:ml-20 flex justify-center flex-col">
                <p className='text-red-800 lg:text-4xl'>HELLO!</p>
                <h3 className='font-bold lg:text-4xl'>I'M <span className='text-blue-400 md:text-indigo-600 lg:text-3xl'>VINAY KR PRAJAPATI</span></h3>
                <div>
                    <span className='text-blue-400 lg:text-2xl font-bold'>And I am a </span>
                    <Typical
                        steps={['Web Designer', 2000, 'Front-End Developer', 2000]}
                        loop={Infinity}
                        wrapper="p"
                        className="inline-block text-red-100 font-bold md:text-indigo-50 lg:text-orange-100 lg:text-3xl"
                     />
                </div>
                <div className='border-2 border-gray-400 w-24 text-center mt-10 text-white bg-blue-500 hover:bg-blue-600 hover:font-bold text-lg rounded-md'><a href="mailto:vinaykumarprajapati52@gmail.com">Contact</a></div>
            </div>
        </main>
    </>;
};

export default Home;
