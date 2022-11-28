import React,{useState} from 'react'
import HeaderEdit from './HeaderEdit'
import Footer from './Footer'
import axios from "axios"

// const URL = "https://virvit.mydevpartner.website/vvapi/v1/forgot-password/"
const ForgetPassword = () => {
  const [jobData, setjobData] = useState({});

    const forget=()=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/forgot-password/`)
          .then(()=>{
            console.log("success")
          })
    }


    const getData = (key) => {
        return jobData.hasOwnProperty(key) ? jobData[key] : '';
      };
    
      const setData = (key, value) => {
        return setjobData({ ...jobData, [key]: value });
      };

      const forgetEmail = (e)=>{
        setData('email', e.target.value)
      }

  return (
    <>
        <HeaderEdit/>

        <div className='notif form-control w-25'>
            <h1 className='mt-3'>Forget Password</h1>
            <input type="text" className='form-control w-100 mt-4' value={getData('email')} onChange={forgetEmail} placeholder='enter Email'/>
            <div className='mt-4'>
                <button className='btn4' onClick={forget}>submit</button>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default ForgetPassword