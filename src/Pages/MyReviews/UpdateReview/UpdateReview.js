import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const review = useLoaderData()
    const { user } = useContext(AuthContext)
    //   console.log(review);
    const [customerReview, setCustomerReview] = useState(review)

    // const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`https://assignment-11-server-ebon.vercel.app/reviews/${review._id}`)
            .then(res => res.json())
            .then(data => setCustomerReview(data))

    }, [review._id])

    const handleUpdateReview = (e) => {
        e.preventDefault()
        const form = e.target
        const cName = form.name.value
        const email = user?.email
        const text = form.text.value
        const photo = form.photo.value
        const rating = form.rating.value
        // form.reset()

        const updatedReview = {

            customer: cName,
            email,
            rating,
            photo,
            text
        }
        setCustomerReview(updatedReview)
        fetch(`https://assignment-11-server-ebon.vercel.app/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Review updated successfully')
                    //  console.log(data)

                }
            })

    }
    return (
        <div>
            <Form onSubmit={handleUpdateReview} className=" w-50 mt-4 shadow-lg p-3 rounded-4 mx-auto">
                <p className='text-center fw-semibold fs-5'>Please Update Review</p>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label> Name</Form.Label>
                    <Form.Control type="text" defaultValue={review.customer} name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" defaultValue={review.photo} name='photo' placeholder="Enter your photo url" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" defaultValue={review.rating} name='rating' placeholder="Enter Rating" />
                </Form.Group>
                <>

                    <FloatingLabel controlId="floatingTextarea2" label="Text">
                        <Form.Control
                            as="textarea" defaultValue={review.text} name='text'
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