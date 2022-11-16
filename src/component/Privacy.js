import React from 'react'
// import Footer from './Footer'
// import HeaderEdit from './HeaderEdit'
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
// import ChangePassword from "./ChangePassword"
// const baseUrl = "https://virvit.mydevpartner.website/vvapi/v1/forgot-password/"
// const baseUrl = "https://virvit.mydevpartner.website/vvapi/v1/change-password/"

const Home = () => {

    let data = JSON.parse(window.localStorage.getItem('loginUser'))
    const [password, setpassword] = useState({});
    
    const token = data.token;
    const [togle, settogle] = useState(true)
    const setVal = (e) => {
        console.log("it's called !!");
        setData('old_password', e.target.value)
        // console.log(oldpassword)
    }

    const setVal2 = (e) => {
        setData('new_password', e.target.value)
        // console.log(oldpassword)
    }

    const setVal3 = (e) => {
        setData('cpassword', e.target.value)
        // console.log(oldpassword)
    }

    const sendLink = (e) => {
        e.preventDefault();
        if (getData('old_password').length === 0) {
            console.log("......")
        } else {
            settogle(false)
            console.log("data......");
        }
    }

    const sendLink2 = async (e) => {
        e.preventDefault();
        const headers = {
            headers:
                { 'Authorization': `token ${token}` }
        }
        console.log(password)
        axios.post(`${process.env.REACT_APP_BASE_URL}/change-password/`, password, headers)
            .then(res => {
                console.log(res)
            })
    }

    const getData = (key) => {
        return password.hasOwnProperty(key) ? password[key] : '';
    };

    const setData = (key, value) => {
        console.log({ ...password, [key]: value });
        return setpassword({ ...password, [key]: value });
    };

    return (
        <>
            {/* <HeaderEdit /> */}

            {togle ? <div className='container-fluid mt-5'>
                <div className='container d-flex mt-5'>
                    <div className='col-5 edit mt-5'>
                        <div>
                            <h6>Enter your Email</h6>
                        </div>

                        {/* {message ? <p style={{color:"green" ,fontWeight:"bold"}}>password reset link send successfully in your Email</p>:""} */}
                        <input type="text" value={getData('old_password')} onChange={setVal} id="form1Example2" placeholder='Current password **********' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100" />
                        <NavLink to=""><button onClick={sendLink} className=' btn1 mt-4'>Change password</button></NavLink>
                    </div>

                    <div className='col-4 mt-5 mb-4'>
                        <img src='./image/Change-password.png' alt='Change-password' className='mt-3 mx-5 mb-3'></img>
                    </div>
                </div>

            </div>
                :
                <div className='container d-flex'>
                    <div className='col-5 mt-5 edit'>
                        <input type="text" id="form1Example2" value={getData('new_password')} onChange={setVal2} placeholder='New password **********' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-5" />
                        <input type="text" id="form1Example2" value={getData('cpassword')} onChange={setVal3} placeholder='Confirm password **********' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                        <div className='d-flex justify-content-center'>
                            <button onClick={sendLink2} className=' btn1 mt-4'>submit</button>
                        </div>
                    </div>

                    <div className='col-6 mt-5 mb-4'>
                        <img src='./image/Change-password.png' alt='Change-password' className='w-100 h-100 mt-5 mx-5 mb-3 '></img>
                    </div>

                </div>

            }

            {/* <Footer /> */}
        </>
    )
}

export default Home