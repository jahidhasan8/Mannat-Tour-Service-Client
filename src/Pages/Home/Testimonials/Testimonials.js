// import React, { useState, useEffect } from "react";
// import Swiper from "swiper";
// import "swiper/swiper-bundle.min.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay, Pagination, A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testimonials = () => {
  

  return (

    <section>
        <div>
            
            <i><h1 className='fw-bold text-success text-center'>---Testimonials---</h1></i>
            <h2 className='text-center fs-5'>What Customer Say About Us</h2>
        </div>


        <Swiper className='my-5'
        modules={[Navigation,Autoplay, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
    >
    <SwiperSlide >
    <div className="slide-item d-flex flex-column align-items-center justify-content-center space-y-4 py-14">
    <div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://i.ibb.co/tB457Dm/img-1.webp"
								alt=""
								className="w-24 h-24  bg-center bg-cover rounded-circle"
							/>
							<div className='d-flex flex-column text-center py-2'>
								<p className="fw-semibold fs-5">Mary Cruzelen</p>
								<p >CEO at Alika</p>
							</div>
						</div>
						<p className="px-6  py-2 fs-3 fw-semibold text-center sm:fw-bold sm:fs-2 md:fs-1">
							"Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Quod eos id officiis hic <br /> tenetur  quae  quaerat ad velit ab hic tenetur. <br /> Ut enim ad minima veniam, quis nostrum exercitationem."
						</p>
						
					</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-item d-flex flex-column align-items-center justify-content-center space-y-4 py-14">
    <div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://i.ibb.co/HhCy8pH/img-4.webp"
								alt=""
								className="w-24 h-24 bg-center bg-cover rounded-circle"
							/>
							<div className='d-flex flex-column text-center py-2'>
								<p className="fw-semibold fs-5">Pissori Jannu</p>
								<p >CEO at Adivaha</p>
							</div>
						</div>
						<p className="px-6 text-center py-2 fs-3 fw-semibold text-center sm:fw-bold sm:fs-2 md:fs-1">
							"Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Quod eos id officiis hic <br /> tenetur quae quaerat ad velit ab hic tenetur. <br /> Ut enim ad minima veniam, quis nostrum exercitationem."
						</p>
						
					</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-item d-flex flex-column align-items-center justify-content-center space-y-4 py-14">
    <div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://i.ibb.co/FXths64/img-6.webp"
								alt=""
								className="w-24 h-24 bg-center bg-cover rounded-circle"
							/>
							<div className='d-flex flex-column text-center py-2'>
								<p className="fw-semibold fs-5">Angilica halls </p>
								<p >CEO at Mahiton</p>
							</div>
						</div>
						<p className="px-6 text-center  py-2 fs-3 fw-semibold text-center sm:fw-bold sm:fs-2 md:fs-1">
							"Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Quod eos id officiis hic <br /> tenetur quae quaerat ad velit ab hic tenetur. <br /> Ut enim ad minima veniam, quis nostrum exercitationem."
						</p>
						
					</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-item d-flex flex-column align-items-center justify-content-center space-y-4 py-14">
    <div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://i.ibb.co/5hPcZ6P/img-32.webp"
								alt=""
								className="w-24 h-24 bg-center bg-cover rounded-circle"
							/>
							<div className='d-flex flex-column text-center py-2'>
								<p className='fw-semibold fs-5'>David mure</p>
								<p>CEO at Gazal</p>
							</div>
						</div>
						<p className="px-6 text-center py-2 fs-3 fw-semibold text-center sm:fw-bold sm:fs-2 md:fs-1">
							"Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Quod eos id officiis hic <br /> tenetur quae quaerat ad velit ab hic tenetur. <br /> Ut enim ad minima veniam, quis nostrum exercitationem."
						</p>
						
					</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-item d-flex flex-column align-items-center justify-content-center space-y-4 py-14">
    <div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://i.ibb.co/kXNjvGT/img-10.webp"
								alt=""
								className="w-24 h-24 bg-center bg-cover rounded-circle"
							/>
							<div className='d-flex flex-column text-center py-2'>
								<p className="fw-semibold fs-5">Anna Deynah</p>
								<p >CEO at Travon</p>
							</div>
						</div>
						<p className="px-6 py-2 fs-3 text-center fw-semibold text-center sm:fw-bold sm:fs-2 md:fs-1">
							"Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Quod eos id officiis hic <br /> tenetur quae quaerat ad velit ab hic tenetur. <br /> Ut enim ad minima veniam, quis nostrum exercitationem."
						</p>
					
					</div>
    </SwiperSlide>
    ...
  </Swiper>
    </section>

    
  );
};

export default Testimonials;