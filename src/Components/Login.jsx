import React, { useState } from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// React form  hook schema validation

const schema = yup.object().shape(
    {
        email: yup.string().email("**Invalid Email address").required("**Email is required"),
        password: yup.string().required("**Password is Required").min(6, "**Minmun 6 chars is Required").max(14, "**Enter upto 14 chars is ")
    }
)

// created a login function to validate the user.

const Login = ({ setIsLoading }) => {

    // Calling the below  functions will help us in accessing our data and error messages using hooks.

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const Usenavigate = useNavigate();

    // const [timeout, setTimedout] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setTimedout(true);
    //     }, logintimeout);

    //     return () => clearTimeout(timer);
    // }, [logintimeout]);
    

    const onSubmit = data => {
        setIsLoading(true);

        axios.post('http://localhost:5066/api/OnlinePetShop/Checkuser', data)
            .then(response => {
                // Handle success
                // window.alert("Login successfull");

                console.log('Registration successful', response.data);
                Usenavigate('/home')

            })
            .catch(error => {
                // Handle error
                // console.error('Login failed', error);

                // failerlogin();
                window.alert("User not found");

            })
            .finally(() => setIsLoading(false)); //set loading false after completing all process of from submition
    };

    // const [fail, setFail] = useState('');

    // const failerlogin = () => {
    //     setFail(console.log("Invalid  Username or Password"));

    // }

    return (
        <>
            {/* {timeout ? (<div>Time occured</div>) : ( */}
                <div className='login-app'>
                    <div className='login-container'>
                        <div className="loginform-container">
                            <div className="login-header">
                                <h2 data-testid="loginheader">Login</h2>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <a href='#' data-testid="nameicon">{<PersonIcon />}</a>
                                    <input data-testid="emailfield" {...register('email')} type='email' placeholder='Enter you email....'></input>
                                </div>
                                <p>{errors.email?.message}</p>
                                <div>
                                    <a href='#' data-testid="passwordicon">{<KeyIcon />}</a>
                                    <input data-testid="passwordfield" {...register('password')} type='password' placeholder='Enter your password...'></input>
                                </div>
                                <p>{errors.password?.message}</p>
                                <div className='button-login'>
                                    <button data-testid="loginbutton" className='btn btn-primary' >Login</button>
                                </div>
                            </form>
                            {/* <label style={{ color: 'white' }}>{fail}</label> */}
                        </div>

                    </div>

                </div>
            {/* )}; */}
        </>
    )
}

export default Login
