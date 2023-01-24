import React from 'react';
import './ArrangementTravel.css'

import management from '../../../images/tour-about.png'


const ArrangementTravel = () => {
     return (
          <div className="arrangemanet-compo">
               <div className="container">
                    <div className="row">
                         <div className="col-lg-6 col-md-6 col-12">
                              <div className="tour-text-wrapper">
                                   <span className="little-title">We Are Specialized In</span>
                                   <h1 className="tour-title">Tour & Travel Arrangement</h1>
                              </div> 
                              <div>
                                   <h3 className="planner-text">We Can Be A Great Travel Planner For You</h3>
                                   <p className="planner-para">
                                   One of the most common questions we’ve received about Walt Disney World’s new Genie+ service is how it’s possible to “stack” multiple Lightning Lane ride reservations. This post explains how you can stockpile selections to great success, becoming the “last action hero” of your vacation–with afternoons and evenings of non-stop line skipping at Magic Kingdom,
                                   </p>
                                   <button className="more-btn">Details</button>
                              </div> 
                         </div>
                         <div className="col-lg-6 col-md-6 col-12">
                           <img className="img-fluid"  src={management} alt="" />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ArrangementTravel;