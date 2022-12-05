import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/Auth/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const {providerLogin, signIn, loginGithub } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
            setError('')
            navigate(from,{replace: true})
        })
        .catch(e=> {
            console.log(e)
            setError(e.message)
        })
    }
    
    const handleGoogleSignIn =( ) =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            toast.success('Login Successfull!');
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    const handelGithubLogin = () => {
        loginGithub(gitHubProvider)
          .then((res) => {
            const user = res.user;
            navigate(from, { replace: true });
            toast.success('Login Successfull!');
            console.log(user);
          })
          .catch((e) => {
            console.error(e);
          });
      };
    return (
        <div className='container my-5 py-4' style={{ width: '25rem' }}>
            <h3 className='text-center'>Please Login</h3>
            <Form  onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
                    <p className="my-3 text-center">
                        New Here?{" "}
                        <Link to="/register" className="text-dark">
                        Create a New Account
                        </Link>
                    </p>
                <Form.Group className="text-center">
                    <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle>SignIn With Google</Button>
                    <Button  onClick={handelGithubLogin} className='mt-3' variant="outline-dark"><FaGithub></FaGithub>SignIn With GitHub</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;