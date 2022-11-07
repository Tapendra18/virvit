import React, { useState } from 'react'
import HeaderLanding from './HeaderLanding'
import Footer from './Footer'
import { Carousel } from 'react-bootstrap-v5'
// import { Form } from 'react-router-dom'
import axios from 'axios'

const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/job-filter/";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Landing = () => {
    const [show , setshow] = useState(false)
    const [jobData, setjobData] = useState({});
    const [search, setSearch] = useState([]);
    const [job, setjob] = useState(false);
    const [area, setArea] = useState(false);

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
                                <input className='form-control shadow-none border-dark mt-2 mx-3' value={getData('area')} onChange={Area} placeholder='Area city or town'/>
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
            { show ?  <div className='d-flex'>
                {search && search.map((name) => {
                    return (
                        <>
                            <div className='border border-primary w-50 rounded-4 mt-5 mx-2'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h6 className='mt-4 mx-4 search-test'>webtechnology</h6>
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
            </div>   : 
            
            <Carousel responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={true}
            showDots={true}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass='carousel-item-padding-40-px'
            containerClass="carousel-container"
             >
            <slide className='d-flex border-remove' interval={4000}>
                <form className='border border-primary rounded-4 border-2 mt-3 w-25 h-100 mx-2 Form-slider'>
                    <div className='mt-3 mx-4 mb-4'>
                        <span className='mt-3'>back End Developer</span>
                        <h5>East</h5>
                        <h5>SGD- 7,000-8,000</h5>
                        <h5>4-5 year exp</h5>
                    </div>

                </form>

                <form className='border border-primary rounded-4 border-2 mt-3 w-25 h-100 mx-2 Form-slider'>
                    <div className='mt-3 mx-4 mb-4'>
                        <span className='mt-3'>back End Developer</span>
                        <h5>East</h5>
                        <h5>SGD- 7,000-8,000</h5>
                        <h5>4-5 year exp</h5>
                    </div>
                </form>

                <form className='border border-primary rounded-4 border-2 mt-3 w-25 h-100 mx-2 Form-slider'>
                    <div className='mt-3 mx-4 mb-4'>
                        <span className='mt-3'>back End Developer</span>
                        <h5>East</h5>
                        <h5>SGD- 7,000-8,000</h5>
                        <h5>4-5 year exp</h5>
                    </div>
                </form>

                <form className='border border-primary rounded-4 border-2 mt-3 w-25 h-100 mx-2 Form-slider'>
                    <div className='mt-3 mx-4 mb-4'>
                        <span className='mt-3'>back End Developer</span>
                        <h5>East</h5>
                        <h5>SGD- 7,000-8,000</h5>
                        <h5>4-5 year exp</h5>
                    </div>
                </form>

                <form className='border border-primary rounded-4 border-2 mt-3 w-25 h-100 mx-2 Form-slider'>
                    <div className='mt-3 mx-4 mb-4'>
                        <span className='mt-3'>back End Developer</span>
                        <h5>East</h5>
                        <h5>SGD- 7,000-8,000</h5>
                        <h5>4-5 year exp</h5>
                    </div>
                </form>

                <form className='border border-primary rounded-4 border-2 mt-3 w-25 h-100 mx-2 Form-slider'>
                    <div className='mt-3 mx-4 mb-4'>
                        <span className='mt-3'>back End Developer</span>
                        <h5>East</h5>
                        <h5>SGD- 7,000-8,000</h5>
                        <h5>4-5 year exp</h5>
                    </div>
                </form>
            </slide>      
        </Carousel>

            }
            <Footer />
        </>
    )
}

export default Landing