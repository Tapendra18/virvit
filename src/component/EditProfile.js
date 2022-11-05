import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import HeaderEdit from './HeaderEdit'
import Privacy from "./Privacy"
import axios from 'axios'
import { HiOutlinePaperClip } from "react-icons/hi";
import { FaUpload } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai"
import { MdOutlineCancelPresentation } from "react-icons/md"
// import { NavLink } from "react-router-dom"
// import { Link } from "react-router-dom"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const Home = () => {
    const [job, setjob] = useState([]);
    const [skills, setskill] = useState([]);
    const [country, setcountry] = useState([]);
    const [state, setstate] = useState([]);
    const [val, setval] = useState([]);
    const [work, setwork] = useState([]);
    // const [show, setshow] = useState(true)

    const data = JSON.parse(window.localStorage.getItem('loginUser'))

    const handleadd = (e) => {
        // e.preventDefault()
        const abc = [...val, []]
        setval(abc);
        // e.preventDefault();
    }

    let handlecancel = (i) => {
        // e.preventDefault();
        let newFormValues = [...val];
        newFormValues.splice(i, 1);
        setval(newFormValues)
    }

    let handlecancel2 = (i) => {
        // e.preventDefault();
        let newFormValues = [...work];
        newFormValues.splice(i, 1);
        setwork(newFormValues);
    }

    const handlework = (e) => {
        const exp = [...work, []]
        setwork(exp);
    }

    useEffect(function () {
        axios.get("https://virvit.mydevpartner.website/vvapi/v1/job-preference/")
            .then((response) => setjob(response.data.results))
            .catch((error) => console.log(error))

        axios.get("https://virvit.mydevpartner.website/vvapi/v1/skill/")
            .then((response) => setskill(response.data.results))
            .catch((error) => console.log(error))

        axios.get("https://virvit.mydevpartner.website/vvapi/v1/state/")
            .then((response) => setcountry(response.data.results))
            .catch((error) => console.log(error))

        axios.get("https://virvit.mydevpartner.website/vvapi/v1/country/")
            .then((response) => setstate(response.data.results))
            .catch((error) => console.log(error))
    }, [])
    return (
        <>
            <HeaderEdit />
            <div className='Div-top'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Edit Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Privacy</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className='edit_cont mt-2'>
                                        <div className=' d-flex'>
                                            <div className='col-6 '>
                                                <form className=''>
                                                    <div>
                                                        <div className='d-flex'>
                                                            <input type="text" placeholder='First Name' value={data.first_name} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' />
                                                            <input type="text" placeholder='last Name' value={data.last_name} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mx-4' />

                                                        </div>
                                                        <div className='d-flex'>
                                                            <input type="email" placeholder='Email' value={data.email} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' />
                                                            <input type="tel" placeholder='Mobile Number' value={data.mobile} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mx-4' />
                                                        </div>
                                                        <div className='d-flex'>
                                                            <input type="text" placeholder='designation' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50' />
                                                            <input type="date" value={data.dob} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-4' />
                                                        </div>

                                                        <div className='d-flex justify-content-between '>
                                                            <select className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-50' aria-label='default select example'>
                                                                <option selected>{data.gender}</option>
                                                                {/* <option value="1">Male</option>
                                                                  <option>Female</option> */}
                                                            </select>
                                                            <select className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-4'>
                                                                <option selected> Employment Type</option>
                                                            </select>

                                                        </div>

                                                        <div className='d-flex justify-content-between '>
                                                            <select className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-50' aria-label='default select example'>
                                                                <option selected>Job Preference</option>
                                                                {
                                                                    job.map((jobs) => (
                                                                        <option key={jobs.id} value={jobs.id}>
                                                                            {jobs.name}
                                                                        </option>))
                                                                }
                                                            </select>

                                                            <select className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-3'>
                                                                <option selected>{data.salary}</option>
                                                            </select>

                                                            <select className='form-control form-control-sm mt-3 shadow-none borber border-2'>
                                                                <option>USD</option>
                                                                <option>INR</option>
                                                                <option>SGD</option>
                                                            </select>
                                                        </div>

                                                        <div className='d-flex justify-content-between '>
                                                            <select className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-100' aria-label='default select example'>
                                                                <option selected>{data.experience}</option>
                                                                {/* <option value="1">0-1 Year</option>
                                          <option>2 Year</option>
                                          <option>3 Year</option>
                                          <option>4 Year</option>
                                          <option>5 Year</option>
                                          <option>Other</option> */}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className='col-3 Edit-pho'>
                                                <img src='./image/Employer_login.png' className='rounded-circle Edit-img' alt='image1'></img>
                                                <button className='btn1 mt-3'>SAVED</button>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-12'>
                                                <input type="text" placeholder='About Me' value={data.about} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50' required></input>
                                            </div>
                                        </div>

                                        {/*>>>>>>> dyanamic from <<<<<<<< */}
                                        <div className='col-12 d-flex'>
                                            <div className='col-6'>
                                                <form className='rounded-4 mt-5 border-2 border'>
                                                    <div className='d-flex justify-content-between mb-5 border-bottom'>
                                                        <p className='mx-3 mt-3'>Add Education</p>
                                                        <i className='icons-class mt-2 mb-2' onClick={() => handleadd()}> <AiFillPlusCircle /></i>
                                                    </div>

                                                    <form className='w-100 form-size'>
                                                        {val.map((data, i) => {
                                                            return (
                                                                <div className='col-12'>
                                                                    <form className='border border rounded-5 border-1 border-dark border-1 mt-3 mb-4 form2-size'>
                                                                        <div className='row'>
                                                                            <div className='col-12 mt-4 mx-2 d-flex justify-content-between'>
                                                                                <span className='header fs-5 fw-normal mt-1'>Education!</span>
                                                                                <i className='icons-class2' onClick={() => handlecancel()}> <MdOutlineCancelPresentation /></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form  mx-2">
                                                                            <input type="email" id="form1Example1" placeholder='Title' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                        </div>

                                                                        <div className="form  mx-2">
                                                                            <input type="text" id="form1Example2" placeholder='University' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                        </div>

                                                                        <div className='container'>
                                                                            <div className='row '>
                                                                                <div className='col-6'>
                                                                                    <select type="text" id="form1Example2" placeholder='Country' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1">
                                                                                        <option>country</option>
                                                                                        {
                                                                                            country.map((countrys) => (
                                                                                                <option key={countrys.id} value={countrys.id}>
                                                                                                    {countrys.name}
                                                                                                </option>))
                                                                                        }
                                                                                    </select>
                                                                                </div>
                                                                                <div className='col-6'>
                                                                                    <select type="text" id="form1Example2" placeholder='State' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1">
                                                                                        <option>State</option>
                                                                                        {
                                                                                            state.map((states) => (
                                                                                                <option key={states.id} value={states.id}>
                                                                                                    {states.name}
                                                                                                </option>
                                                                                            ))
                                                                                        }
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className='container'>
                                                                            <div className='row '>
                                                                                <div className='col-6'>
                                                                                    <input type="date" id="form1Example2" placeholder='Start Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                </div>
                                                                                <div className='col-6'>
                                                                                    <input type="date" id="form1Example2" placeholder='End Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <hr className=''></hr>

                                                                        <div className="form  mx-2">
                                                                            <input type="email" id="form1Example1" placeholder='Title' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                        </div>

                                                                        <div className="form  mx-2">
                                                                            <input type="text" id="form1Example2" placeholder='University' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                        </div>

                                                                        <div className='container'>
                                                                            <div className='row '>
                                                                                <div className='col-6'>
                                                                                    <select type="text" id="form1Example2" placeholder='Country' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" >
                                                                                        <option>{data.country}</option>
                                                                                        {
                                                                                            country.map((countrys) => (
                                                                                                <option key={countrys.id} value={countrys.id}>
                                                                                                    {countrys.name}
                                                                                                </option>))
                                                                                        }
                                                                                    </select>
                                                                                </div>
                                                                                <div className='col-6'>
                                                                                    <select type="text" id="form1Example2" placeholder='State' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" >
                                                                                        <option>state</option>
                                                                                        {
                                                                                            state.map((states) => (
                                                                                                <option key={states.id} value={states.id}>
                                                                                                    {states.name}
                                                                                                </option>))
                                                                                        }
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className='container'>
                                                                            <div className='row '>
                                                                                <div className='col-6'>
                                                                                    <input type="date" id="form1Example2" placeholder='Start Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                </div>
                                                                                <div className='col-6'>
                                                                                    <input type="date" id="form1Example2" placeholder='End Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1 mb-3" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            )
                                                        })}
                                                    </form>
                                                </form>
                                            </div>

                                            <div className='col-6'>
                                                <form className='rounded-4 border border-2 mt-5 mx-3 '>
                                                    <div className='d-flex justify-content-between mb-5 border-bottom'>
                                                        <p className='mx-3 mt-3'>Add WorkExprience</p>
                                                        <i className='icons-class mt-2 mb-2' onClick={() => handlework()}> <AiFillPlusCircle /></i>
                                                    </div>

                                                    <form className='w-100 form-size'>
                                                        {work.map((data, i) => {
                                                            return (
                                                                <div className='row'>
                                                                    {/* work exprience>>>>>>> */}
                                                                    <div className='col-12' >
                                                                        <form className='border border rounded-5 border-1 border-dark border-1 mt-3 mb-4 form2-size'>
                                                                            <div className='row'>
                                                                                <div className='col-12 d-flex justify-content-between mt-4'>
                                                                                    <span className='header fs-5 mx-3'>Work exprience</span>
                                                                                    <i className='icons-class2' onClick={() => handlecancel2()}> <MdOutlineCancelPresentation /></i>
                                                                                </div>
                                                                            </div>

                                                                            <div className="form mx-2">
                                                                                <input type="email" id="form1Example1" placeholder='Organization' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                            </div>

                                                                            <div className="form mx-2">
                                                                                <input type="text" id="form1Example2" placeholder='Designation' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                            </div>

                                                                            <div className='container'>
                                                                                <div className='row '>
                                                                                    <div className='col-6'>
                                                                                        <input type="date" id="form1Example2" placeholder='Start Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                    </div>

                                                                                    <div className='col-6'>
                                                                                        <input type="date" id="form1Example2" placeholder='End Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className='container'>
                                                                                <div className='row '>
                                                                                    <div className='col-6'>
                                                                                        <input type="text" id="form1Example2" placeholder='Currently Working' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                    </div>

                                                                                    <div className='col-6'>
                                                                                        <input type="text" id="form1Example2" placeholder='Full/Part/Contact' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <hr />

                                                                            <div className="form mx-2 ">
                                                                                <input type="email" id="form1Example1" placeholder='Title' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                            </div>

                                                                            <div className="form mx-2">
                                                                                <input type="text" id="form1Example2" placeholder='University' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                            </div>

                                                                            <div className='container'>
                                                                                <div className='row '>
                                                                                    <div className='col-6'>
                                                                                        <input type="date" id="form1Example2" placeholder='Start Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                    </div>

                                                                                    <div className='col-6'>
                                                                                        <input type="date" id="form1Example2" placeholder='End Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className='container'>
                                                                                <div className='row '>
                                                                                    <div className='col-6'>
                                                                                        <input type="text" id="form1Example2" placeholder='Currently Working' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                    </div>

                                                                                    <div className='col-6'>
                                                                                        <input type="text" id="form1Example2" placeholder='FUll/Part/Contact' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1 mb-3" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </form>
                                                </form>
                                            </div>
                                        </div>

                                        {/* country , skills resume Part>>>>>>>> */}
                                        <div className='row mt-4'>
                                            <div className='col-6'>
                                                <select type="text" id="form1Example2" placeholder='Country' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1 mb-3" >
                                                    <option>country</option>
                                                    {
                                                        country.map((countrys) => (
                                                            <option key={countrys.id} value={countrys.id}>
                                                                {countrys.name}
                                                            </option>))
                                                    }

                                                </select>
                                                <select type="text" id="form1Example2" placeholder='Skills' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1 mb-3" >
                                                    <option>skill</option>
                                                    {
                                                        skills.map((skill) => (
                                                            <option key={skill.id} value={skill.id}>
                                                                {skill.name}
                                                            </option>))
                                                    }
                                                </select>
                                            </div>

                                            <div className='col-6 position-relative upload-resumee'>
                                                <input id='resume-upload' type="file" style={{ display: 'none' }} className='form-control mt-4 w-75 h-75 mx-5 hahaha position-relative' />
                                                <label for="resume-upload" className='label-resume position-absolute'>Upload resume Here
                                                    <HiOutlinePaperClip/>
                                                <label className='resume-upload2'>download</label>
                                                </label>
                                            </div>
                                        </div>
                                        {/* Resume Part>>>> */}
                                        <div className='row '>
                                           
                                            <div className='col-6 position-relative upload-resumee1'>
                                                <input id='resume-vedio' type="file" style={{ display: 'none' }} className='form-control mt-4 w-75 h-75 mx-5 position-relative' />
                                                <label for="resume-vedio" className='label-resume position-absolute'>Vedio Resume
                                                    <FaUpload />
                                                </label>
                                            </div>

                                            <div className='col-6 position-relative upload-resumee2'>
                                                <input id='resume-testimonial' type="file" style={{ display: 'none' }} className='form-control mt-4 w-75 h-75 mx-5 position-relative' />
                                                <label for="resume-testimonial" className='label-resume position-absolute'>Vedio Testimonial
                                                    <FaUpload />
                                                </label>
                                            </div>
                                        </div>

                                        {/* Need Help >>>>> */}
                                        <div className='row mt-5'>
                                            <a className='fs-5 mt-3 text-center' href="/about">Need Help ?</a>
                                        </div>
                                        {/* footer >>>>> */}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Privacy />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            <Footer />
        </>
    )
}

export default Home