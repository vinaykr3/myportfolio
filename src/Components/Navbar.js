import React from 'react';

const Navbar = () => {
    const hemburger = () => {
        document.getElementById('hemburger').style.display = "block";
        document.getElementById('burger').style.display = "none";
        document.getElementById('close').style.display = "block";
    }
    const close = () => {
        document.getElementById('hemburger').style.display = "none";
        document.getElementById('burger').style.display = "block";
        document.getElementById('close').style.display = "none";
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const hidder = () => {
        if (mediaQuery.matches) {
            document.getElementById('hemburger').style.display = "none";
            document.getElementById('close').style.display = "none";
            document.getElementById('burger').style.display = "block";
        }
    }

    return <>
        <div className="w-full md:py-2 md:px-5 bg-gradient-to-r from-white to-black flex justify-between sticky top-0 left-0">
            <div className="left flex h-10 py-3">
                <img src="/images/V logo.png" className='h-10' alt="logo" />
                <h1 className='leading-10 md:leading-10 text-indigo-700 text-lg md:text-2xl font-bold'><a href='#home'>Portfolio</a> </h1>
            </div>
            <div className="right flex py-3">
                <ul className='hidden transition-all duration-500 ease-in md:flex leading-10 space-x-4 mx-4 text-white' id='hemburger'>
                    <li></li>
                    <li className='hover:text-blue-400 md:text-2xl duration-500' onClick={hidder}><a href="#home">Home</a></li>
                    <li className='hover:text-blue-400 md:text-2xl duration-500' onClick={hidder}><a href="#about">About</a></li>
                    <li className='hover:text-blue-400 md:text-2xl duration-500' onClick={hidder}><a href="#skills">Skills</a></li>
                    <li className='hover:text-blue-400 md:text-2xl duration-500' onClick={hidder}><a href="#service">Services</a></li>
                    <li className='hover:text-blue-400 md:text-2xl duration-500' onClick={hidder}><a href="#project">Projects</a></li>
                </ul>
                <span className='leading-10 font-bold cursor-pointer text-white px-2 text-xl md:hidden' id='burger' onClick={hemburger}>&#9776;</span>
                <span className='hidden leading-10 font-bold cursor-pointer px-2 text-xl md:hidden' id='close' onClick={close}>&#10006;</span>
            </div>
        </div>
    </>;
};

export default Navbar;
