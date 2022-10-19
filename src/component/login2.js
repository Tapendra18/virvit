import React, { useState } from 'react'
import Footer from './Footer'
import HeaderLanding from './HeaderLanding'
import { NavLink } from "react-router-dom"
import "./Register.css"
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
// import axios from 'axios'

// const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/login/";

const Login2 = () => {
    const [isVisible, setVisible] = useState(false);
    const [show, setshow] = useState(true)

    
        const [inputValues, setInputValue] = useState({
        //   fName: '',
        //   lName: '',
          email: '',
          password: '',
        //   confirmPassword: '',
        });
        const [validation, setValidation] = useState({
            // fName: '',
            // lName: '',
            email: '',
            password: '',
            // confirmPassword: '',
          });
        
          //handle submit updates
          function handleChange(event) {
            const { name, value } = event.target;
            setInputValue({ ...inputValues, [name]: value });
          }
        
          const handleSubmit = (e) => {
            e.preventDefault();
            let errors = validation;
        
            //first Name validation
            // if (!inputValues.fName.trim()) {
            //   errors.fName = 'First name is required';
            // } else {
            //   errors.fName = '';
            // }
            //last Name validation
            // if (!inputValues.lName.trim()) {
            //   errors.lName = 'Last name is required';
            // } else {
            //   errors.lName = '';
            // }
        
            // email validation
            const emailCond =
              "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
            if (!inputValues.email.trim()) {
              errors.email = 'Email is required';
            } else if (!inputValues.email.match(emailCond)) {
              errors.email = 'Please ingress a valid email address';
            } else {
              errors.email = '';
            }
        
            //password validation
            const cond1 = '/^(?=.*[a-z]).{6,20}$/';
            const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
            const cond3 = '/^(?=.*[0-9]).{6,20}$/';
            const password = inputValues.password;
            if (!password) {
              errors.password = 'password is required';
            } else if (password.length < 6) {
              errors.password = 'Password must be longer than 6 characters';
            } else if (password.length >= 20) {
              errors.password = 'Password must shorter than 20 characters';
            } else if (!password.match(cond1)) {
              errors.password = 'Password must contain at least one lowercase';
            } else if (!password.match(cond2)) {
              errors.password = 'Password must contain at least one capital letter';
            } else if (!password.match(cond3)) {
              errors.password = 'Password must contain at least a number';
            } else {
              errors.password = '';
            }
        
            //matchPassword validation
            // if (!inputValues.confirmPassword) {
            //   errors.confirmPassword = 'Password confirmation is required';
            // } else if (inputValues.confirmPassword !== inputValues.Password) {
            //   errors.confirmPassword = 'Password does not match confirmation password';
            // } else {
            //   errors.password = '';
            // }
        
            return setValidation(errors);
          };


    const toggle = () => {
        setVisible(!isVisible);
    };

 

        return (
            <>
                <HeaderLanding />
                {/* Tab>>>>> */}
                <nav className='Nav-top'>
                    <ul className="d-flex align-items-center justify-content-center">
                        <li className="ListRemove mx-3">
                            <NavLink onClick={() => setshow(true)} className="text-decoration-none"> employe login</NavLink>
                        </li>
                        <li className="ListRemove">
                            <NavLink onClick={() => setshow(false)} className="text-decoration-none">Candidate login</NavLink>
                        </li>
                    </ul>
                </nav>

                {
                    show ? <div className='container-fluid'>
                        <div className='row text-center'>
                            <div className='col-6 mt-5'>
                                <form className='mx-5 border border-bottom-0 rounded-5 border-2 border-primary' onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className='col-12 mt-5 mb-4'>
                                            <span className='header fs-5 fw-bold'>Login to start your search !</span>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 mx-5">
                                        <input type="text" id="form1Example1" onChange={(e) => handleChange(e)}
                                            value={inputValues.email}
                                            placeholder='Email Login ID' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                                            {validation.email && <p>{validation.email}</p>}
                                        <div className='position-relative'>
                                            <input type={!isVisible ? "password" : "text"} onChange={(e) => handleChange(e)}
                                                value={inputValues.password}
                                                id="form1Example2" placeholder='password' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4 position-relative"/>
                                                {validation.password && <p>{validation.password}</p>}

                                            <span className='position-absolute icon-Posi' onClick={toggle}>{isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 mx-5">
                                    </div>

                                    <div className='row'>
                                        <div className="col d-flex justify-content-end mx-4">
                                            <a className='text-decoration-none mx-4 fw-normal fs-6' href="/changepassword">Forgot password ?</a>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-start mx-5 mt-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="remember me" />
                                                <label className="form-check-label Rem-me" for="form1Example3"> Remember me </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn1 w-75 mb-5">Login</button>
                                </form>
                            </div>
                            {/* Image >>>>>> */}
                            <div className="col-6 mt-5">
                                <img className='w-100 mt-5' src='./image/hiring-process2.png' alt='Candidate' />
                            </div>
                        </div>
                    </div>
                        :
                        <div className='container-fluid mt-4'>
                            <div className='container'>
                                <div className='row text-center'>
                                    <div className='col-6 mt-5'>
                                        <form className='mx-4 border border rounded-5 Bor-1 border-primary'>
                                            <div className="form mx-5">
                                                <input type="text" placeholder='Email/Username' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />

                                            </div>

                                            <div className="form mx-5 row position-relative">
                                                <input type={!isVisible ? "password" : "text"} id="form1Example2" placeholder='Password' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4 position-relative" />


                                                <span className='position-absolute icon-Posi-1' onClick={toggle}>{isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                                            </div>

                                            <div className="row">
                                                <div className="col d-flex justify-content-start mx-5 mt-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="remember me" />
                                                        <label className="form-check-label Rem-me mx-2" for="form1Example3"> Remember me </label>
                                                        <a className='text-decoration-none mx-4 fw-normal' href="#!">Forgot password ?</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn1 w-75 mt-2 mb-3">Login</button>
                                        </form>
                                    </div>
                                    {/* Image >>>>>> */}
                                    <div className="col-6 d-flex justify-content-end">
                                        <img className='w-75 h-100' src='./image/Candidate_Login.png' alt='Candidate' />
                                    </div>
                                </div>
                            </div>

                            <div className='row mx-5 mt-4 bor-2'>
                                <div className='col-6 rounded-4 text-left CandiLog text-white'>
                                    <span className='d-block mt-3 mx-5 fw-bold '>New Here ?</span>
                                    <span className='d-block mx-5'>create your profile & start building your dreams</span>
                                    <a className='text-white mx-5' href="/register">Register Now</a>
                                </div>

                                <div className='col-6 text-white rounded-4 CandiLog'>
                                    <span className='d-block text-center mt-2'>Your dream job is one click away!</span>
                                    <span className='text-center d-block mb-2'>Get the app on the mobile app</span>
                                    <div className=' d-flex justify-content-center mb-1'>
                                        <img className='w-25 h-25 mx-3' src='./image/google_store.png' alt='google_store' />
                                        <img className='w-25 h-25' src='./image/ios_store.png' alt='ios_store' />
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                <Footer />
            </>
        )
    
}
    export default Login2    