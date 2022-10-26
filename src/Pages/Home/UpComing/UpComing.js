import React from 'react';
import { FaLocationArrow} from 'react-icons/fa';
const UpComing = () => {
    return (
        <div>
            <div className=' text-center mt-14 '>
                <h2 className='text-xl'>Contact Now</h2>
                <h2 className='text-3xl font-bold'>UpComing Events</h2>
            </div>

         
               
             <div  className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
             <div>
              
              <div class="card w-96 bg-purple-50  hover:bg-white shadow-xl mt-5">

<div class="card-body flex">
 
  <div><h2 class="card-title hover:text-purple-500">Build MernStack Website Using MongoDb </h2></div>
  <p>25 November</p>
  <div className='flex gap-3'>
    <div>
         <p className='mt-2'><FaLocationArrow/></p>
    </div>
  <div>
    <p>Vancouver, Canada</p>
    </div>
    </div>
 
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Get Ticket</button>
  </div>
</div>
</div>
            </div>
            <div className='flex gap-5'>
            
              <div class="card w-96 bg-purple-50 hover:bg-white shadow-xl mt-5">

<div class="card-body flex">
 
  <div><h2 class="card-title hover:text-purple-500">Benefit to learn C++</h2></div>
  <p>15 November</p>
  <div className='flex gap-3'>
    <div>
         <p className='mt-2'><FaLocationArrow/></p>
    </div>
  <div>
    <p> Chicago, US</p>
    </div>
    </div>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Get Ticket</button>
  </div>
</div>
</div>
            </div>
          
            <div className='flex gap-5'>
            
              <div class="card w-96 bg-purple-50  hover:bg-white shadow-xl mt-5 mb-14">

<div class="card-body flex">
 
  <div><h2 class="card-title hover:text-purple-500">Build E-Commerce Website Using React Js</h2></div>
  <p>1 December</p>
  <div className='flex gap-2'>
    <div>
         <p className='mt-2'><FaLocationArrow/></p>
    </div>
  <div>
    <p>New York, US</p>
    </div>
    </div>
  <div class="card-actions justify-end ">
    <button class="btn btn-primary">Get Ticket</button>
  </div>
</div>
</div>
            </div>
            <div className='flex gap-5'>
            
              <div class="card w-96 bg-purple-50  hover:bg-white shadow-xl mt-5 mb-14">

<div class="card-body flex">
 
  <div><h2 class="card-title hover:text-purple-500">Benefit to Learn Node.js Workshop</h2></div>
  <p>1 December</p>
  <div className='flex gap-2'>
    <div>
         <p className='mt-2'><FaLocationArrow/></p>
    </div>
  <div>
    <p>La, US</p>
    </div>
    </div>
  <div class="card-actions justify-end ">
    <button class="btn btn-primary">Get Ticket</button>
  </div>
</div>
</div>
            </div>
           
             </div>
                
            </div>
  
    );
};

export default UpComing;
