import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useTitle from '../../hooks/useTitle';

const Login = () => {
     
    const{signIn,githubAndGoogleSignIn}=useContext(AuthContext)
     useTitle("Login")
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                toast.success("You have Login successfully")
            })
            .catch(error => toast.error(error.message))
    }


    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        githubAndGoogleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success("SignIn with Google Successfull")
            })
            .catch(error => toast.error(error.message))
    }

    const handleGithubSignIn = (e) => {
        e.preventDefault()
        githubAndGoogleSignIn(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success("SignIn with Github Successfull")
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <Form onSubmit={handleSubmit}  className=" w-50 mt-5 shadow-lg p-3 rounded-4 mx-auto">

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Enter your password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
            Login
        </Button>
        <Link className='fs-3 ms-4 pe-auto'><FcGoogle onClick={handleGoogleSignIn} ></FcGoogle></Link>
        
        <Link className='fs-3 ms-4'><FaGithub onClick={handleGithubSignIn} ></FaGithub></Link>
            <br /> <br />
        <Link className='ms-3' to="/register">Don't have an account? Please Register</Link>
    </Form>
    );
};

export default Login;