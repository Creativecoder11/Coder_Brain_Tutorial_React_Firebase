import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaRoad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthProvider';


const Register = () => {
    const [error, setError] = useState('')
    const {createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            setError('')
            form.reset()
            handleUpdateUser(name, photoURL)
        })
        .catch(e => {
            console.log(error)
            setError(e.message)
        })

    }

    const handleUpdateUser = (name, photoURL ) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(e=>console.log(e))

    }
    return (
        <div className='container my-5 py-4' style={{ width: '25rem' }}>
            <h3 className='text-center'>Register Now</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Your Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
                <p className="my-3 text-center">
                    Already Registered?{" "}
                    <Link to="/login" className="text-dark">
                    Please Login
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;