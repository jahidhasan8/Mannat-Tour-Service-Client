import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';


const UpdateReview = () => {
    const review = useLoaderData()

    const [customerReview, setCustomerReview] = useState(review)


    const navigate = useNavigate()

    // fetch data on specific id related service
    useEffect(() => {
        fetch(`https://assignment-11-server-ebon.vercel.app/reviews/${review._id}`)
            .then(res => res.json())
            .then(data => setCustomerReview(data))

    }, [review._id])

    const handleUpdateReview = (e) => {
        e.preventDefault()

        fetch(`https://assignment-11-server-ebon.vercel.app/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Tour-token')}`

            },
            body: JSON.stringify(customerReview)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('Review updated successfully')

                    navigate('/MyReviews')
                }
            })
    }


    const handleInputChange = (e) => {
        const value = e.target.value
        const field = e.target.name
        const newReview = { ...customerReview }
        newReview[field] = value
        setCustomerReview(newReview)

    }

    return (
        <div>
            <Form onSubmit={handleUpdateReview} className=" w-50 mt-4 shadow-lg p-3 rounded-4 mx-auto">
                <p className='text-center fw-semibold fs-5'>Please Update Review</p>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label> Name</Form.Label>
                    <Form.Control onChange={handleInputChange} type="text" defaultValue={review.customer} name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onChange={handleInputChange} type="text" defaultValue={review.photo} name='photo' placeholder="Enter your photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control onChange={handleInputChange} type="number" defaultValue={review.rating} name='rating' placeholder="Enter Rating" />
                </Form.Group>
                <>

                    <FloatingLabel controlId="floatingTextarea2" label="Text">
                        <Form.Control
                            as="textarea" onChange={handleInputChange} defaultValue={review.text} name='text'
                            placeholder="Leave a Text here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </>
                <Button className='mt-3' variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateReview;