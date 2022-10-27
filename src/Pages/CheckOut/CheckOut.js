import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const CheckOut = () => {
    const {user} = useContext(AuthContext);

    const checkOut = useLoaderData();
    const { courseName,img,cost,duration,details,start,courseType } = checkOut;

    const notify = () => toast.success('Checkout Successfully');
    return (
        <div>
        
            <h2 className='text-center mt-5 text-5xl font-semibold'>Enroll Now</h2>

          <div data-aos="zoom-in-up" data-aos-duration="1500" className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
          
            <div >
            <div className='text-center mt-6'>
                <h2 className='text-center  text-2xl font-semibold'>User Information</h2>
                <p  className='text-center mt-5  text-purple-400'>Name: {user?.displayName}</p>
            </div>
            <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
  
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Payment</span>
          </label>
          <input type="text" placeholder="debit or credit card" class="input input-bordered" />
          
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Pin Number</span>
          </label>
          <input type="number" placeholder="pin" class="input input-bordered" />
          <label class="label">
            <span class="label-text">Amount</span>
          </label>
          <input type="number" placeholder="amount" class="input input-bordered" />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
               
            </div>
            <div>
            <div class=" flex mx-auto mt-36  card w-96 glass mb-10">
  <figure><img style={{width:"200px"}} src={img} alt="car"/></figure>
  <div class="card-body">
    <h2 class="card-title">{courseName}</h2>
    <p>Course Type: {courseType}</p>
    <p className='text-purple-400'>Course Fee: {cost} $</p>
    <p> {details}</p>
    <p>Course Duration: {duration} month</p>
    <p>Start: {start}</p>
    
  </div>
</div>
            </div>
          </div>

         <div data-aos="zoom-in-up" data-aos-duration="1500" className='text-center mb-10'>
         <button onClick={notify} class="btn btn-success w-96">CheckOut</button>
         </div>

          <Toaster />

        </div>
    );
};

export default CheckOut;