import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import CardGroup from 'react-bootstrap/CardGroup';

const Offer = () => {
    return (
        
           

<Container className='mb-5'>
     {/* <div className='row gx-5'>
                <div className='col-sm-6'>
                    <div className="card text-bg-dark shadow-lg">
                        <img src="https://i.ibb.co/sFYPJFw/offer-bg-2.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay px-5 py-5">
                            <h5 className="text-start card-title fw-bold fs-3 text-white">45% OFF</h5>
                            <p className="text-start card-text fs-4 fw-semibold ">On Flight Ticket  Grab <br /> This Now.</p>

                            <button type="button" className="btn btn-outline-success d-flex justify-content-start p-2 text-white fw-bold">Book Now</button>
                        </div>

                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className="card text-bg-dark">
                        <img src="https://i.ibb.co/4fN9msv/offer-bg-1.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay px-5 py-5">
                            <h5 className="text-start text-white fw-bold fs-3">35% OFF</h5>
                            <p className="text-start fw-semibold fs-4">Explore The World Tour <br /> Hotel Booking.</p>

                            <button type="button" className="btn btn-outline-success  p-2 d-flex justify-content-start  text-white fw-bold">Book Now</button>
                        </div>
                    </div>
                </div>
            </div> */}
      <Row className='g-4'>
        <Col sm={6}>
        <Card className="bg-dark text-white border-0">
      <Card.Img src="https://i.ibb.co/4fN9msv/offer-bg-1.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>45% OFF</Card.Title>
        <Card.Text>
        Explore The World Tour Hotel Booking.
        </Card.Text>
        <button type="button" className="btn btn-outline-success d-flex justify-content-start p-2 text-white fw-bold">Book Now</button>
      </Card.ImgOverlay>
    </Card>
        </Col>
        <Col sm={6}>
        <Card className="bg-dark text-white border-0">
      <Card.Img src="https://i.ibb.co/sFYPJFw/offer-bg-2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>35% OFF</Card.Title>
        <Card.Text>
        On Flight Ticket Grab This Now.
        </Card.Text>
        <button type="button" className="btn btn-outline-success d-flex justify-content-start p-2 text-white fw-bold">Book Now</button>
      </Card.ImgOverlay>
    </Card>
        </Col>
      </Row>
      
    </Container>
    
    );
};

export default Offer;