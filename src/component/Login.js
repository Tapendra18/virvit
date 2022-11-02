import React, { useState } from 'react'
import Footer from './Footer'
import HeaderLanding from './HeaderLanding'
// import { NavLink } from "react-router-dom"
import "./Register.css"
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/login/";

const Login = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({});
    const [CandidateData, setCandidateData] = useState({});
    // const [show, setshow] = useState(true)
    const [isVisible, setVisible] = useState(false);
    // const [post, setPost] = React.useState(null);
    const [error, setError] = useState(false);
    const [Cerror, setCError] = useState(false);
    const [Merror, setMerror] = useState(false);
    const [Lerror, setLerror] = useState(false);
    const [LogUserError, setLogUserError] = useState(false);
    const [LogPassError, setLogPassError] = useState(false);
    const [passworderror, setpasswordError] = useState(false);
    const [Cpassworderror, setCpasswordError] = useState(false);
    // const [loginUser, setItem] = useState("");

    const toggle = () => {
        setVisible(!isVisible);
    };

    function isValidEmail(email) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/i.test(email)
    }
    const handleEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setError("email is invalid")
        } else setError(false);

        setData('username', e.target.value)
    }

    const ChandleEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setCError("email is invalid")
        } else setCError(false);

        setCandiData('username', e.target.value)
    }

    function passwordValidator(value) {
        return value.length >= 8 && /[A-Z]/.test(value) && /[a-zA-Z]/.test(value) && /[0-9]/.test(value)
    }
    const handlePaswword = (e) => {
        if (!passwordValidator(e.target.value)) {
            setpasswordError("password is not strong")
        } else setpasswordError(false)

        setData('password', e.target.value)
    }

    const ChandlePaswword = (e) => {
        if (!passwordValidator(e.target.value)) {
            setCpasswordError("password is not strong")
        }
        else setCpasswordError(false)

        setCandiData('password', e.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        formData['device_id'] = 1;
        if (getData('username').length === 0) {
            setLogUserError("please Enter email")
        }
        // if (getData('username').length<=10) {
        //     setLogUserError("proper email fill")
        // }
        if (getData('password').length === 0) {
            setLogPassError("please Enter the password")
        } if (getData('password').length <= 5) {
            setLogPassError("password greater than 6")
        }

        else {
            axios
                .post(baseURL, formData)
                .then((res) => {
                    //  console.log(res.formData))
                    window.localStorage.setItem("loginUser", JSON.stringify(res.data));
                    setTimeout(() => {
                        navigate("/candidate")
                    },);

                });
            console.log('Form Data', formData)
        }

    };

    const onSubmit = (event) => {
        event.preventDefault();
        CandidateData['device_id'] = 1;
        if (getCandiData('username').length === 0) {
            setMerror("Fill the Name");
        } if (getCandiData('password').length === 0) {
            setLerror("Fill the password")
        } if (getData('password').length <= 5) {
            setLogPassError("password greater than 6")
        }

        else {
            axios
                .post(baseURL, CandidateData)
                .then(data => console.log(data.data))
            localStorage.setItem("loginUser", JSON.stringify(CandidateData));
            navigate("/candidate")
                .catch(error => console.log(error));
            console.log('CandidateData', CandidateData)
        }
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
            <HeaderLanding/>
            {/* Tab>>>>> */}
            <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3 mt-5"
                fill
                
            >
                <Tab  eventKey="home" title="candidate Login">
                    {/* <Sonnet /> */}
                    <div className='container-fluid'>
                        <div className='row text-center'>
                            <div className='col-6 mt-5'>
                                <form className='mx-5 border border-bottom-0 rounded-5 border-2 border-primary' onSubmit={onFormSubmit}>
                                    <div className='row'>
                                        <div className='col-12 mt-5 mb-4'>
                                            <span className='header fs-5 fw-bold'>Login to start your search !</span>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 mx-5">
                                        <input type="text" id="form1Example1" value={getData('username')} onChange={handleEmail} placeholder='Email Login ID' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                                        {error && <h2 className='text-start mx-2' style={{ color: 'red', fontSize: 12, }}>{error}</h2>}
                                        {LogUserError && <h2 className='text-start mx-2' style={{ color: 'red', fontSize: 12, }}>{LogUserError}</h2>}
                                        <div className='position-relative'>
                                            <input type={!isVisible ? "password" : "text"} value={getData('password')} onChange={handlePaswword} id="form1Example2" placeholder='password' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4 position-relative" />
                                            {passworderror && <h2 className='text-start ' style={{ color: 'red', fontSize: 12, }}>{passworderror}</h2>}

                                            {LogPassError && <h2 className='text-start mx-2 ErrorValidation' style={{ color: 'red', fontSize: 12, animationDelay: "2s" }}>{LogPassError}</h2>}

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
                                                <label className="form-check-label Rem-me" htmlFor="form1Example3"> Remember me </label>
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
                </Tab>
                <Tab eventKey="profile" title="Employe Login">
                <div className='container-fluid mt-4'>
                        <div className='container'>
                            <div className='row text-center'>
                                <div className='col-6 mt-5'>
                                    <form className='mx-4 border border rounded-5 Bor-1 border-primary' onSubmit={onSubmit}>
                                        <div className="form mx-5">
                                            <input type="text" value={getCandiData('username')} onChange={ChandleEmail} placeholder='Email/Username' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                                            {Cerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12 }}>{Cerror}</h2>}
                                            {Merror && <h2 className='text-start' style={{ color: 'red', fontSize: 12 }}>{Merror}</h2>}

                                        </div>

                                        <div className="form mx-5 row position-relative">
                                            <input type={!isVisible ? "password" : "text"} value={getCandiData('password')} onChange={ChandlePaswword} id="form1Example2" placeholder='Password' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4 position-relative" />
                                            {Cpassworderror && <h2 className='text-start' style={{ color: 'red', fontSize: 12 }}>{Cpassworderror}</h2>}
                                            {Lerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12 }}>{Lerror}</h2>}
                                            <span className='position-absolute icon-Posi-1' onClick={toggle}>{isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                                        </div>

                                        <div className="row">
                                            <div className="col d-flex justify-content-start mx-5 mt-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="remember me" />
                                                    <label className="form-check-label Rem-me mx-2" htmlFor="form1Example3"> Remember me </label>
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
                </Tab>
            </Tabs>
            <Footer />
        </>
    )
}

export default Login    