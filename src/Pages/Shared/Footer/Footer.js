import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (

        <div className="mt-5">

            <footer className="text-center text-white bg-dark mx-0 row">

                <div className="col-md-4  mt-4">
                    <h6 className=" mb-4 font-weight-bold">Contact</h6>
                    <p> </p>
                    <p className='m4-3'><AiOutlineMail></AiOutlineMail>  jahid@gmail.com</p>
                    <p className='m4-3'><IoCallOutline></IoCallOutline> +8801929520000</p>
                </div>

                <section className='col-md-4 '>
                    <div className="container p-4 pb-0">

                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Register for free</span>
                                <Link to='/register'><button type="button" className="btn btn-outline-light btn-rounded fw-bold">
                                    Register!
                                </button></Link>
                            </p>
                        </section>

                    </div>
                    <div className="text-center p-3" >
                        © 2025 Copyright: Mannat Tour Service

                    </div>
                </section>

                <div className="col-md-4  mt-4">
                    <h6 className=" mb-4 font-weight-bold">Follow Me</h6>
                    <Link className='fs-5'><BsFacebook></BsFacebook></Link>
                    <Link  className='ms-3 fs-5'><BsInstagram></BsInstagram></Link>
                    <Link className='ms-3 fs-5'><BsTwitter></BsTwitter></Link>
                    
                </div>

            </footer>


        </div>

    );
};

export default Footer;