import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import './Register.css'
import { NavLink } from "react-router-dom"
import HeaderLanding from './HeaderLanding'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios'

const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/new-user-signup/";

const Navbar = () => {
    const [show, setshow] = useState(true);
    const [signupName, setSignupName] = useState({});
    const [EmpsignupName, setEmpSignupName] = useState({});
    const [isVisible, setVisible] = useState(false);
    const [ConfirmVisible, setconVisible] = useState(false);
    const [error, seterror] = useState(false)
    const [passworderror, setpasswordError] = useState(false);
    const [Cpassworderror, setCpasswordError] = useState(false);
    const [Eerror, setEError] = useState(false);
    const [skills, setskill] = useState([])
    const [job, setjob] = useState([])
    const [ferror, setFerror] = useState(false);
    const [lerror, setlerror] = useState(false);
    const [Emailerror, setEmailerror] = useState(false);
    const [Gendererror, setGendererror] = useState(false);
    const [DOBerror, setDOBerror] = useState(false);
    const [Mobileerror, setMobileerror] = useState(false);
    const [skillerror, setSkillerror] = useState(false)
    const [joberror, setJoberror] = useState(false)
    const [Workerror, setWorkerror] = useState(false)
    const [Resumeerror, setResumeerror] = useState(false);
    const [passerror, setpasserror] = useState(false);
    const [Cerror, setCerror] = useState(false);
    const [EmpEmailerror , setEmpEmailerror] = useState(false);
    const [Personerror , setPersonerror] = useState(false);
    const[Phoneerror , setPhoneerror] = useState(false)
    const[Registererror ,  setRegistererror] = useState(false)


    const toggle = () => {
        setVisible(!isVisible);
    }

    const toggleConfirm = () => {
        setconVisible(!ConfirmVisible);
    }

    const onSignupSubmit = (event) => {
        event.preventDefault();

        signupName['device_1'] = 1;
        EmpsignupName['device_1'] = 1;
        if (getSignUpData('first_name').length === 0) {
            setFerror("enter first Name")
        } if (getSignUpData('last_name').length === 0) {
            setlerror("enter last Name")
        } if (getSignUpData('email').length === 0) {
            setEmailerror("enter email")
        } if (getSignUpData('Gender').length === 0) {
            setGendererror("enter gender")
        } if (getSignUpData('Dob').length === 0) {
            setDOBerror("enter DOB")
        } if (getSignUpData('mobile').length === 0) {
            setMobileerror("enter Mobile Number")
        } if (getSignUpData('skill').length === 0) {
            setSkillerror("Enter skill ")
        } if (getSignUpData('job_Preference').length === 0) {
            setJoberror("enter job")
        } if (getSignUpData('start_Work').length === 0) {
            setWorkerror("enter Work ")
        } if (getSignUpData('resume').length === 0) {
            setResumeerror("enter resume")
        } if (getSignUpData('password').length === 0) {
            setpasserror("enter password")
        } if (getSignUpData('cPassword').length === 0) {
            setCerror("enter Confirm password")
        }
        else {
            axios
                .post(baseURL, signupName)
                .then(data => console.log(data.data))
                .catch(error => console.log(error))
            console.log('SignUpData', signupName)
        }
        // Submit here
    };

    const getSignUpData = (key) => {
        return signupName.hasOwnProperty(key) ? signupName[key] : '';
    };

    const setSignUpData = (key, value) => {
        return setSignupName({ ...signupName, [key]: value });
    };

    // last Name>>>>>>>

    const onEmpSignUpSubmit = (event) => {
        event.preventDefault();

        EmpsignupName['device_1'] = 1;
        if (getEmpSignUpData('Email_id').length === 0) {
            setEmpEmailerror("enter Name")
        } if (getEmpSignUpData('Person_name').length === 0) {
            setPersonerror("enter person Name")
        } if (getEmpSignUpData('Number').length === 0) {
            setPhoneerror("enter Number")
        } if (getEmpSignUpData('Bussiness Name').length === 0) {
            setRegistererror("enter Register Bussiness name")
        }else{
        axios
            .post(baseURL, EmpsignupName)
            .then(data => console.log(data.data))
            .catch(error => console.log(error))
        console.log('EmpSignUpData', EmpsignupName)}
    };

    const getEmpSignUpData = (key) => {
        return EmpsignupName.hasOwnProperty(key) ? EmpsignupName[key] : '';
    };

    const setEmpSignUpData = (key, value) => {
        return setEmpSignupName({ ...EmpsignupName, [key]: value });
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email)
    }

    const handleEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            seterror("invalid email id");

        } else seterror(false)
        setSignUpData('email', e.target.value)

        // setSignUpData('First_name', e.target.value)
    }

    function passwordValidator(value) {
        return value.length >= 8 && /[A-Z]/.test(value) && /[^a-zA-Z]/.test(value) && /[0-9]/.test(value)
    }
    const handlePassword = (e) => {
        if (!passwordValidator(e.target.value)) {
            setpasswordError("password is not strong")
        } else setpasswordError(false)

        setSignUpData('password', e.target.value)
    }

    function CpasswordValidator(value) {
        return value.length >= 8 && /[A-Z]/.test(value) && /[^a-zA-Z]/.test(value) && /[0-9]/.test(value)
    }
    const ChandlePassword = (e) => {
        if (!CpasswordValidator(e.target.value)) {
            setCpasswordError("password is not strong")
        } else setCpasswordError(false)

        setSignUpData('cPassword', e.target.value)
    }
    // Emp validation>>>>>>

    function isValidEmpEmail(email) {
        return /\S+@\S+\.\S+/.test(email)
    }

    const EmphandleEmail = (e) => {
        if (!isValidEmpEmail(e.target.value)) {
            setEError("invalid email id");

        } else setEError(false)
        setEmpSignUpData('Email_id', e.target.value)

        // setSignUpData('First_name', e.target.value)
    }

    useEffect(function () {
        axios.get("https://virvit.mydevpartner.website/vvapi/v1/skill/")
            .then((response) => setskill(response.data.results))
            .catch((error) => console.log(error))

        axios.get("https://virvit.mydevpartner.website/vvapi/v1/job-preference/")
            .then((response) => setjob(response.data.results))
            .catch((error) => console.log(error))
    }, [])


    return (
        <>
            <HeaderLanding />
            {/* Form part >>>>>> */}
            <nav className='Nav-top'>
                <ul className="d-flex align-items-center justify-content-center">
                    <li className="ListRemove mx-3">
                        <NavLink onClick={() => setshow(true)} className="text-decoration-none btn-1">Candidate signup</NavLink>
                    </li>
                    <li className="ListRemove">
                        <NavLink onClick={() => setshow(false)} className="text-decoration-none btn-1"> employer signup</NavLink>
                    </li>
                </ul>
            </nav>

            {
                show ? <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <form onSubmit={onSignupSubmit} >
                                <div className='mx-5'>

                                    <input type="text" value={getSignUpData('first_name')} onChange={(e) => setSignUpData('first_name', e.target.value)} placeholder='First Name' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75 mt-4' />
                                    {/* {error && <h2 className='text-start' style={{ color: 'red', fontSize: 15, }}>{error}</h2>} */}
                                    {ferror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{ferror}</h2>}

                                    <input type="text" value={getSignUpData('last_name')} onChange={(e) => setSignUpData('last_name', e.target.value)} placeholder='Last Name' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75' />
                                    {lerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{lerror}</h2>}

                                    <input type="Email" value={getSignUpData('email')} onChange={handleEmail} placeholder='E-mail' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75' />
                                    {error && <h2 className='text-start' style={{ color: 'red', fontSize: 15, }}>{error}</h2>}
                                    {Emailerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Emailerror}</h2>}

                                    <div className='row mt-1'>
                                        <div className='col-5'>
                                            <select className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-50' aria-label='default select example' value={getSignUpData('Gender')} onChange={(e) => setSignUpData('Gender', e.target.value)}>
                                                <option selected>Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                            {Gendererror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Gendererror}</h2>}
                                        </div>

                                        <div className='col-7'>
                                            <input value={getSignUpData('Dob')} onChange={(e) => setSignUpData('Dob', e.target.value)} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-n2' type='date' placeholder='year of birth' minDate={new Date()} format="yyyy-MM-DD" />
                                            {DOBerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{DOBerror}</h2>}
                                        </div>
                                    </div>

                                    <input type="tel" value={getSignUpData('mobile')} onChange={(e) => setSignUpData('mobile', e.target.value)} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75' placeholder='Phone number' />
                                    {Mobileerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Mobileerror}</h2>}

                                    <select className='form-control mt-3 shadow-none  border-start-0 border-end-0 border-top-0 w-75' aria-label='default select example' value={getSignUpData('skill')} onChange={(e) => setSignUpData('skill', e.target.value)} >
                                        <option >skills</option>
                                        {
                                            skills.map((skill) => (
                                                <option key={skill.id} value={skill.id}>
                                                    {skill.name}
                                                </option>))
                                        }
                                    </select>
                                    {skillerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{skillerror}</h2>}

                                    <select className='form-control mt-3 shadow-none  border-start-0 border-end-0 border-top-0 w-75' aria-label='default select example' value={getSignUpData('job_Preference')} onChange={(e) => setSignUpData('job_Preference', e.target.value)} >
                                        <option selected>Job Preference</option>
                                        {
                                            job.map((jobs) => (
                                                <option key={jobs.id} value={jobs.id}>
                                                    {jobs.name}
                                                </option>))
                                        }
                                    </select>
                                    {joberror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{joberror}</h2>}

                                    <select className='form-control mt-3 shadow-none  border-start-0 border-end-0 border-top-0 w-75' aria-label='default select example' value={getSignUpData('start_Work')} onChange={(e) => setSignUpData('start_Work', e.target.value)}>
                                        <option selected>Start Work</option>
                                        <option value="immediately">immediately</option>
                                        <option value="15 Days">15 Days</option>
                                        <option value="30 Days">30 Days</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {Workerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Workerror}</h2>}

                                    <input type="file" accept="application/pdf,application/msword" className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75' placeholder='resume' value={getSignUpData('resume')} onChange={(e) => setSignUpData('resume', e.target.value)} />
                                    {Resumeerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Resumeerror}</h2>}

                                    <div className='position-relative'>
                                        <input type={!isVisible ? "password" : "text"} Name="password1" className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75 position-relative' placeholder='Password' value={getSignUpData('password')} onChange={handlePassword} />
                                        <span className='position-absolute icon-Posi-3' onClick={toggle}> {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                                        {passworderror && <h2 className='text-start' style={{ color: 'red', fontSize: 15, }}>{passworderror}</h2>}
                                        {passerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{passerror}</h2>}

                                        <input type={!ConfirmVisible ? "password" : "text"} Name="password2" className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75 ' placeholder='Confirm Password' value={getSignUpData('cPassword')} onChange={ChandlePassword} />
                                        <span className='position-absolute icon-Posi-2' onClick={toggleConfirm}>{ConfirmVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                                        {Cpassworderror && <h2 className='text-start' style={{ color: 'red', fontSize: 15, }}>{Cpassworderror}</h2>}
                                        {Cerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Cerror}</h2>}

                                    </div>

                                </div>

                                <div className='col-9 text-center'>
                                    <button type="submit" className=" btn1 mt-5">Register</button>
                                    <div className=''>
                                        <p className=' fs-6 fw-lighter mt-3'>By continuing you acknowledge that you accept virVit's</p>
                                        <p className='fs-6 fw-lighter'><a className='text-decoration-none footer-a' href='/'>Privacy Policies</a> and  <a className='text-decoration-none footer-a' href='/'>Terms & Conditions</a></p>
                                    </div>
                                </div>

                            </form>
                        </div>
                        {/* Right Image >>>>>>> */}
                        <div className="col-6 mt-5">
                            <img className="right-image" src='./image/Can_Reg.png' alt='Candidate' />
                        </div>
                    </div>
                </div>

                    : <div className='container-fluid'>
                        <div className='row text-center'>
                            <div className='col-6'>
                                <form className='mx-5 border border-bottom-0 rounded-5 border-2 mt-4 border-primary' onSubmit={onEmpSignUpSubmit}>
                                    <div className='row'>
                                        <div className='col-12 mt-4'>
                                            <span className='header fs-5 fw-bold'>Journey To Find The Right Candidate !</span>
                                            <p>create your Employers account now</p>
                                        </div>
                                    </div>

                                    <div className="form mx-5">
                                        <input value={getEmpSignUpData('Email_id')} onChange={EmphandleEmail} type="email" placeholder='Email Login ID' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                                        {Eerror && <h2 className='text-start' style={{ color: 'red', fontSize: 15, }}>{Eerror}</h2>}
                                       {EmpEmailerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{EmpEmailerror}</h2>}

                                    </div>

                                    <div className="form mx-5">
                                        <input value={getEmpSignUpData('Person_name')} onChange={(e) => setEmpSignUpData('Person_name', e.target.value)} type="text" id="form1Example2" placeholder='Contact Person Name' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                                       {Personerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Personerror}</h2>}

                                    </div>

                                    <div className="form  mx-5">
                                        <input value={getEmpSignUpData('Number')} onChange={(e) => setEmpSignUpData('Number', e.target.value)} type="tel" id="form1Example2" placeholder='Phone Number' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                                       {Phoneerror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Phoneerror}</h2>}
                                    </div>

                                    <div className="form mx-5 mb-3">
                                        <input value={getEmpSignUpData('Bussiness Name')} onChange={(e) => setEmpSignUpData('Bussiness Name', e.target.value)} type="text" id="form1Example2" placeholder='Register Bussiness Name' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4"/>
                                       {Registererror && <h2 className='text-start' style={{ color: 'red', fontSize: 12, }}>{Registererror}</h2>}
                                    </div>

                                    <div className="row ">
                                        <div className="col d-flex justify-content-start mx-5 mt-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="remember me" />
                                                <span className=' fs-10 fw-lighter mt-3'>By continuing you acknowledge that you accept virVit's</span>
                                                <p className='fs-6 fw-lighter'><a className='text-decoration-none footer-a' href='/'>Privacy Policies</a> and  <a className='text-decoration-none footer-a' href='/'>Terms & Conditions</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn1 w-50 mb-5 ">Register</button>
                                </form>
                            </div>
                            {/* Image >>>>>> */}
                            <div className="col-6 mt-5">
                                <img className='w-100 h-100' src='./image/employer_signup.png' alt='Candidate' />
                            </div>
                        </div>
                    </div>
            }
            {/* footer>>>>>>>> */}

            <Footer />
        </>
    )
}

export default Navbar