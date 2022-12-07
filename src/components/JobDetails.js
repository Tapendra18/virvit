import React from 'react';
import HeaderEdit from './HeaderEdit';
import Footer from './Footer';

const JobDetails = () => {
    return (
        <>
            <HeaderEdit />
            <div className='mt-5'> hell</div>
            <div className='form-control mt-5 d-flex job__Details_Border row'>
                <div className='col-6'>
                    <p className='text-secondary'>Year of experience :- </p>
                    <p className='text-secondary'>Loaction :- </p>
                    <p className='text-secondary'>Qualificaton :- </p>
                    <p className='text-secondary'>Skill :- </p>
                </div>
                <div className='col-6'>
                    <p className='text-secondary'>Salary :- </p>
                    <p className='text-secondary'>job Type :- </p>
                    <p className='text-secondary'>Job Specilization :- </p>

                </div>
            </div>
            <div className='row job__Details_Border mt-5'>
                <div className='form-control p-3'>
                    <h className="text-primary fw-bolder">Job Description</h>
                </div>
            </div>

            <div className='row job__Details_Border mt-5'>
                <div className='form-control p-3'>
                    <h className="text-primary fw-bolder">Skill Match </h>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default JobDetails