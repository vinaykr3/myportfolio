import React from 'react';

const Projects = () => {
    return <div className='mt-20' id='project'>
        <h1 className='text-center text-3xl font-bold'>My Projects</h1>
        <p className='text-center'>--<span className='text-blue-500'>what did i do</span>--</p>
        <div className='flex flex-wrap flex-col md:flex-row'>
            <div className="w-72 mx-auto m-3 shadow-lg rounded-md">
                <img src="/images/twitter_clone.jpg" className='w-full h-auto' alt="projects image" />
                <h2 className='text-center'>Twitter-clone</h2>
            </div>
            <div className="w-72 mx-auto m-3 shadow-lg rounded-md">
                <img src="/images/netflix_clone.jpg" className='w-full h-auto' alt="projects image" />
                <h2 className='text-center'>Netflix-clone</h2>
            </div>
            <div className="w-72 mx-auto m-3 shadow-lg rounded-md">
                <img src="/images/facebook_clone.png" className='w-full h-auto' alt="projects image" />
                <h2 className='text-center'>Facebook-login-clone</h2>
            </div>
            <div className="w-72 mx-auto m-3 shadow-lg rounded-md">
                <img src="/images/hotstar_clone.jpg" className='w-full h-auto' alt="projects image" />
                <h2 className='text-center'>Hotstar-clone</h2>
            </div>
            <div className="w-72 mx-auto m-3 shadow-lg rounded-md">
                <img src="/images/todo_app.png" className='w-full h-auto' alt="projects image" />
                <h2 className='text-center'>Todo-app</h2>
            </div>
            <div className="w-72 mx-auto m-3 shadow-lg rounded-md">
                <img src="/images/e-commerce.png" className='w-full h-auto' alt="projects image" />
                <h2 className='text-center'>E-commerce-shop-clone</h2>
            </div>
        </div>
    </div>;
};

export default Projects;
