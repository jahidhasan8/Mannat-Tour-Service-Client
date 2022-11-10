import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReviews = () => {

    const { user,logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle("MyReviews")
    
    // json web token sending to server for verifying
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
                headers: {
                    authorization: `Bearer ${localStorage.getItem('Tour-token')}`
    
                }
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


    return (
        <div>
            {reviews?.length === 0 ?
                <h2 className="fs-4 text-center mt-5">No Reviews were added</h2>
                :
                <h2 className="fs-4 text-center mt-5">You have {reviews.length} Reviews</h2>
            }

            <div className=" w-full">
                <table className="table w-50 mx-auto">
            
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