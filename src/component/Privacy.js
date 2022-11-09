import React from 'react'
// import Footer from './Footer'
import HeaderEdit from './HeaderEdit'
import { Link } from "react-router-dom"
import { useState } from 'react'

const baseUrl = "https://virvit.mydevpartner.website/vvapi/v1/forgot-password/"

const Home = () => {

    const [email, setEmail] = useState("");
    const [message , setMessage] = useState("")

    const setVal = (e) => {
        setEmail(e.target.value)
    }

    const sendLink = async(e) => {
        e.preventDefault();

        const res = await fetch(baseUrl , {
           method:"POST"  ,
           headers:{
                "content-Type":"application/json"
           },
           body:JSON.stringify({email})
        })

        const data = await res.json();
        if(data.status === 201){
            setEmail("");
            setMessage(true)
        }else{
            console.log("error")
        }
    }

    return (
        <>
            <HeaderEdit />
            <div className='container-fluid mt-5'>
                <div className='container d-flex mt-5'>
                    <div className='col-5 edit mt-5'>
                        <div>
                            <h6>Enter your Email</h6>
                        </div>

                        {message ? <p style={{color:"green" ,fontWeight:"bold"}}>password reset link send successfully in your Email</p>:""}
                        <input type="text" value={email} onChange={setVal} id="form1Example2" placeholder='Current password **********' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100" />
                        <Link><button onClick={sendLink} className=' btn1 mt-4'>Change password</button></Link>
                    </div>

                    <div className='col-4 mt-5 mb-4'>
                        <img src='./image/Change-password.png' alt='Change-password' className='mt-3 mx-5 mb-3'></img>
                    </div>
                </div>

            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Home