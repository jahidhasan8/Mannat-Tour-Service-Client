import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { PhotoView } from 'react-photo-view';
import { Spinner } from 'react-bootstrap';
const Services = () => {
    const services = useLoaderData()
    const { setLoading, loading } = useContext(AuthContext)
    useTitle("Services")
    return (
        <div>

            <div className="row row-cols-1 rounded row-cols-md-3 g-5 mt-5 mx-auto container">

                {

                    services.map(service => <div key={service._id}  >

                        <div className="col">

                            <div className="card h-50 w-full shadow-lg rounded-lg">
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
            </div>

        </div>
    );
};

export default Services;