import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2  sm:grid-cols-1 md:grid-cols-1 place-content-center'>
            <div  className='mt-20 mr-20 ml-20'>
    <h2 className='text-5xl font-bold text-purple-700'>Your Course To Success</h2>
   <p  className='text-left  mt-5'>This course is an introduction to the basic concepts of programming languages, with a strong emphasis on functional programming. The course uses the languages ML, Racket, and Ruby as vehicles for teaching the concepts, but the real intent is to teach enough about how any language “fits together” to make you more effective programming in any language -- and in learning new ones.</p>
   <button class="btn btn-outline   btn-primary mt-5">Ready to Get Started ?</button>
   </div>
  <div  className='mt-10 mr-20 ml-20 '>
<img   src="https://quomodosoft.com/html/bisy/assets/images/home/layer.png" alt="" />

   </div>
  
<div>


    </div>
  </div>
</div>
   
    );
};

export default Banner;