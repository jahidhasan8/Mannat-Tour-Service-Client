import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AddService = () => {

    const handleAddService=(e)=>{
      e.preventDefault()
      const form=e.target 
      const name=form.name.value 
      const image=form.image.value
      const description=form.description.value 
      const price=form.price.value
    //   console.log(name, image, description,price);

      const service = {
        name,
        price,
        image,
        description
      };
  
      fetch("http://localhost:5000/services", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(service)
      }).then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast.success("New Service added Successfully ");
            form.reset()

        } else {
          toast.error(data.error);
        }
      })
      .catch(error => {
        toast.error(error.message);
      })
    }
    return (
        <div>
            <Form onSubmit={handleAddService} className=" w-50 mt-4 shadow-lg p-3 rounded-4 mx-auto">
                <p className='text-center fw-semibold fs-5'>Please Add new Service</p>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label> Name</Form.Label>
                    <Form.Control type="text"  name='name' placeholder="Enter service name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text"  name='image' placeholder="Enter your photo url" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name='price' placeholder="Enter Price" />
                </Form.Group>
                <>

                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                        <Form.Control
                            as="textarea"  name='description'
                            placeholder="Leave a Text here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </>
                <Button className='mt-3' variant="primary" type="submit">
                    Add Service
                </Button>
            </Form>
        </div>
    );
};

export default AddService;