import React from 'react';
import {FaArrowRight } from "react-icons/fa";


const SecretBlog = () => {
    return (
        <div>
           <div>
            <h2 className='text-center text-2xl mt-10 text-purple-400'>Secrets of</h2>
            <h2 className='text-center font-bold text-3xl'>Learning Revealed in Blogs</h2>
           </div>
           
           <div className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-20 mr-20 mt-14'>
           <div><div class="card w-96 bg-base-100 shadow-xl shadow-purple-50 drop-shadow-md hover:drop-shadow-xl ">
  <figure><img src="https://quomodosoft.com/html/bisy/assets/images/home/blog/1.jpg" alt="" /></figure>
  <div class="card-body">
       <div className='flex gap-9'>
       <div><p>April 22, 2022</p></div>
        <div><p>6 comments</p> </div>
       </div>
    <h2 class="card-title">Build A Full Web Chat App<br></br>From Scratch</h2>
    <div class="card-actions justify-end">
      <p className='text-purple-500'>Read more</p>
    </div>
  </div>
</div></div>


           <div><div class="card w-96 bg-base-100 shadow-xl shadow-purple-50 drop-shadow-md hover:drop-shadow-xl ">
  <figure><img src="https://quomodosoft.com/html/bisy/assets/images/home/blog/2.jpg" alt="" /></figure>
  <div class="card-body ">
  <div className='flex gap-9'>
       <div><p>April 22, 2022</p></div>
        <div><p>6 comments</p> </div>
       </div>
    <h2 class="card-title">Insights on How to <br></br>Improve Your Teaching.</h2>
    <div class="card-actions justify-end">
    <p className='text-purple-500'>Read more <FaArrowRight /></p>
    </div>
  </div>
</div></div>


           <div><div class="card w-96 bg-base-100 shadow-xl shadow-purple-50 drop-shadow-md hover:drop-shadow-xl ">
  <figure><img src="https://quomodosoft.com/html/bisy/assets/images/home/blog/3.jpg" alt="" /></figure>
  <div class="card-body">
  <div className='flex gap-9'>
       <div><p>April 22, 2022</p></div>
        <div><p>6 comments</p> </div>
       </div>
    <h2 class="card-title">Learning Python For Data<br></br>Analysis</h2>
    <div class="card-actions justify-end">
    <p className='text-purple-500'>Read more <FaArrowRight /></p>
    </div>
  </div>
</div></div> 
           </div>
        </div>
    );
};

export default SecretBlog;