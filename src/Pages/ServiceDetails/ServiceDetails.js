
import React  from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceReview from './ServiceReview/ServiceReview';
/* import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'; */

const ServiceDetails = () => {

    
    const services = useLoaderData()
     useTitle("ServiceDetails")
    const { name, description, image, price, rating } = services
    return (
        <div>
            <div className='p-5'>
                <Card className='  mx-auto mt-5 rounded mb-5 col-md-8 shadow'>

                    <Card.Title className='text-center fs-3 fw-bold m-0 rounded py-2 mx-2'> {name}
                    </Card.Title>

                    <div >
                        <Card.Img className='px-5 center-block mt-2 w-100  rounded' variant="top" src={image} />
                        <Card.Body>

                            <Card.Text className='mt-4 px-3 text-justify' >
                                {description}
                            </Card.Text>

                        </Card.Body>
                    </div>
                    <div className='d-flex justify-content-between px-4'>
                        <p className='fw-bold'> Price: {price}$</p>
                        <div className='d-flex'>
                            <p className='mt-1 px-2 fw-bold'>Rating: {rating}</p>
                        </div>
                    </div>

                </Card>

            </div>

            {/* Review Section */}
            <div className='mb-5 w-full container'>
                 
                 <ServiceReview></ServiceReview>
              
            </div>
        </div>
    );
};

export default ServiceDetails;