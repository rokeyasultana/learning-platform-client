import React from 'react';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideCards from './RightSideCard/RightSideCards';

const Courses = () => {
    return (
        <div>
            <div class="grid  lg:grid-cols-3  gap-4">
  
            <div class="...">
                <LeftSideNav></LeftSideNav>
            </div>
  <div class="col-span-2 ...">
   <RightSideCards></RightSideCards>
  </div>
  </div>
        </div>
    );
};

export default Courses;