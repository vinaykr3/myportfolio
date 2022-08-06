/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const About = () => {
    return <div className='pt-12 bg-orange-100' id='about'>
        <div className="text-center py-6">
            <h1 className='font-bold text-3xl '>About Me</h1>
            <p>--<span className='text-red-600'>who i am</span>--</p>
        </div>
        <main className='md:flex'>
            <div className="left w-full md:w-1/2 mb-5">
                <img src="/images/vinay_photo.jpg" className='w-4/5 md:w-5/6 lg:w-4/6 xl:w-2/6 2xl:w-1/4 mx-auto rounded-md shadow-xl' alt="author image" />
            </div>
            <div className="right w-full md:w-1/2">
                <h1 className='w-11/12 mx-auto font-bold'>I'm Vinay and I'm a Web Developer</h1>
                <p className='w-11/12 mx-auto mt-3 font-sans'>Hello i am a web developer and web designer. My name is <span className='text-blue-400'> Vinay kumar Prajapati</span> I'm 20 year old. I born in Kushinagar, U.P India. I pursuing B.sc 3rd in meerut India. I am react developer and i am preparing full stack develoment by google and YouTube. I got free certificate in web development and front end development from freecodecamp.org | I am working as a web developer and i am a quick learner. Thanks for visiting my site.</p>
                <div className="icons mx-5 my-5 space-x-6">
                        <a href='https://www.facebook.com/buntybabu123/' target="_blank" rel="noreferrer"><i className="fab text-blue-600 text-3xl cursor-pointer fa-facebook"></i></a>
                        <a href='https://twitter.com/Vinay885362?s=09' target="_blank" rel="noreferrer"><i className="fab text-blue-600 text-3xl cursor-pointer fa-twitter"></i></a>
                        <a href='https://www.linkedin.com/in/vinay-kumar-prajapati-61250622a/' target="_blank" rel="noreferrer"><i className="fab text-blue-600 text-3xl cursor-pointer fa-linkedin-in"></i></a>
                        <a href='https://github.com/vinaykr3' target="_blank" rel="noreferrer"> <i className='fab text-black text-3xl cursor-pointer fa-github'></i> </a>
                </div>
                <a href='/images/Resume-vk.pdf' download="file" ><button className='ml-3 border border-1 border-gray-700 my-6 py-1 px-3 bg-blue-400 hover:bg-blue-600 text-white rounded'>Resume <i className="fas fa-download"></i> </button></a>
            </div>
        </main>
    </div>;
};

export default About;
