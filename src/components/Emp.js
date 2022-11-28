import React from 'react'
import Footer from './Footer'
// import { Link } from 'react-router-dom'
import HeaderLanding from './HeaderLanding'

const Login = () => {

    return (
        <>
            <HeaderLanding />
            <div className='container-fluid'>
                <div className='row text-center'>
                    <div className='col-6'>
                        <form className='mx-5 border border-bottom-0 rounded-5 border-2'>
                            <div className='row'>
                                <div className='col-12 mt-4'>
                                    <span className='header fs-5 fw-bold'>Journey To Find The Right Candidate !</span>
                                    <p>create your Employers account now</p>
                                </div>
                            </div>

                            <div className="form mx-5">
                                <input type="email" id="form1Example1" placeholder='Email Login ID' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                            </div>

                            <div className="form  mx-5">
                                <input type="text" id="form1Example2" placeholder='Contact Person Name' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                            </div>

                            <div className="form  mx-5">
                                <input type="tel" id="form1Example2" placeholder='Phone Number' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
                            </div>

                            <div className="form mx-5 mb-3">
                                <input type="text" id="form1Example2" placeholder='Register Bussiness Name' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" />
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
                            <button type="submit" className="btn-1 w-50 mb-5 ">Register</button>
                        </form>
                    </div>
                    {/* Image >>>>>> */}
                    <div className="col-6 mt-5">
                        <img className='w-100 h-100' src='./image/employer_signup.png' alt='Candidate' />
                    </div>
                </div>
            </div>
            
          <Footer />
          <br/>
        </>
    )
}
export default Login    