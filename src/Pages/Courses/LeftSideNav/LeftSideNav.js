import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses,setCourses] =useState([]);

    useEffect(() =>{
        fetch(`https://learning-website-server-rokeyasultana.vercel.app/courses`)
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);

    
    return (
        <div className=' place-items-center  ml-10 mr-20 mt-20'>
            <h2 className=' text-3xl font-bold text-purple-500 text-center mb-5'>List of Courses</h2>
            <div className=' mt-10 border  border-purple-500 bg-base-100 rounded-box mb-10'>
                {
                    courses.map(course =><p className='mt-10 ml-10 mb-5 hover:text-purple-400 hover:underline ' key={course.id}>

                    <Link to={`/course/${course.id}`} >{course.courseName}</Link>
                    </p>)
                  
                }
            </div>
        </div>
    );
};

export default LeftSideNav;