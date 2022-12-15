import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import HeaderEdit from './HeaderEdit'
import Privacy from "./Privacy"
import axios from 'axios'
import { HiOutlinePaperClip } from "react-icons/hi";
import { FaUpload } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai"
import { ImUpload2 } from "react-icons/im"
import { MdOutlineCancelPresentation } from "react-icons/md"
// import { NavLink } from "react-router-dom"
// import { Link } from "react-router-dom"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Multiselect from 'multiselect-react-dropdown';

// const baseUrl = "https://virvit.mydevpartner.website/vvapi/v1/user-profile-update/"

const Home = () => {
    let data = JSON.parse(window.localStorage.getItem('loginUser'))
    // const data2=  JSON.parse(window.localStorage.getItem('loginUser'))
    const [job, setjob] = useState([]);
    const [skills, setskill] = useState([]);
    const [country, setcountry] = useState([]);
    const [state, setstate] = useState([]);
    const [val, setval] = useState([]);
    const [work, setwork] = useState([]);
    const [source, setSource] = useState();
    const [respdf, setRespdf] = useState();
    const [testimonial, setTestimonial] = useState();
    const token = data.token;
    // const [userImage, setUserImage] = useState([]);

    // const [show, setshow] = useState(true)
    const [userData, setUserData] = useState(
        {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            mobile: data.mobile,
            designation: data.designation,
            dob: data.dob,
            gender: data.gender,
            employment_status: data.employment_status,
            job_preference: data.job_preference,
            currency: data.currency,
            experience: data.experience,
            salary: data.salary,
            about: data.about,
            image: data.image,
            title: data.education_detail.title,
            country: data.country
        }
    );

    const handleImage = (e) => {
        e.persist();
        console.log(e.target.files);
        setUserData({ image: URL.createObjectURL(e.target.files[0]) });
    }

    const handleResume = (e) => {
        const file = e.target.files[0];
        console.log(file.name);
        const url = URL.createObjectURL(file);
        // setRespdf(url);
        setRespdf(file.name);
        console.log(url);
    }

    const handleVedioResume = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const url = URL.createObjectURL(file);
        // setSource(url);
        setSource(file.name)
    }

    const handleTestimonial = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const url = URL.createObjectURL(file);
        setTestimonial(file.name);

    }




    const inputHandler = (evt) => {
        console.log(evt);
        const value = evt.target.value;
        setUserData({
            ...userData,
            [evt.target.id]: value
        });
    }

    useEffect(() => {
        // console.log(userData);
        JSON.parse(window.localStorage.getItem('loginUser'))
    }, []);

    // const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/login/";

    const saved = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('first_name', userData.first_name);
        formData.append('last_name', userData.last_name);
        formData.append('email', userData.email);
        formData.append('mobile', userData.mobile);
        formData.append('designation', userData.designation);
        formData.append('dob', userData.dob);
        formData.append('gender', userData.gender);
        formData.append('job_preference', userData.job_preference);
        formData.append('salary', userData.salary);
        formData.append('currency', userData.currency);
        formData.append('experience', userData.experience);
        formData.append('dial_code', '+91');
        formData.append('about', userData.about);
        formData.append('image', userData.image);
        formData.append('resume', userData.resume)
        console.log(userData, 'form dtatatatat');
        const headers = {
            headers:
                { 'Authorization': `token ${token}` }
        }

        axios.post("https://virvit.mydevpartner.website/vvapi/v1/user-profile-update/", formData, headers)
            .then(res => {
                const getData = res.data.data;
                console.log(getData)
            })
    }

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

    const handlework = () => {
        const exp = [...work, []]
        setwork(exp);
    }

    const onButtonCLick = () => {
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    useEffect(function () {
        axios.get("https://virvit.mydevpartner.website/vvapi/v1/job-preference/")
            .then((response) => setjob(response.data.results))
            .catch((error) => console.log(error))

        axios.get("https://virvit.mydevpartner.website/vvapi/v1/skill/")
            .then((response) => setskill(response.data.results))
            .catch((error) => console.log(error))

        axios.get("https://virvit.mydevpartner.website/vvapi/v1/state/")
            .then((response) => setstate(response.data.results))
            .catch((error) => console.log(error))

        axios.get("https://virvit.mydevpartner.website/vvapi/v1/country/")
            .then((response) => setcountry(response.data.results))
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        const fetchSkills = async () => {
            const response = await fetch(
                'https://virvit.mydevpartner.website/vvapi/v1/skill/'
            );
            const data = await response.json();
            console.log(data.results);
            setskill(data.results);
        };

        const fetchstate = async () => {
            const response = await fetch(
                'https://virvit.mydevpartner.website/vvapi/v1/state/'
            );
            const data = await response.json();
            console.log(data.results);
            setstate(data.results);
        }

        const fetchJobs = async () => {
            const response = await fetch(
                'https://virvit.mydevpartner.website/vvapi/v1/job-preference/'
            );
            const data = await response.json();
            console.log(data.results);
            setjob(data.results);
        }

        const fetchCountry = async () => {
            const response = await fetch(
                'https://virvit.mydevpartner.website/vvapi/v1/country/'
            );
            const data = await response.json();
            console.log(data.results);
            setcountry(data.results);
        }

        fetchJobs();
        fetchSkills();
        fetchstate();
        fetchCountry();
    }, [])

    const changeSkills = () => {
        let selectskill = skills.map(item => {
            return item.id
        })
        console.log(selectskill, 'job iddd')
        setskill(selectskill)
        console.log(selectskill)
    }

    const changejob = () => {
        let selectjob = job.map(item => {
            return item.id
        })
        console.log(selectjob, 'job iddd')
        setjob(selectjob)
        console.log(selectjob)
    }

    const changeCountry = () => {
        let selectcountry = country.map(item => {
            return item.id
        })
        console.log(selectcountry, 'job iddd')
        setjob(selectcountry)
        console.log(selectcountry)
    }

    const changeState = () => {
        let selectstate = state.map(item => {
            return item.id
        })
        console.log(selectstate, "state jjjg");
        setstate(selectstate);
        console.log(selectstate);
    }

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
                                    <form onSubmit={saved}>
                                        <div className='edit_cont mt-2'>
                                            <div className='d-flex'>
                                                <div className='col-6'>
                                                    <form>
                                                        <div>
                                                            <div className='d-flex'>
                                                                <input type="text" id='first_name' placeholder='First Name' onChange={inputHandler} defaultValue={userData.first_name} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' />
                                                                <input type="text" id='last_name' placeholder='last Name' defaultValue={userData.last_name} onChange={inputHandler} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mx-4' />

                                                            </div>
                                                            <div className='d-flex'>
                                                                <input type="email" id='email' placeholder='Email' onChange={inputHandler} defaultValue={userData.email} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' />
                                                                <input type="tel" id='mobile' placeholder='Mobile Number' onChange={inputHandler} defaultValue={userData.mobile} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mx-4' />
                                                            </div>
                                                            <div className='d-flex'>
                                                                <input type="text" id='designation' onChange={inputHandler} defaultValue={userData.designation} placeholder='designation' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50' />
                                                                <input type="date" id='dob' onChange={inputHandler} defaultValue={userData.dob} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-4' />
                                                            </div>

                                                            <div className='d-flex justify-content-between '>
                                                                <select id='gender' onChange={inputHandler} className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-50' aria-label='default select example'>
                                                                    <option defaultValue="1">{userData.gender}</option>
                                                                    <option defaultValue="2">Female</option>
                                                                </select>
                                                                <select id='employment_status' onChange={inputHandler} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-4'>
                                                                    <option defaultValue="1">{userData.employment_status}</option>
                                                                    <option defaultValue="2">Part time</option>
                                                                    <option defaultValue="3">intern</option>
                                                                    <option defaultValue="4">Remote</option>
                                                                </select>
                                                            </div>

                                                            <div className='d-flex justify-content-between '>
                                                                <Multiselect
                                                                    options={job} // Options to display in the dropdown
                                                                    selectedValues='' // Preselected value to persist in dropdown
                                                                    onSelect={changejob} // Function will trigger on select event                                               
                                                                    displayValue="skill"
                                                                    id='id'
                                                                    placeholder='key job'
                                                                    showCheckbox
                                                                    className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-50'
                                                                />

                                                                <input id='salary' type="number" placeholder='salary' onChange={inputHandler} defaultValue={userData.salary} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' />

                                                                <select id='currency' onChange={inputHandler} className='form-control form-control-sm mt-3 shadow-none borber border-2'>{userData.currency}
                                                                    <option defaultValue='1'>USD</option>
                                                                    <option defaultValue='2'>INR</option>
                                                                    <option defaultValue='3'>SGD</option>
                                                                </select>
                                                            </div>

                                                            <input id='experience' type="number" placeholder='experience' onChange={inputHandler} defaultValue={userData.experience} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' />

                                                            <div className='row'>
                                                                <div className='col-12'>
                                                                    <input id='about' type="text" placeholder='About Me' onChange={inputHandler} defaultValue={userData.about} className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100'></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className='col-3 mx-5 Edit-pho'>
                                                    {/* <img onClick={handleImage} src='./image/Employer_login.png' className='rounded-circle Edit-img' alt='image1'></img> */}
                                                    <img src={`${userData.image}`} alt={userData.image} width="200px" height="200px" className="border rounded-circle" />
                                                    <div>
                                                        <input accept="image/png, image/gif, image/jpeg" id='imageFile' onChange={handleImage} type='file' />
                                                    </div>
                                                    <div >
                                                        <label className='icon' for="imageFile"><ImUpload2 /></label>
                                                    </div>

                                                    <div className=''>
                                                        <button className='btn1 mt-3'>SAVED</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*>>>>>>> dyanamic from <<<<<<<< */}
                                            <div className='col-12 d-flex'>
                                                <div className='col-6 form-size3'>
                                                    <form className='rounded-4 mt-5 border-1 border-secondary border'>
                                                        <div className='d-flex justify-content-between mb-5 underline'>
                                                            <p className='mx-3 mt-3 fw-bolder information'>Add Education</p>
                                                            <i className='icons-class mt-2 mb-2' onClick={() => handleadd()}> <AiFillPlusCircle /></i>
                                                        </div>

                                                        <form className='w-100 form-size'>
                                                            {val.map((data, i) => {
                                                                return (
                                                                    <div className='col-12'>
                                                                        <form className='border rounded-4 border-secondary border-1 mt-3 mb-4 form2-size'>
                                                                            <div className='row'>
                                                                                <div className='col-12 mt-2 mx-2 d-flex justify-content-end'>
                                                                                    <i className='icons-class2' onClick={() => handlecancel()}><MdOutlineCancelPresentation /></i>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form mx-2">
                                                                                <input onChange={inputHandler} type="text" defaultValue={userData.title} id="form1Example1" placeholder='Title' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                            </div>

                                                                            <div className="form mx-2">
                                                                                <input onChange={inputHandler} type="text" id="form1Example2" placeholder='University' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                            </div>

                                                                            <div className='container'>
                                                                                <div className='row '>
                                                                                    <div className='col-6'>

                                                                                        <Multiselect
                                                                                            options={state} // Options to display in the dropdown
                                                                                            selectedValues='' // Preselected value to persist in dropdown
                                                                                            onSelect={changeState} // Function will trigger on select event                                               
                                                                                            displayValue="skill"
                                                                                            id='id'
                                                                                            placeholder='key state'
                                                                                            showCheckbox
                                                                                            className='form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1'
                                                                                        />
                                                                                    </div>
                                                                                    <div className='col-6'>
                                                                                        <Multiselect
                                                                                            options={country} // Options to display in the dropdown
                                                                                            selectedValues='' // Preselected value to persist in dropdown
                                                                                            onSelect={changeCountry} // Function will trigger on select event                                               
                                                                                            displayValue="skill"
                                                                                            id='id'
                                                                                            placeholder='key Country'
                                                                                            showCheckbox
                                                                                            className='form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1'
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className='container mb-3'>
                                                                                <div className='row '>
                                                                                    <div className='col-6'>
                                                                                        <input onChange={inputHandler} type="date" id="form1Example2" placeholder='Start Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                    </div>
                                                                                    <div className='col-6'>
                                                                                        <input onChange={inputHandler} type="date" id="form1Example2" placeholder='End Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
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
                                                    <form className='rounded-4 border border-secondary border-1 mt-5'>
                                                        <div className='d-flex justify-content-between mb-5 underline'>
                                                            <p className='mx-3 mt-3 fw-bolder information'>Add WorkExprience</p>
                                                            <i className='icons-class mt-2 mb-2' onClick={() => handlework()}> <AiFillPlusCircle /></i>
                                                        </div>

                                                        <form className='w-100 form-size'>
                                                            {work.map((data, i) => {
                                                                return (
                                                                    <div className='row'>
                                                                        {/* work exprience>>>>>>> */}
                                                                        <div className='col-12' >
                                                                            <form className='border border-secondary border-1 rounded-4 mt-3 mb-4 form2-size'>
                                                                                <div className='row'>
                                                                                    <div className='col-12 d-flex justify-content-end mt-2'>
                                                                                        <i className='icons-class2' onClick={() => handlecancel2()}> <MdOutlineCancelPresentation /></i>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="form mx-2">
                                                                                    <input onChange={inputHandler} type="email" id="form1Example1" placeholder='Organization' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                </div>

                                                                                <div className="form mx-2">
                                                                                    <input onChange={inputHandler} type="text" id="form1Example2" placeholder='Designation' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                </div>

                                                                                <div className='container'>
                                                                                    <div className='row '>
                                                                                        <div className='col-6'>
                                                                                            <input onChange={inputHandler} type="date" id="form1Example2" placeholder='Start Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                        </div>

                                                                                        <div className='col-6'>
                                                                                            <input onChange={inputHandler} type="date" id="form1Example2" placeholder='End Date' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className='container mb-3'>
                                                                                    <div className='row '>
                                                                                        <div className='col-6'>
                                                                                            <input onChange={inputHandler} type="text" id="form1Example2" placeholder='Currently Working' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                                                                                        </div>

                                                                                        <div className='col-6'>
                                                                                            <input onChange={inputHandler} type="text" id="form1Example2" placeholder='Full/Part/Contact' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
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
                                            <div className='d-flex mt-4'>
                                                <div className='col-6 hahaha2'>
                                                    <Multiselect
                                                        options={country} // Options to display in the dropdown
                                                        selectedValues='' // Preselected value to persist in dropdown
                                                        onSelect={changeCountry} // Function will trigger on select event                                               
                                                        displayValue="skill"
                                                        id='id'
                                                        placeholder='key country'
                                                        showCheckbox
                                                        className='form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1'
                                                    />
                                                    <Multiselect
                                                        options={skills} // Options to display in the dropdown
                                                        selectedValues='' // Preselected value to persist in dropdown
                                                        onSelect={changeSkills} // Function will trigger on select event                                               
                                                        displayValue="skill"
                                                        id='id'
                                                        placeholder='key Skills'
                                                        showCheckbox
                                                        className='form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1'
                                                    />
                                                </div>

                                                <div className='col-6 position-relative upload-resumee'>
                                                    <input onChange={inputHandler && handleResume} id='resume-upload' accept='.pdf' type="file" style={{ display: 'none' }} className='form-control mt-4 w-75 h-75 mx-5 hahaha position-relative' />
                                                    <label for="resume-upload" className='label-resume position-absolute'>Upload resume Here
                                                        <HiOutlinePaperClip />
                                                    </label>
                                                    {<div className='mt-4 '>{respdf}</div> || ""}
                                                    <label className='resume-upload2' onClick={onButtonCLick}>download</label>
                                                </div>
                                            </div>
                                            {/* Resume Part>>>> */}
                                            <div className='d-flex '>
                                                <div className='col-6 position-relative upload-resumee1'>
                                                    <input onChange={inputHandler && handleVedioResume} accept=".mov,.mp4" id='resume-vedio' type="file" style={{ display: 'none' }} className='form-control mt-4 w-75 h-75 mx-5 position-relative' />
                                                    {!source && <label for="resume-vedio" className='label-resume position-absolute'>Vedio Resume
                                                        <FaUpload />
                                                    </label>}
                                                    {source || ""}
                                                </div>

                                                <div className='col-6 position-relative upload-resumee2'>
                                                    <input onChange={inputHandler && handleTestimonial} id='resume-testimonial' type="file" style={{ display: 'none' }} className='form-control mt-4 w-75 h-75 mx-5 position-relative' />
                                                    {!testimonial && <label for="resume-testimonial" className='label-resume position-absolute'>Vedio Testimonial
                                                        <FaUpload />
                                                    </label>}
                                                    {testimonial || ""}
                                                </div>
                                            </div>

                                            {/* Need Help >>>>> */}
                                        </div>
                                    </form>

                                    <div className='row mt-5'>
                                        <a className='fs-5 mt-3 text-center' href="/about">Need Help ?</a>
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