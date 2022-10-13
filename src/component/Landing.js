import React from 'react'
import HeaderLanding from './HeaderLanding'
import Footer from './Footer'
import { Carousel } from 'react-bootstrap-v5'
// import { Form } from 'react-router-dom'

const Landing = () => {

    return (
        <>
            <HeaderLanding />
            <div className='container-fluid grid-2 Div-top'>
                <div className='row mt-5'>
                    <div className='col-12 d-flex mt-5'>
                        <input className='form-control shadow-none border-dark mt-2 mx-3' placeholder='Job Title, Keyword or Company' />
                        <input className='form-control shadow-none border-dark mt-2 mx-3' placeholder='Area city or town' />
                        <input className='form-control shadow-none border-dark mt-2 mx-3' placeholder='All job Specialization' />
                        <button className='btn-3 mt-2'>Search</button>
                    </div>
                </div>
            </div>

            <div className='row mt-5 mx-4'>
                <div className='col-12 fs-3'>
                    <span>LATEST JOB OPENING</span>
                </div>
            </div>


          <Carousel variant="dark" >
                <slide className='d-flex border-remove'interval={4000}>
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

                <slide className='d-flex ' interval={2000}>
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


            
            <Footer />
        </>
    )
}

export default Landing