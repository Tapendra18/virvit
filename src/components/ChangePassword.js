import React from 'react'
import Footer from './Footer'
import HeaderEdit from './HeaderEdit'
// import axios from 'axios'

// const baseUrl = "https://virvit.mydevpartner.website/vvapi/v1/change-password/"

const Home = () => {
  // let data = JSON.parse(window.localStorage.getItem('loginUser'))

  // const token = data.token

  // const setVal = (e) => {
  //   setData('new_password', e.target.value)
  // }
  // const setVal2 = (e) => {
  //   setData('cpassword', e.target.value)
  // }

  

 

  return (
    <>
      <HeaderEdit />
      <div className='container d-flex'>
        <div className='col-5 mt-5 edit'>
          <input type="text" id="form1Example2"  placeholder='New password **********' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-5" />
          <input type="text" id="form1Example2"   placeholder='Confirm password **********' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
          <div className='d-flex justify-content-center'>
            <button className=' btn1 mt-4'>submit</button>
          </div>
        </div>

        <div className='col-6 mt-5 mb-4'>
          <img src='./image/Change-password.png' alt='Change-password' className='w-100 h-100 mt-5 mx-5 mb-3 '></img>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home