import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
   
const courseData = useLoaderData();
const {courseName,img,cost,duration,start,details} = courseData;
    
    return (

        <div>
          <div>
               <div data-aos="fade-up" data-aos-duration="1900" className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
        <div className=' lg:w-1/2 mt-10 mb-10 ml-5'>
          <img
         
            src={img}
            alt=''
            className='object-cover w-full  h-80 lg:h-80'
          />
        </div>
        <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
       
          <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
            {courseName}
          </h5>
         
          <p className='mb-5 text-black'>Course Duration: {duration} month</p>
          <p className='mb-5 text-black'>Start: {start}</p>
          <p className='mb-5 text-black'>{details}</p>
          
          <div className='flex items-center gap-3'>

    
            <p className='inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-deep-purple-800'>
           Course Fee: {cost}
            </p>
            <a >
              <button
                type='submit'
                className='inline-flex items-center g justify-center btn btn-outline btn-primary h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-purple-700 focus:shadow-outline focus:outline-none'
              >

               Download PDF
              </button>
            </a>
           
          </div>
          <div className='text-center'>
          <button class="btn btn-outline btn-info mt-5">Get Premium Access</button>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
    );
};
        
   

export default CourseDetails;