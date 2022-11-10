import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
const ReviewTable = ({ review, handleDelete }) => {
    //    console.log(review);
    const { serviceName, _id, text, price, customer, rating, serviceId } = review;
    const [reviewService, setReviewService] = useState({})

    /*  useEffect(() => {
        fetch(`https://assignment-11-server-ebon.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [serviceId])  */

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger rounded-circle'>X</button>
                </label>
            </th>
            <td>
                <div className="flex align-items-center ">
                    <div className="avatar">
                        <div >
                            {
                                /*  reviewService?.image &&
                                 <img className="rounded-circle"  style={{width:"40px",height:"40px"}} src={reviewService.image} alt="" /> */
                            }
                        </div>
                    </div>
                    <div>
                        <div className="fw-bold">{customer}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <small className='fw-semibold'>${price}</small>
            </td>
            <td>{rating} star</td>
            <td><small>{text}</small></td>
            <th>
                <Link to={`/updateReview/${_id}`} className='btn btn-success rounded-circle'><FiEdit></FiEdit></Link>
            </th>
        </tr>
    );
};

export default ReviewTable;