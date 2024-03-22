import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const schema = yup.object().shape(
    {
        firstname: yup.string().required('**First name is required'),
        lastname: yup.string().required('**Last name is required'),
        email: yup.string().email('**Please enter the Valid email').required('**Email is required'),
        phonenumber:yup.string().required("**Phone Number is Required"),
        password: yup.string().required().min(6, "**Minimun 6 chars is Required").max(14, "**Enter upto 14 chars only"),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null])
    }
)

const Registration = () => {
    const Usenavigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    console.log(errors);

    // function to handle form submission
    const onSubmit = data => {
        axios.post('http://localhost:5066/api/OnlinePetShop/PostUser', data)
            .then(response => {
                // Handle success


                window.alert("Registration successfull", response.data);
                Usenavigate('/Login')
                // console.log('Registration successful', response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Registration failed', error);
            });

        // console.log(data);

    };



    return (
        <>
            <div className='registration-app'>
                <div className="registration-container">
                    <div className='registerHeader'>
                        <h2 data-testid='registration-heading'>Registration</h2>
                    </div>
                    <div className='registerform-container'>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input {...register('firstname')} placeholder='First Name.....' data-testid='firstnamefield'></input>
                            <p data-testid="nameerrormessage">{errors.firstname?.message}</p>

                            <input {...register('lastname')} placeholder='Last Name....' type='text' data-testid='lastnamefield'></input>
                            <p>{errors.lastname?.message}</p>

                            <input {...register('email')} type='email' placeholder='Email.....' data-testid='emailfield'></input>
                            <p>{errors.email?.message}</p>

                            <input {...register('phonenumber')} type='number' placeholder='PhoneNumber.....'></input>
                            <p>{errors.phonenumber?.message}</p>

                            <input {...register('password')} type='password' placeholder='Password.....' data-testid='passwordfield'></input>
                            <p>{errors.password?.message}</p>

                            <input {...register('confirmpassword')} type='password' placeholder='Confirm Password.....' data-testid='confirmpasswordfield'></input>
                            <p>{errors.confirmpassword?.message}</p>

                            <button data-id="registerbutton" className='btn btn-primary'>Register!</button>
                        </form>

                        <Link to="/"><button className='btn btn-success'>Back</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
