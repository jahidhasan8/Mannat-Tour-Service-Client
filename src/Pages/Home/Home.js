import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselBanner from './Carousel/CarouselBanner'
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle("Home")
    const[services,setServices]=useState([])
    let size=3
    useEffect(()=>{
        const url=`http://localhost:5000/services?size=${size}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
      },[size])
    return (
        <div >
           
            <CarouselBanner></CarouselBanner>
           <div className="row row-cols-1 rounded row-cols-md-3 g-4 mt-5 mx-auto container">
                        {
                            services.map(service => <div key={service._id} >
                                <div className="col">
                                    <div className="card h-50 w-full shadow rounded">
                                        <div ><img style={{ height: "300px" }} src={service?.image} className="card-img-top rounded  p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold"> {service.name}</h5>
                                            <p className="card-text">

                                                {service?.description.slice(0, 100) + '...'}
                                            </p>
                                        </div>
                                        <Link to={`/serviceDetails/${service._id}`} className="btn btn-dark ">Service Details</Link>
                                    </div>
                                </div>
                                
                            </div>

                            )
                        }
                        <Link to='/services' className="btn btn-dark mx-auto mt-5">See All</Link>
         </div>
        </div>
    );
};

export default Home;