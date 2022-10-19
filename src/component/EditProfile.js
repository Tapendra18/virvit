import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import HeaderEdit from './HeaderEdit'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const [job, setjob] = useState([])
    const [skills, setskill] = useState([])
    const [country, setcountry] = useState([]);
    const [state, setstate] = useState([]);

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
            <div className='container-fluid Div-top'>
                <div className='container d-flex Div-top'>
                    <div className='col-1 mt-4'>
                        <button className='btn-3 mb-3 '>Edit</button>
                        <Link to="/changepassword"> <button className=' btn1 mt-4'>Privacy</button></Link>
                    </div>

                    <div className='col-6 edit'>
                        <form className=''>
                            <div>
                                <input type="text" placeholder='First Name' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' required></input>
                                <input type="tel" placeholder='Mobile Number' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' required></input>
                                <input type="text" placeholder='designation' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100' required></input>

                                <div className='d-flex justify-content-between '>
                                    <select className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-50' aria-label='default select example'>
                                        <option selected>Gender</option>
                                        <option value="1">Male</option>
                                        <option>Female</option>

                                    </select>

                                    <select className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-n2'>
                                        <option selected> Year of Birth</option>
                                        <option value="1">2000</option>
                                        <option value="2">2001</option>
                                        <option value="2">2002</option>
                                        <option value="2">2003</option>
                                        <option value="2">2004</option>
                                        <option value="2">2005</option>
                                        <option value="2">2006</option>
                                        <option value="2">2007</option>
                                        <option value="2">2008</option>
                                        <option value="2">2009</option>
                                        <option value="2">2010</option>
                                    </select>
                                </div>

                                <div className='d-flex justify-content-between '>
                                    <select className='form-control mt-3 shadow-none border-start-0 border-end-0 border-top-0 w-50' aria-label='default select example'>
                                        <option selected>Year of exprience</option>
                                        <option value="1">0-1 Year</option>
                                        <option>2 Year</option>
                                        <option>3 Year</option>
                                        <option>4 Year</option>
                                        <option>5 Year</option>
                                        <option>Other</option>
                                    </select>

                                    <select className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-n2'>
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

                                    <select className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-50 mx-n2'>
                                        <option selected> Salary</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='col-3 Edit-pho'>
                        <img src='./image/Employer_login.png' className='rounded-circle Edit-img' alt='image1'></img>
                        <button className=' btn1'>SAVED</button>
                    </div>
                </div>

                <div className='row Edit-AboutMe '>
                    <div className='col-12'>
                        <input type="text" placeholder='About Me' className='form-control mt-3 shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 ' required></input>
                    </div>
                </div>

                <div className='row Edit-Box '>
                    <div className='col-6 '>
                        <form className=' border border rounded-5 border-2 w-100 border-primary'>
                            <div className='row'>
                                <div className='col-12 mt-4 mx-2'>
                                    <span className='header fs-5 fw-bold'>Education!</span>
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
                                                state.map((states)=>(
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
                    {/* work exprience>>>>>>> */}
                    <div className='col-6 '>
                        <form className=' border border rounded-5 border-2 w-100 border-primary'>
                            <div className='row'>
                                <div className='col-12 mt-4 mx-2'>
                                    <span className='header fs-5 fw-bold'>Work exprience</span>
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
                {/* country , skills resume Part>>>>>>>> */}
                <div className='row Edit-Skill'>
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

                    <div className='col-6 '>
                        <button className=' btn-3 mt-4 w-75 h-75 mx-5'>Upload Resume Here</button>
                    </div>
                </div>
                {/* Resume Part>>>> */}
                <div className='row Edit-Resume '>
                    <div className='col-6'>
                        <button className=' btn-3 btn-4'>Vedio Resume </button>
                    </div>

                    <div className='col-6 '>
                        <button className=' btn-3  btn-5 '>Vedio Testimonial</button>
                    </div>
                </div>

                {/* Need Help >>>>> */}
                <div className='row Edit-Need'>
                    <a className='  fs-5  mt-3 text-center' href="/about">Need Help ?</a>
                </div>
                {/* footer >>>>> */}
            </div>
            <Footer />
        </>
    )
}

export default Home