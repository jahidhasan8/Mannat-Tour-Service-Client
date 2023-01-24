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
                    <p className='fs-6 p-2 mt-5'>There are many potential communities that could be surveyed for this analysis. GitHub and Stack Overflow are used here first because of their size and second because of their public exposure of the data necessary for the analysis. We encourage, however, interested parties to perform their own analyses using other sources. All numerical rankings should be taken with a grain of salt. We rank by numbers here strictly for the sake of interest. In general, the numerical ranking is substantially less relevant than the language’s tier or grouping.</p>
                </div>
            </div>
        </div>
    );
};

export default About;