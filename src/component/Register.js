import React ,{useState}from 'react'
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
    const [ConfirmVisible, setconVisible] =useState(false);
    const [error , seterror] = useState(false)

    const toggle = ()=>{
        setVisible(!isVisible);
    }

    const toggleConfirm = ()=>{
        setconVisible(!ConfirmVisible);
    }

    const onSignupSubmit = (event) => {
        event.preventDefault();
        console.log('SignUpData', signupName)
       
        onSignupSubmit['device_1'] = 1;
        axios
        .post(baseURL,signupName)
        .then(data => console.log(data.data))
        .catch(error => console.log(error))
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
        console.log('EmpSignUpData', EmpsignupName)
        onSignupSubmit['device_1'] = 1;
        axios
        .post(baseURL,signupName)
        .then(data => console.log(data.data))
        .catch(error => console.log(error))       
    };

    const getEmpSignUpData = (key) => {
        return EmpsignupName.hasOwnProperty(key) ? EmpsignupName[key] : '';
    };

    const setEmpSignUpData = (key, value) => {
        return setEmpSignupName({ ...EmpsignupName, [key]: value });
    };

    function isValidEmail (email){
        return /\S+@\S+\.\S+/.test(email)
    }
  
    const handleEmail=(e)=>{
        if(!isValidEmail(e.target.value)){
            seterror("invalid email id");

        }else seterror(false)
        setSignUpData('email', e.target.value)

        // setSignUpData('First_name', e.target.value)
    }

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
                                   
                                    <input  type="text" value={getSignUpData('First_name')} onChange={handleEmail} placeholder='First Name' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75 mt-4'></input>
                                    <input type="text" value={getSignUpData('last_name')} onChange={(e) => setSignUpData('last_name', e.target.value)}  placeholder='Last Name' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75'></input>
                                    <input type="Email" value={getSignUpData('email')} onChange={handleEmail} placeholder='E-mail' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75' />
                                    {error && <h2 className='text-start' style={{color: 'red' ,fontSize:15 ,}}>{error}</h2>}

                                    <div className='row mt-1'>
                                        <div className='col-5'>
                                            <select className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-50' aria-label='default select example' value={getSignUpData('Gender')} onChange={(e) => setSignUpData('Gender', e.target.value)} >
                                                <option selected>Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>

                                            </select>
                                        </div>

                                        <div className='col-7'>
                                          <input value={getSignUpData('Dob')} onChange={(e) => setSignUpData('Dob', e.target.value)} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-n2' type='date' />
                                        </div>
                                    </div>

                                    <input type="tel" value={getSignUpData('mobile')}  onChange={(e) => setSignUpData('mobile', e.target.value)} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75' placeholder='Phone number' ></input>
                                    <select className='form-control mt-3 shadow-none  border-start-0 border-end-0 border-top-0 w-75' aria-label='default select example' value={getSignUpData('SkillList')} onChange={(e) => setSignUpData('SkillList', e.target.value)} >
                                        <option selected>Key Skills</option>
                                        <option value="c++">C++</option>
                                        <option value="html">Html</option>
                                        <option value="css">css</option>
                                        <option value="java script">Java Script</option>
                                    </select>

                                    <select className='form-control mt-3 shadow-none  border-start-0 border-end-0 border-top-0 w-75' aria-label='default select example' value={getSignUpData('job_Preference')} onChange={(e) => setSignUpData('job_Preference', e.target.value)} >
                                        <option selected>Job Preference</option>
                                        <option value="part time">Part Time</option>
                                        <option value="full time">Full Time</option>
                                        <option value="internship">Internship</option>
                                        <option value="Internship with job">Internship with job</option>
                                    </select>

                                    <select className='form-control mt-3 shadow-none  border-start-0 border-end-0 border-top-0 w-75' aria-label='default select example' value={getSignUpData('start_Work')} onChange={(e) => setSignUpData('start_Work', e.target.value)}>
                                        <option selected>Start Work</option>
                                        <option value="immediately">immediately</option>
                                        <option value="15 Days">15 Days</option>
                                        <option value="30 Days">30 Days</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <input type="file"  className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75' placeholder='resume' value={getSignUpData('resume')} onChange={(e) => setSignUpData('resume', e.target.value)} ></input>
                                    <div className='position-relative'>
                                    <input type={!isVisible ? "password" : "text"}  className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75 position-relative' placeholder='Password' value={getSignUpData('password')} onChange={(e) => setSignUpData('password', e.target.value)}></input>
                                    <span className='position-absolute icon-Posi-3' onClick={toggle}> {isVisible ? <AiFillEye/> : <AiFillEyeInvisible/>}</span> 
                                    <input type={!ConfirmVisible ? "password" : "text"} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-75 ' placeholder='Confirm Password' value={getSignUpData('cPassword')} onChange={(e) => setSignUpData('cPassword', e.target.value)}></input>
                                    <span className='position-absolute icon-Posi-2' onClick={toggleConfirm}>{ConfirmVisible ? <AiFillEye/> : <AiFillEyeInvisible/>}</span> 
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
                                        <input value={getEmpSignUpData('Email_id')} onChange={(e) => setEmpSignUpData('Email_id', e.target.value)} type="email"  placeholder='Email Login ID' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" required/>
                                    </div>

                                    <div className="form mx-5">
                                        <input value={getEmpSignUpData('Person_name')} onChange={(e) => setEmpSignUpData('Person_name', e.target.value)} type="text" id="form1Example2" placeholder='Contact Person Name' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" required />
                                    </div>

                                    <div className="form  mx-5">
                                        <input value={getEmpSignUpData('Number')} onChange={(e) => setEmpSignUpData('Number', e.target.value)} type="tel" id="form1Example2" placeholder='Phone Number' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" required/>
                                    </div>

                                    <div className="form mx-5 mb-3">
                                        <input value={getEmpSignUpData('Bussiness Name')} onChange={(e) => setEmpSignUpData('Bussiness Name', e.target.value)} type="text" id="form1Example2" placeholder='Register Bussiness Name' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" required/>
                                    </div>

                                    <div className="row ">
                                        <div className="col d-flex justify-content-start mx-5 mt-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="remember me" required/>
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