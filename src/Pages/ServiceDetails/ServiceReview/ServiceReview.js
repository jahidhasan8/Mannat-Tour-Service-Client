
import React, { useContext, useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceReview = () => {
    const services = useLoaderData()
    const { name, _id, price } = services
    const { user } = useContext(AuthContext)
    const [customerReview, setCustomerReview] = useState([])
// console.log(user);


    const handleAddReview = (e) => {
        e.preventDefault()
        const form = e.target
        const cName = form.name.value
        const email = user?.email
        const text = form.text.value
        const photo = form.photo.value
        const photoURL = user?.photoURL
        const rating = form.rating.value
        // form.reset()
          
        const review = {
            serviceId: _id,
            serviceName: name,
            price,
            customer: cName,
            email,
            rating,
            photo,
            photoURL,
            text
        }
          const updateReview=[...customerReview,review]
          setCustomerReview(updateReview)

        fetch('https://assignment-11-server-ebon.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast.success('review added successfully')
                    form.reset()
                }

            })
            .catch(error => toast.error(error.message))
    }
     
    // fetching all reviews under specific single service
    useEffect(() => {
        fetch(` https://assignment-11-server-ebon.vercel.app/serviceReview?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                //  const updateReview=[...review,data]
                // setCustomerReview(data)
                setCustomerReview(data)
            })
    }, [_id])


    return (
        <div>
            {
                user?.uid ?
                    <Form onSubmit={handleAddReview} className=" w-50 mt-4 shadow-lg p-3 rounded-4 mx-auto">
                        <p className='text-center fw-semibold fs-5'>Add Review</p>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label> Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Enter your photo url"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" name='rating' placeholder="Enter Rating" />
                        </Form.Group>
                        <>

                            <FloatingLabel controlId="floatingTextarea2" label="Text">
                                <Form.Control
                                    as="textarea" name='text'
                                    placeholder="Leave a Text here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </>
                        <Button className='mt-3' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    :
                    <p className='text-center fw-bold fs-4'> Please <Link to='/login'>Login</Link> to add review</p>
            }
            <>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-10 col-xl-8 text-center">
                        <h3 className="mb-4 fw-bold">Reviewers</h3>
                        <p className="mb-4 fw-semibold pb-2 mb-md-5 pb-md-0">
                            Take a Look all reviewers review who are already taken my services.
                        </p>
                    </div>
                </div>

                <div className="row row-cols-1 rounded row-cols-md-3 g-5 text-center mt-5 mx-auto container">
                    {

                        customerReview?.length && customerReview.map(singleReview => <div key={singleReview._id}>

                            <div className="col h-50">
                                <div className="card  w-full shadow-lg rounded-lg" style={{ height: "350px" }}>
                                    <div >
                                        <img
                                            src={singleReview?.photoURL ? singleReview.photoURL : singleReview?.photo}
                                            className="card-img-top rounded-circle shadow-1-strong  p-2" alt="..." style={{ width: '150px', height: '150px' }} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold"> {singleReview.customer}</h5>
                                        <h5 className="card-title fw-bold text-warning">Rating : {singleReview?.rating}</h5>
                                        <p className="card-text">
                                            "{singleReview?.text}"

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )

                    }
                </div>
            </>
        </div>
    );
};

export default ServiceReview;