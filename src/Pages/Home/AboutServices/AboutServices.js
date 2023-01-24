import React from 'react';
import './AboutServices.css';
import servicesBanner from '../../../images/aboutService.png';
import About from '../About/About';
import { FaWeightHanging,FaUserAlt,FaLock } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
const AboutServices = () => {
    
     return (
          <div>
               <div className="container">
                  <About/>  

               <h3 className="service-heading">Every Time We Provide Best Service</h3>
                    <div className="row services-sec">
                         <div className="col-lg-6 cl-md-6">
                              <img className="img-fluid" src={servicesBanner} alt="" />
                         </div>
                         <div className="col-lg-6 cl-md-6">
                              <div className="row">
                              <div className="col-lg-6 cart-services  col-md-6">
                                   <div className="i-area">
                                    
                                     <FaWeightHanging className='fs-1 text-danger'/>
                                   </div>
                                   <div>
                                        <h4>Exclusive Packages</h4>
                                        <p>Our review of a remarkable little gem we found on Airbnb for our stay in Edinburgh!</p>
                                   </div>
                              </div>
                              <div className="col-lg-6 cart-services col-md-6">
                                   <div className="i-area">
                                   <BiWorld className='fs-1 text-danger' />
                                   </div>
                                   <div>
                                        <h4>World Class Service</h4>
                                        <p>From Edinburgh Castle to the best bookshop in the city, these are the top</p>
                                   </div>
                              </div>
                              </div>

                              <div className="row">
                              <div className="col-lg-6 cart-services col-md-6">
                                   <div className="i-area">
                                   <FaUserAlt className='fs-1 text-danger'/>
                                   </div>
                                   <div>
                                        <h4>Best Travel Guide</h4>
                                        <p>Remarkable little gem we found on Airbnb for our stay in Edinburgh!</p>
                                   </div>
                              </div>
                              <div className="col-lg-6 cart-services col-md-6">
                                   <div className="i-area">
                                   <FaLock className='fs-1 text-danger'/>
                                   </div>
                                   <div>
                                        <h4>100% Secure</h4>
                                        <p>Edinburgh review of a remarkable little gem we found on Airbnb for our stay in !</p>
                                   </div>
                              </div>
                              </div>
                              
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutServices;