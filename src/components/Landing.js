import React, { useState, useEffect } from 'react'
import HeaderLanding from './HeaderLanding'
import Footer from './Footer'
// import { Carousel } from 'react-bootstrap-v5'
// import { Form } from 'react-router-dom'
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/job-filter/";
const URL = "https://virvit.mydevpartner.website/vvapi/v1/jobs/";

const Landing = () => {
    const [show, setshow] = useState(false)
    const [jobData, setjobData] = useState({});
    const [search, setSearch] = useState([]);
    const [job, setjob] = useState(false);
    const [area, setArea] = useState(false);
    const [value, setvalue] = useState('')

    const getData = (key) => {
        return jobData.hasOwnProperty(key) ? jobData[key] : '';
    };

    const setData = (key, value) => {
        return setjobData({ ...jobData, [key]: value });
    };

    const seraching = (e) => {
        setData('title', e.target.value)
        // console.log(data3)
    }

    const Area = (e) => {
        setData('area', e.target.value)
        // console.log(data3)
    }

    const Onsearch = (e) => {
        e.preventDefault();
        console.log('Search Data', jobData);
        if (getData('title').length === 0 && (getData('area').length === 0)) {
            setjob("the job title skill is required")
            setArea("the Area, city or town is required")
        }
        else {
            axios.post(baseURL, jobData)
                .then((res) => {
                    setSearch(res.data);
                    window.localStorage.setItem("search key", JSON.stringify(res.data));
                    setshow(true)
                })
        }
    }

    const carousel = () => {
        axios.get(URL)
            .then((res) => {
                const result = res.data.results;
                setvalue(result);
                console.log(result, "carasoul....");
            })
    }

    useEffect(() => {
        carousel();
    }, []);
    return (
        <>
            <HeaderLanding />
            <div className='container-fluid grid-2 Div-top'>
                <form onSubmit={Onsearch}>
                    <div className='row mx-5'>
                        <div className='col-12 d-flex mt-5 '>
                            <div className='w-25 mx-3'>
                                <input className='form-control shadow-none border-dark mt-2 mx-3' value={getData('title')} onChange={seraching} placeholder='Job Title, Keyword or Company' />
                                {job && <h2 className='text-start mx-4 mt-2' style={{ color: 'red', fontSize: 18, }}>{job}</h2>}
                            </div>

                            <div className='w-25 mx-3'>
                                <input className='form-control shadow-none border-dark mt-2 mx-3' value={getData('area')} onChange={Area} placeholder='Area city or town' />
                                {area && <h2 className='text-start mx-4 mt-2' style={{ color: 'red', fontSize: 18, }}>{area}</h2>}
                            </div>
                            <div>
                                <button className='btn-3 mt-2 mx-5'>Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className='row mt-5 mx-4'>
                <div className='col-12 fs-3'>
                    <span>LATEST JOB OPENING</span>
                </div>
            </div>
            {show ? <div className='d-flex'>
                {search && search.map((name) => {
                    return (
                        <>
                            <div className='border border-primary w-50 rounded-4 mt-5 mx-2'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h6 className='mt-4 mx-4 search-test'>{name.organisation_detail.name}</h6>
                                        <h6 className='mx-4 search-test2'>
                                            {name.title}
                                        </h6>
                                        <p className='mx-4 exp-text'>{name.experiance_from} - {name.experiance_to} years experience</p>
                                        <p className='mx-4 sal-text'>SGD {name.min_salary} - {name.max_salary}</p>

                                    </div>
                                    <div className=''>
                                        <button className='btn4'><a className='text-decoration-none lala' href="/login">Apply</a></button>
                                        <button className='btn4'><a className='text-decoration-none lala'>Save</a></button>
                                    </div>
                                </div>
                            </div>
                        </>)
                })
                }
            </div> :
                <Carousel interval={1000}
                    showArrows={true}
                    showStatus={true}
                    autoPlay={true}
                    showIndicators={true}
                    showThumbs={false}
                    swipeable={true}
                    swipeScrollTolerance={5}
                    useKeyboardArrows={true}
                    animationHandler={true}
                >
                    <div className='d-flex justify-content-evenly align-items-center'>
                        {
                            value && value.map((item) => (
                                <div className='border-remove'>
                                    <form className='col-2 border border-primary rounded-4 border-2 mt-3 h-100 mx-2 Form-slider w-100 '>
                                        <div className='col-10 mt-3 mx-4 mb-4 w-100 form-slider-2'>
                                            <span className='mt-3'> {item.title}</span>
                                            <h5>{item.title}</h5>
                                            <h5>SGD {item.min_salary} - {item.max_salary}</h5>
                                            <h5>{item.experiance_from} - {item.experiance_to} year exp</h5>
                                        </div>
                                    </form>
                                </div>
                            ))
                        }
                    </div>
                </Carousel>
            }
            <Footer />
        </>
    )
}

export default Landing