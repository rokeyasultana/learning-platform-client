import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(AuthContext);

    const checkOut = useLoaderData();
    const { courseName,img,cost,duration,details,start,courseType } = checkOut;
    return (
        <div>
            <div className='Text-center'>
                <h2 className='text-center  text-2xl font-semibold'>User Information</h2>
                <p  className='text-center mt-5 mb-5 text-purple-400'>Name: {user?.displayName}</p>
            </div>
            <div class="flex mx-auto  card w-96 glass mb-10">
  <figure><img style={{width:"200px"}} src={img} alt="car"/></figure>
  <div class="card-body">
    <h2 class="card-title">{courseName}</h2>
    <p>Course Type: {courseType}</p>
    <p className='text-purple-400'>Course Fee: {cost}</p>
    <p> {details}</p>
    <p>Course Duration: {duration}</p>
    <p>Start: {start}</p>
    
  </div>
</div>

        </div>
    );
};

export default CheckOut;