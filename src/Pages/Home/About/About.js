import React from 'react';

const About = () => {
    return (
        <div className='mt-5 container'>
            <h1 className='text-center mb-5 bg-dark text-light p-2 w-50 mx-auto shadow-lg rounded-lg'>About Me</h1>
      <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-5'>
                
                        <img className='w-full p-2' style={{ height: '300px' }} src="https://i.ibb.co/wNMdsKR/photo-1642914298873-922a21f55911-ixlib-rb-4-0.jpg" alt="" />
                    
                </div>
                <div className='col-md-7'>
                    <p className='fs-6 p-2 mt-5'>Hi, I am Jahid Hasan.I am providing tour guide service.I am a local guide from Bangladesh. I enjoy traveling and making new friends. As I travel, I get to sample experiences in tourist attractions, parks, restaurants and coffee houses, villages, sea beach, hill among others.I wish you will enjoy Bangladesh.Here you can meet with different culture, different types of people. I am fluent in English and Bengali,German, French, in spoken and written. I am a public speaker with a specialty in corporate events. I wish to travel to new places, explore the world and contribute my experience to help others make the right decision when they wish to visit a new place.</p>
                </div>
            </div>
        </div>
    );
};

export default About;