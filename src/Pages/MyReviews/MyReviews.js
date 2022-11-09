import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReviews = () => {

    const { user,logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle("MyReviews")

    useEffect(() => {
        fetch(`https://assignment-11-server-ebon.vercel.app/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('Tour-token')}`

            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()

            })
            .then(data => {
                setReviews(data)
            

            })
    }, [user?.email,logOut])

    const handleDelete = (id) => {
        const allow = window.confirm("are you sure,you want to delete this review")

        if (allow) {
            fetch(`https://assignment-11-server-ebon.vercel.app/reviews/${id}`, {
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

    const handleUpdate = (id) => {
        fetch(`https://assignment-11-server-ebon.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {

                    const remaining = reviews.filter(odr => odr._id !== id)
                    const approving = reviews.find(odr => odr._id === id)
                    approving.status = 'Approved'
                    const newReviews = [approving, ...remaining]
                    setReviews(newReviews);
                }
            })
    }

    return (
        <div>
            {reviews?.length === 0 ?
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
                                handleUpdate={handleUpdate}

                            ></ReviewTable>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReviews;