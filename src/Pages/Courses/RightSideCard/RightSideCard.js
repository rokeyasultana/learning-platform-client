import React from 'react';
import { useNavigate } from 'react-router-dom';
const RightSideCard = ({coursesCard}) => {
    const{id,courseName,cost,img,details} = coursesCard;
    const navigate = useNavigate();
    const navigateToCourseDetails = id => {

        navigate (`/course/${id}`);
          }


    return (
        <div data-aos="fade-up" data-aos-duration="1500">
          <div class=" card w-80 border border-purple-500 mt-10  mb-10 shadow-xl">
  <figure class="px-10 pt-10">
    <img style={{height:"150px"}} src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{courseName}</h2>
    <p className='text-left'>{details}</p>
    <h2 className='text-left font-semibold'>Course Fee: {cost}$</h2>
    <div class="card-actions">
      <button  onClick={  ()=>navigateToCourseDetails(id)} class="btn btn-outline btn-primary">Course Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default RightSideCard;