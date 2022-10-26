import React from 'react';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideCard from './RightSideCard/RightSideCard';

const Courses = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2'>
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div>
                <RightSideCard></RightSideCard>
            </div>
            </div>
        </div>
    );
};

export default Courses;