import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReviews = () => {

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    // console.log(reviews);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => {
                return res.json()

            })
            .then(data => {
                setReviews(data)
                // console.log('received',data)

            })
    }, [user?.email])

    const handleDelete = (id) => {
        const allow = window.confirm("are you sure,you want to delete this review")
    
        if (allow) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.success('deleted successfully')
                        const remaining = reviews.filter(singleReview => singleReview._id !== id)
                        setReviews(remaining)
                    }
                })
        }
    }

    /*  const handleStatusUpdate = (id) => {
         fetch(`https://genius-car-server-wine.vercel.app/orders/${id}`, {
             method: 'PATCH',
             headers: {
                 'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('genius-token')}`
             },
             body: JSON.stringify({ status: 'Approved' })
         })
             .then(res => res.json())
             .then(data => {
                 console.log(data)
                 if (data.modifiedCount > 0) {
 
                     const remaining = orders.filter(odr => odr._id !== id)
                     const approving = orders.find(odr => odr._id === id)
                     approving.status = 'Approved'
                     const newOrders = [approving, ...remaining]
                     setOrders(newOrders);
                 }
             })
     } */

    return (
        <div>
            {   reviews?.length===0?
                <h2 className="fs-4 text-center mt-5">No Reviews were added</h2>
                :
                <h2 className="fs-4 text-center mt-5">You have {reviews.length} Reviews</h2>
            }

            <div className=" w-full">
                <table className="table w-50 mx-auto">
                    {/* head  */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Rating</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <ReviewTable
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            
                            ></ReviewTable>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReviews;