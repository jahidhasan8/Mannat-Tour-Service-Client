import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    
    return (
        <div className='w-full p-1'>
            
            <Carousel className='mt-2 mb-5 w-100 px-4 mt-5'>
                <Carousel.Item className=''>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/L6RjkG4/hero-bg-1-3.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/94vWbgL/hero-bg-1-2.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/94H24J2/hero-bg-1-1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/Bn8QJDb/img7.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/jJytppB/banner-5.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;