import React, { useState } from 'react'
import HeaderEdit from './HeaderEdit'
import Footer from './Footer'
import axios from "axios"

const ForgetPassword = () => {
  const [jobData, setjobData] = useState({});
  // const [error, setError] = useState({});

  const forgetHandler = (e) => {
    e.preventDefault();
    if (getData('email').length === 0) {
      // setError("Fill the email");
    }
    else {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/forgot-password/`, jobData)
        .then(() => {
          console.log("success");
        })
    }
  }

  const getData = (key) => {
    return jobData.hasOwnProperty(key) ? jobData[key] : '';
  };

  const setData = (key, value) => {
    return setjobData({ ...jobData, [key]: value });
  };

  const forgetEmail = (e) => {
    setData('email', e.target.value)
  }

  return (
    <>
      <HeaderEdit />

      <div className='notif form-control w-25'>
        <h1 className='mt-3'>Forget Password</h1>
        <input type="text" className='form-control w-100 mt-4' value={getData('email')} onChange={forgetEmail} placeholder='enter Email' />
        {/* {error && <h2 className='text-start mx-2' style={{ color: 'red', fontSize: 12, }}>{error}</h2>} */}
        <div className='mt-4'>
          <button className='btn4' onClick={forgetHandler}>submit</button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ForgetPassword ;