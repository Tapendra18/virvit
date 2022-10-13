import React from 'react'
import Footer from './Footer'
// import Header2 from "./Header2"
import HeaderLanding from './HeaderLanding'


const Login = () => {

    return (
        <>
         <HeaderLanding/>
            <div className='container-fluid mt-5 '>   
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-6 mt-5'>
                            <form className='mx-4 border border rounded-5 Bor-1 border-primary'>
                                <div className="form mx-5">
                                    <input type="email" id="form1Example1" placeholder='Email/Username' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" required/>
                                </div>

                                <div className="form mx-5">
                                    <input type="password" id="form1Example2" placeholder='Password' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-4" required/>
                                </div>

                                <div className="row">
                                    <div className="col d-flex justify-content-start mx-5 mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="remember me" />
                                            <label className="form-check-label Rem-me mx-2" for="form1Example3"> Remember me </label>
                                            <a className='text-decoration-none mx-4 fw-normal' href="#!">Forgot password ?</a>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn1 w-75 mt-2 mb-3">Login</button>
                            </form>
                        </div>
                        {/* Image >>>>>> */}
                        <div className="col-6 d-flex justify-content-end">
                            <img className='w-75 h-100' src='./image/Candidate_Login.png' alt='Candidate' />
                        </div>
                    </div>
                </div>

                <div className='row mx-5 mt-4 bor-2'>
                    <div className='col-6 rounded-4 text-left CandiLog text-white'>
                        <span className='d-block mt-3 mx-5 fw-bold '>New Here ?</span>
                        <span className='d-block mx-5'>create your profile & start building your dreams</span>
                        <a className='text-white mx-5' href="/register">Register Now</a>
                    </div>

                    <div className='col-6 text-white rounded-4 CandiLog'>
                        <span className='d-block text-center mt-2'>Your dream job is one click away!</span>
                        <span className='text-center d-block mb-2'>Get the app on the mobile app</span>
                        <div className=' d-flex justify-content-center mb-1'>
                            <img className='w-25 h-25 mx-3' src='./image/google_store.png' alt='google_store' />
                            <img className='w-25 h-25' src='./image/ios_store.png' alt='ios_store' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
          </>
    )
}

export default Login    