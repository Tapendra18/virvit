import React from 'react'
import HeaderEdit from './HeaderEdit'
import Footer from './Footer'

const Home = () => {
  const data = JSON.parse(window.localStorage.getItem('loginUser'))
  return (
    <>
      <HeaderEdit/>
      <div className='container-fluid Div-top'>
        <div className='row mt-3 d-flex justify-content-around'>
          <div className='col-3'>
            <input className='form-control shadow-none border-dark mx-4' placeholder='Job Title, Keyword or Company' />
          </div>

          <div className='col-3 '>
            <input className='form-control shadow-none border-dark mx-1' placeholder='Area city or town' />
          </div>

          {/* <div className='col-3 '>
            <input className='form-control shadow-none border-dark mx-5' placeholder='All job Specialization' />
          </div> */}

          <div className='col-3'>
            <button className='btn1'>Search</button>
          </div>
        </div>

        <div className='row border border-2 mx-2 mt-5 rounded-3 Line1'>
          <div className='col-6 mt-3'>
            <span className='d-block mx-4 fs-4'>{data.fullname}</span>
            <a className='  fw-normal fs-6 mx-4 ' href="/editprofile">Update Profile</a>
            <a className='  fw-normal fs-6' href="#!">View Profile</a>
          </div>

          <div className='col-6 mt-4 fs-5'>
            <a className='fw-normal  mx-3 text-decoration-none' href="#!">Saved Jobs</a>
            <a className='fw-normal  mx-3 text-decoration-none' href="/candidateview">Job Applications</a>
            <a className='fw-normal  mx-3 text-decoration-none' href="#!">Job Alert</a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home