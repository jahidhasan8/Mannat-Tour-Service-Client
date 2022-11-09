import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselBanner from './Carousel/CarouselBanner'
import useTitle from '../../hooks/useTitle';
import Faq from '../Home/Faq/Faq'
import About from '../Home/About/About'
import { PhotoView } from 'react-photo-view';

const Home = () => {
    useTitle("Home")
    const [services, setServices] = useState([])
    let size = 3
    useEffect(() => {
        const url = `https://assignment-11-server-ebon.vercel.app/services?size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [size])
    return (
        <div >

            <CarouselBanner></CarouselBanner>
            <div className="row row-cols-1 rounded row-cols-md-3 g-4 mt-5 mx-auto container">
                {
                    services.map(service => <div key={service._id} >
                        <div className="col">
                            <div className="card h-50 w-full shadow rounded">
                                <div >
                                    <PhotoView src={service?.image}>
                                        <img style={{ height: "300px" }} src={service?.image} className="card-img-top rounded  p-2" alt="..." />
                                    </PhotoView>

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold"> {service.name}</h5>
                                    <p className="card-text">

                                        {service?.description.slice(0, 100) + '...'}
                                    </p>
                                    <div className='d-flex justify-content-between'>
                                        <p className='fw-bold'>$ {service?.price}</p>
                                        <p className='fw-bold'>Rating: {service?.rating}</p>
                                    </div>
                                </div>
                                <Link to={`/serviceDetails/${service._id}`} className="btn btn-dark ">Service Details</Link>
                            </div>
                        </div>

                    </div>

                    )
                }
                <Link to='/services' className="btn btn-dark mx-auto mt-5">See All</Link>
            </div>
            <About></About>
            <Faq></Faq>
        </div>
    );
};

export default Home;