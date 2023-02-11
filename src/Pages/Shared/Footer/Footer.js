import React from 'react';
import './Footer.css';
import footerBg from '../../../images/footer-bg.png';

const Footer = () => {
     return (
          <div className=' text-black' style={{ backgroundImage: `url(${footerBg})`, height:"100vh", backgroundPosition: "center center", paddingTop: "160px", backgroundSize : "cover"}}>
              
              <div className="container">
                    <div className="row bottom-footer-wrapper">
                         <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-logo">
                                 
                                 <h3>Mannat Tour Service</h3>
                            </div>  
                            <div>
                                 <p className="contact-link"><i className="fas fa-phone"></i> +1 (009) 99 143 77</p>
                                 <p className="contact-link"><i className="far fa-envelope"></i> travelcontact@agency.mail</p>
                                 <p className="contact-link"><i className="fas fa-map-marker-alt"></i> Zip : +990 hilTown,  </p>
                            </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-12">
                              <h3 className="bottom-title">Quick Links</h3>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i> Famous Tour</p>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i> Tour Blogs</p>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i>Find Place</p>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i>
                              Take Ticket</p>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i>
                              Winter Place</p>
                         </div>
                         <div className="col-lg-3 col-md-6 col-12">
                              <h3 className="bottom-title">Important Links</h3>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i>
                              Destination</p>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i>
                              Get In Touch</p>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i>
                              Who We Are</p>
                              <p className="connect-link"><i className="fas fa-arrow-right"></i>
                              Contact Us</p>
                         </div>
                         <div className="col-lg-3 col-md-6 col-12">
                              <div className="input-bottom">
                                   <input placeholder="enter your email" type="email" name="" id="" />
                                   <input placeholder="your report" type="text" name="" id="" />
                                   
                                   <input className="submitBtn" type="submit" value="Send Mail" />
                              </div>
                         </div>
                    </div>
              </div>

              <div className="mini-footer">
                <div className="copy-footer bg-success text-white">
                     <p>© CopyRight Privacy | Policy  2023</p>
                </div>
              </div>
          </div>
     );
};

export default Footer;