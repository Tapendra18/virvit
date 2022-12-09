import React, { useEffect, useState } from 'react';
import HeaderEdit from './HeaderEdit';
import Footer from './Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const URL = "https://virvit.mydevpartner.website/vvapi/v1/jobs/";

const JobDetails = () => {
    const [data, setdata] = useState('');
    // console.log(URL);
    const value = useParams();
    // console.log(value);
    let id = value.id
    // console.log(id);

    const clickHandler = () => {
        axios.get(URL + id)
            .then((res) => {
                // res.data;
                const result = res.data;
                setdata(result);
                console.log(result, 'resssss');
            })
        // navigate('/job-details');
    }
    useEffect(() => {
        clickHandler();
    }, []);

    const dateString = data.timestamp;
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    // console.log(formatDate(dateString))
    return (
        <>
            <HeaderEdit />
            {/* <div className='mt-5'>hell</div> */}
            <div className='d-flex justify-content-between mt-5'>
                <div className='ms-5 mt-5'>
                    <p className='text-primary fw-bolder fs-5'> {data.title}</p>
                    <p className='text-secondary'>{data.organisation_detail?.name}</p>
                </div>
                <div className='mt-1 mx-4'>
                    <button className='btn-3 mt-5'>Applied</button>
                    <p className='mt-1'>posted Date: {formatDate(dateString)}</p>
                </div>
            </div>
            <div className='form-control mt-5 d-flex job__Details_Border row'>
                <div className='col-6'>
                    <p className='text-secondary'>Year of experience :- {data.experiance_from} - {data.experiance_to} year </p>
                    <p className='text-secondary'>Loaction :-{data.address}  </p>
                    <p className='text-secondary'>Qualificaton :- {data.qualification_detail?.title} </p>
                    <p className='text-secondary'>Skill :-  </p>
                </div>
                <div className='col-6'>
                    <p className='text-secondary'>Salary :- {data.min_salary} - {data.max_salary} SGD</p>
                    <p className='text-secondary'>job Type :- {data.type} </p>
                    <p className='text-secondary'>Job Specilization :-{data.specialization} </p>

                </div>
            </div>
            <div className='row job__Details_Border mt-5'>
                <div className='form-control p-3'>
                    <h className="text-primary fw-bolder">Job Description</h>
                    <p>{data.description}</p>
                </div>
            </div>

            <div className='row job__Details_Border mt-5 mb-4'>
                <div className='form-control p-3 mb-5'>
                    <h className="text-primary fw-bolder">Skill Match </h>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default JobDetails;