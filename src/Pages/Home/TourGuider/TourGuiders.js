import React from 'react';
import './TourGuiders.css';


const TourGuiders = () => {
     return (
          <div className="guider-sec">
               <div className="container my-5">
                 <h1 className="guider-heading">Meet Our Awesome Travel Guide</h1>
                    <div className="row">
                         <div className="col-lg-3  col-md-6 col-12">
                             <div className="guider-img-box">
                                  <img className="img-fluid" src="https://i.ibb.co/d6ggtR9/team-2.jpg" alt="" />
                                  <div className="guider-des">
                                       <h4 className="name">Jenifer Lora</h4>
                                       <p className="expart"> -Sea-Beach Guide-</p>
                                  </div>
                             </div> 
                         </div>
                         <div className="col-lg-3  col-md-6 col-12">
                         <div className="guider-img-box">
                                  <img className="img-fluid" src="https://i.ibb.co/ZW6W5mF/guider4.jpg" alt="" />
                                  <div className="guider-des">
                                       <h4 className="name">Henry Carter</h4>
                                       <p className="expart"> -Mountaineering Guide-</p>
                                  </div>
                             </div> 
                         </div>
                         <div className="col-lg-3  col-md-6 col-12">
                         <div className="guider-img-box">
                                  <img className="img-fluid" src="https://i.ibb.co/vjbLHxd/guider3.jpg" alt="" />
                                  <div className="guider-des">
                                       <h4 className="name">Jennifer Andy</h4>
                                       <p className="expart"> -Local Village Guide-</p>
                                  </div>
                             </div> 
                         </div>
                         <div className="col-lg-3 col-md-6 col-12">
                         <div className="guider-img-box">
                                  <img className="img-fluid" src="https://i.ibb.co/PZM2dhv/guider1.jpg" alt="" />
                                  <div className="guider-des">
                                       <h4 className="name">Jane Ronan</h4>
                                       <p className="expart"> -Mountaineering Guide-</p>
                                  </div>
                             </div> 
                         </div>
                         
                    </div>
               </div>
          </div>
     );
};

export default TourGuiders;