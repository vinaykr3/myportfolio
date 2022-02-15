import React from 'react';

const Contact = () => {
    return <>
        <div className='pt-12' id='contact'>
            <h1 className='text-center text-3xl font-bold'>Contact Me</h1>
            <p className="text-center">-- <span className='text-slate-500'>get in touch</span> --</p>
        </div>
        <main className='mt-5 md:flex lg:mx-12 mb-20'>
            <div className="left mx-5 md:w-1/2">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="my-3">You can contact me us method and message me talk me and any things Thank You!</p>
                <h4 className='font-bold'>Name</h4>
                <p className=''>Vinay Kr Prajapati</p>
                <h4 className='font-bold'>Address</h4>
                <p className=''>Kushinagar, India</p>
                <h4 className='font-bold'>Email</h4>
                <p className=''>vinaykumarprajapati52@gmail.com</p>
            </div>
            <div className="right my-5 md:w-1/2 md:mt-0">
                <h1 className='font-bold text-2xl my-3 ml-2 md:my-0'>Message Me</h1>
                <div className="name_email w-11/12 mx-auto">
                    <input type="text" className='border border-1 border-gray-700 w-full py-1 my-1 px-2 outline-none' placeholder='Name' />
                    <input type="text" className='border border-1 border-gray-700 w-full py-1 my-1 px-2 outline-none' placeholder='Email' />
                </div>
                <div className="sub_mess  w-11/12 mx-auto">
                    <input type="text" className='border border-1 border-gray-700 w-full py-1 my-1 px-2 outline-none' placeholder='Subject' />
                    <textarea className='w-full h-28 border border-1 border-gray-700 py-1 px-2 my-1 outline-none' placeholder='Message.'></textarea>
                </div>
                <button className='bg-red-400 hover:bg-gradient-to-r from-yellow-400 to-blue-600 py-2 px-3 font-bold text-xl text-white rounded ml-3 cursor-pointer'>Send Message</button>
            </div>
        </main>
    </>;
};

export default Contact;
