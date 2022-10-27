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
              <p className='text-purple-400 text-center text-xl '>Are you ready to join your desire course..?</p>
             
            </div>
            
            <div class="card mx-auto w-96 bg-base-100 shadow-xl mt-10 mb-10">
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='text-black btn btn-outline btn-info' onClick={toPdf} >Download Pdf</button>}
      </Pdf>
  <figure class="px-10 pt-10">
    <img  style={{height:"200px"}} src={img} alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{courseName}</h2>
    <p class="mb-5">{details}</p>
      <p class="mt-5">Corse Fee: {cost} $</p>
      <p class="mt-5">Course Duration: {duration} month</p>
      <p class="mt-5">Course Type: {courseType}</p>
      <p class="mb-5 mt-5">Course Start: {start}</p>
    <div class="card-actions">
    <Link to={`/checkout/${id}`}>
          <div className='text-center'>
          <button class="btn btn-outline btn-info mt-5">Get Premium Access</button>
          </div></Link>
    </div>
  </div>
</div>

            
           
         
        </div>
        </div>
    );
};
        
   

export default CourseDetails;