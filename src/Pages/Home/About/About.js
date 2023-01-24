import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';
import { FaLinkedinIn,FaTwitterSquare,FaFacebook,FaReddit } from "react-icons/fa";
const About = () => {
      
     return (
          <div className="container ceo-talk-sec">
          
          <div className="text-center my-5 ">
               <h1 className="ceo-title">CEO TALK'S</h1>
               <p className="ceo-para">We have a deepth focuse to ensure your service</p>
          </div>
          <div className="row d-flex align-items-center">
               <div className="col-lg-4 col-md-6 col-12">
                    <h3 className="ceo-abt">About</h3>
                    <p className="ceo-param">There are many potential communities that could be surveyed for this analysis. GitHub and Stack Overflow are used here first because of their size and second because of their public exposure of the data necessary for the analysis. We encourage, however, interested parties to perform their own analyses using other sources.
                         All numerical rankings should be taken with a grain of salt. We rank by numbers here strictly for the sake of interest. In general, the numerical ranking is substantially less relevant than the language’s tier or grouping.</p>
               </div>
               <div className="col-lg-4 col-md-6 col-12">
               <img width="300" className="my-5  rounded-circle" src="https://i.ibb.co/1zyBHNJ/William.png" alt="" />
               </div>
               <div className="col-lg-4 col-md-6 col-12">
                 <h3 className="c-dtl">Details</h3>

                 <h5 className="work-title">Work Experience</h5>
                 <h3 className="c-hm">CEO </h3>
                 <p className="C-para">Five year's Senior Agency  Department </p>

                 <h3 className="c-con">Contact Zone</h3>
                 <span><NavLink className="text-decoration-none " to="/home"><FaLinkedinIn className='text-muted fs-3' /></NavLink></span>
                 <span><NavLink className="text-decoration-none "  to="/home"><FaTwitterSquare className='text-muted fs-3 mx-2'/></NavLink></span>
                 <span><NavLink className="text-decoration-none "  to="/home"><FaFacebook className='text-muted fs-3'/></NavLink></span>
                 <span><NavLink className="text-decoration-none "  to="/home"><FaReddit className='text-muted fs-3 mx-2'/></NavLink></span>
               </div>
          </div>
           
     </div>
     );
};

export default About;