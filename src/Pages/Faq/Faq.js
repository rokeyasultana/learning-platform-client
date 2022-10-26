import React from 'react';

const Faq = () => {
    return (
        <div className='mt-7 mb-20 ml-14 mr-14'>
            <div>
                <img className='rounded mx-auto d-block mb-5' src="https://www.pngmart.com/files/10/FAQ-PNG-Transparent.png" alt="" />
            </div>
          <div tabindex="0" class="collapse collapse-plus border border-purple-300 bg-base-100 rounded-box mb-3">
  <div class="collapse-title text-xl font-medium">
  How long does it take to learn JavaScript online?
  </div>
  <div class="collapse-content"> 
    <p>Here's the short answer: most programmers agree that it takes six to nine months to develop a working proficiency in JavaScript. And even then, you'll spend years learning new skills and developing your understanding of it.</p>
  </div>
</div>  
          <div tabindex="0" class="collapse collapse-plus border border-purple-300 bg-base-100 rounded-box mb-3">
  <div class="collapse-title text-xl font-medium">
  Which Angular version is best?
  </div>
  <div class="collapse-content"> 
    <p>This TypeScript-based web application framework released on 2nd June 2022 is developed by Google and supports the latest TypeScript 4.7 release. As compared to its ancestral versions, Angular 14 is one of the most thoughtfully designed and holistic upgrades.Aug 24, 2022</p>
  </div>
</div>  
          <div tabindex="0" class="collapse collapse-plus border border-purple-300 bg-base-100 rounded-box">
  <div class="collapse-title text-xl font-medium">
  How many days it will take to learn node JS?
  </div>
  <div class="collapse-content"> 
    <p>It takes around 3 months to fully learn Node JS and be able to build a functional full-stack application. If you already know some other programming, you can get the basics down within a few week's time.</p>
  </div>
</div>  
        </div>
    );
};

export default Faq;