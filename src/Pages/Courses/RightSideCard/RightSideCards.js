import React, { useEffect, useState } from 'react';
import RightSideCard from '../../Courses/RightSideCard/RightSideCard'; 
const RightSideCards = () => {
    const [coursesCards,setCoursesCards] =useState([]);

    useEffect(() =>{
        fetch(`https://learning-website-server-rokeyasultana.vercel.app/courses`)
        .then(res => res.json())
        .then(data => setCoursesCards(data));
    },[]);

    return (
        <div data-aos="fade-up" data-aos-duration="1500">
            <div className='mt-20'>
                <h2 className='text-center font-bold text-3xl text-purple-500'>Courses Information</h2>
            </div>
            <div className='grid place-items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mr-10 mb-10'>
                {
                    coursesCards.map(coursesCard => <RightSideCard
                    key ={coursesCard.id}
                    coursesCard={coursesCard}
                    
                    ></RightSideCard>)
                }
            </div>
        </div>
    );
};

export default RightSideCards;