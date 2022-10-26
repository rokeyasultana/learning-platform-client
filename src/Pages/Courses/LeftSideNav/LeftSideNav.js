import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses,setCourses] =useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/courses`)
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div className=' ml-10 mr-20'>
            <h2 className='text-2xl font-bold text-purple-500 text-center'>All Courses</h2>
            <div className='justify-center border border-purple-500 bg-base-100 rounded-box '>
                {
                    courses.map(course =><p className='mt-5' key={course.id}>

<Link >{course.courseName}</Link>
                    </p>)
                  
                }
            </div>
        </div>
    );
};

export default LeftSideNav;