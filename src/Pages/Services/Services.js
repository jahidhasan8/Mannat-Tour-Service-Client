import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { PhotoView } from 'react-photo-view';
import { Spinner } from 'react-bootstrap';

const Services = () => {

    useTitle("Services")

      const[services,setServices]=useState([])
      const [loading,setLoading]=useState(true)
    
    //   fetching all services data
    useEffect(()=>{
        fetch('https://assignment-11-server-ebon.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            if(data?.length===0){
              return  setLoading(true)
            }
            setLoading(false)
           return setServices(data)
        })
    },[])
     
    // spinner will show if data not yet load when fetching data
    if (loading) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border m-5" variant="info" />
        </div>

    }

    return (
        <div className='mb-5'>

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
                                        <p className='fw-bold'>Rating: {service?.rating?service.rating:"N/A"}</p>
                                    </div>
                                </div>
                                <Link to={`/serviceDetails/${service._id}`} className="btn btn-success ">Service Details</Link>
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