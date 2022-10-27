import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const CourseDetails = () => {
  const ref = React.createRef();

const courseData = useLoaderData();
const {id,courseName,img,cost,duration,start,details,courseType} = courseData;
    
    return (

        <div>
          <div ref={ref}>
            <div >
              <h2 className='text-center mt-5 mb-5 font-semibold text-4xl'>Detail Information about course</h2>
              <p className='text-purple-400 text-center text-xl '>Are you ready to join your favorite course..?</p>
             
            </div>
            <div  class=" bg-base-200">
  <div class="grid place-content-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
   <div> 
    <img className=' mt-20 m-10' style={{height:"250px"}} src={img} alt="" />
   </div>
    <div className='mt-20 mr-36 ml-20 text-left'>
      <h1 class="text-5xl font-bold">{courseName}</h1>
      <p class="mb-5">{details}</p>
      <p class="mt-5">Corse Fee: {cost}</p>
      <p class="mt-5">Course Duration: {duration}</p>
      <p class="mt-5">Course Type: {courseType}</p>
      <p class="mb-5 mt-5">Course Start: {start}</p>
    
       
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='text-black btn btn-outline btn-primary' onClick={toPdf} >Download Pdf</button>}
      </Pdf>
      <Link to={`/checkout/${id}`}>
          <div className='text-center'>
          <button class="btn btn-outline btn-info mt-5">Get Premium Access</button>
          </div></Link>
    </div>
  </div>
</div>
               {/* <div style={{width:"550px"}} className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
        <div className=' lg:w-1/2 mt-10 mb-10 ml-5 mr-5'>
          <img
         
            src={img}
            alt=''
            className='object-cover  w-full  h-80 lg:h-80'
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
            
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='text-black btn btn-outline btn-primary' onClick={toPdf} >Download Pdf</button>}
      </Pdf>
          </div>
          <Link to={`/checkout/${id}`}>
          <div className='text-center'>
          <button class="btn btn-outline btn-info mt-5">Get Premium Access</button>
          </div></Link>
        </div>
      </div>
    </div> */}
        </div>
        </div>
    );
};
        
   

export default CourseDetails;