import React from 'react';

const GuidingBanner = () => {
    return (
        <div>
            <div className='bg-base-100 shadow-purple-500 drop-shadow-md hover:drop-shadow-xl justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 mr-20 mb-[-60px] mt-10'>
            <div>
                <img src="https://quomodosoft.com/html/bisy/assets/images/home/2.png" alt="" />
            </div>
            <div className='mt-10'> 
                <h2 className='font-bold text-4xl'>You can be your own<br></br>Guiding start with our<br></br>help!</h2>
            </div>
            <div >
            <button class="btn btn-outline btn-primary mt-14 mb-5">Get Started Now</button> 
            </div>
            </div>
        </div>
    );
};

export default GuidingBanner;