import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div className='w-full p-1'>
            
            <Carousel className='mt-2 mb-5 w-100 px-4 mt-5'>
                <Carousel.Item className=''>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/y59ZvKc/photo-1469474968028-56623f02e42e-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/HKQmpHY/photo-1520520731457-9283dd14aa66-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i.ibb.co/6DPGPkg/photo-1558673810-9b0b6316d4f4-ixlib-rb-4-0.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;