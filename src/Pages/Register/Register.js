import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUser } = useContext(AuthContext)
     useTitle("Register")
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                toast.success("You have Register successfully")
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <Form onSubmit={handleSubmit} className=" w-50 mt-5 shadow-lg p-3 rounded-4 mx-auto">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Enter your password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>


            <Link className='ms-3 ' to="/login">Already have an account? Please login</Link>
        </Form>
    );
};

export default Register;