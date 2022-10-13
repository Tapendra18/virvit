import React, { useState } from 'react'
import Footer from './Footer'
import HeaderLanding from './HeaderLanding'
import { NavLink } from "react-router-dom"
import "./Register.css"
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios'

const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/login/";

const Login = () => {

    const [formData, setFormData] = useState({});
    const [CandidateData, setCandidateData] = useState({});
    const [show, setshow] = useState(true)
    const [isVisible, setVisible] = useState(false);
    // const [post, setPost] = React.useState(null);
    const toggle = () => {
        setVisible(!isVisible);
    };

    // const getMyPostData = async () => {
        
    // }

    // useEffect(() => {
    //     getMyPostData();
    // }, [])

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('EmployeData', formData)
        formData['device_id'] = 1;
        axios
        .post(baseURL, formData)
        .then(formData => console.log(formData.formData))
        .catch(error => console.log(error));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('CandidateData', CandidateData)
        CandidateData['device_id'] = 1;
        axios
        .post(baseURL,CandidateData)
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
        
    };

    const getData = (key) => {
        return formData.hasOwnProperty(key) ? formData[key] : '';
    };

    const setData = (key, value) => {
        return setFormData({ ...formData, [key]: value });
    };

    const getCandiData = (key) => {
        return CandidateData.hasOwnProperty(key) ? CandidateData[key] : '';
    };

    const setCandiData = (key, value) => {
        return setCandidateData({ ...CandidateData, [key]: value });
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
                            <form className='mx-5 border border-bottom-0 rounded-5 border-2 border-primary' onSubmit={onFormSubmit}>
                                <div className='row'>
                                    <div className='col-12 mt-5 mb-4'>
                                        <span className='header fs-5 fw-bold'>Login to start your search !</span>
                                    </div>
                                </div>

                                <div className="form-outline mb-4 mx-5">
                                    <input type="text" id="form1Example1" value={getData('username')} onChange={(e) => setData('username', e.target.value)} placeholder='Email Login ID' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" required />
                                    <div className='position-relative'>
                                        <input type={!isVisible ? "password" : "text"} value={getData('password')} onChange={(e) => setData('password', e.target.value)} id="form1Example2" placeholder='password' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4 position-relative" required />
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
                                    <form className='mx-4 border border rounded-5 Bor-1 border-primary' onSubmit={onSubmit}>
                                        <div className="form mx-5">
                                            <input type="text" value={getCandiData('Email')} onChange={(e) => setCandiData('Email', e.target.value)} placeholder='Email/Username' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" required />
                                        </div>

                                        <div className="form mx-5 row position-relative">
                                            <input type={!isVisible ? "password" : "text"} value={getCandiData('Candipassword')} onChange={(e) => setCandiData('Candipassword', e.target.value)} id="form1Example2" placeholder='Password' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4 position-relative" required />
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

export default Login    