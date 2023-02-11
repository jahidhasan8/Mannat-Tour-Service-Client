import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (

       <div>
        <h1 className='font-bold text-center fs-1'>Frequently Asked Questions</h1>
         <Accordion className='m-5' defaultActiveKey={['1']} alwaysOpen>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How can I book you As a guide?</Accordion.Header>
                <Accordion.Body>
                You can book me from the website given Phone number.If you want you can see others review here who are taken me as a guide. If you wish a tailor-made tour, you can send me an email and i will be happy to create an itinerary for you.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>How many people are typically on your tours?</Accordion.Header>
                <Accordion.Body>
                Our private tours are only for the people you book for. If you are alone, it will just be you and me as guide. If you are a couple, just the two of you and me as a guide, and so on. i believe this is the best type of tour, so that it can be personalised to you, go at your own pace, and so that you can have the full attention of your guide for the duration of the tour.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Can I join another person/group’s tour?</Accordion.Header>
                <Accordion.Body>
                You cannot join another person/group’s tour.I am  only offer and advertise private tours, and the majority of my clients book with me for this very reason, so i am unable to add additional people to their tours.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>Do you offer bus tours?</Accordion.Header>
                <Accordion.Body>
                If you are looking for a tour for a large group,i can provide this for you.I organise guiding, transport and also do restaurant reservations. If you wish to get an offer, please write with me many details of your request to my email address via this page.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>What languages do you offer tours in?</Accordion.Header>
                <Accordion.Body>
                Generally i started  Buddy Tours with a focus on high-quality tours in Bengali, English,French.And i would love to offer tours in German.
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="6">
                <Accordion.Header>Do you Guide in Foreign Country?</Accordion.Header>
                <Accordion.Body>
                   Right Now i can offer you as a guide all over Bangladesh and India.
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="7">
                <Accordion.Header>Do i need book you before travel?</Accordion.Header>
                <Accordion.Body>
               Yes, you need to book with me as a guide before travel.Because i am working with tourist.So you will not know when i will be available if you don not book
                </Accordion.Body>
            </Accordion.Item>
            
        </Accordion>

       </div>
    );
};

export default Faq;