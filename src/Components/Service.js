import React from 'react';

const Service = () => {
    return <>
        <main className='pt-12 w-full bg-black py-6' id='service'>
            <h1 className='text-center text-white font-bold text-3xl'>My Services</h1>
            <div className="text-center">
                <span className='text-white'>--</span> <span className='text-center text-red-700 '> What i provide </span><span className='text-white'>--</span>
            </div>

            <div className="cards w-full md:space-x-5 my-8 space-y-8 md:space-y-0 flex flex-col md:flex-row justify-center items-center">
                <div className="card rounded w-72 h-40 bg-gray-700 hover:bg-red-500 text-center p-2">
                    <i className="fas fa-paint-brush text-white text-3xl"></i>
                    <h1 className='text-white font-bold text-xl'>Web Design</h1>
                    <p className='text-white'>Web Page Design Using HTML CSS code and Figma Design! I know both! You can give me a chance for design </p>
                </div>
                <div className="card rounded w-72 h-40 bg-gray-700 hover:bg-red-500 text-center p-2">
                    <i className="fas fa-ad text-white text-3xl"></i>
                    <h1 className='text-white font-bold text-xl'>Advertising</h1>
                    <p className='text-white'>Advertising you can adverties your product and i adverties all type product on my site gives a chance!</p>
                </div>
                <div className="card rounded w-72 h-40 bg-gray-700 hover:bg-red-500 text-center p-2">
                    <i className="fab fa-react text-white text-3xl"></i>
                    <h1 className='text-white font-bold text-xl'>React Development</h1>
                    <p className='text-white'>Hi I am a react developer and i code in react js and I can decode your old website in react base site and new site in react component Thank You!</p>
                </div>
            </div>
        </main>
    </>;
};

export default Service;
