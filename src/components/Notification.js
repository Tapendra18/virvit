import React from 'react'
import HeaderEdit from './HeaderEdit'
import Footer from './Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const URL = "https://virvit.mydevpartner.website/vvapi/v1/notification/?user=130"

const Notification = () => {
   let local = JSON.parse(window.localStorage.getItem('loginUser'))
   const [notif , setnotif] = useState('');
   const token = local.token;

    const headers = {
        headers:
           { 'Authorization': `token ${token}` }
     }

    useEffect(()=>{
        axios.get(URL,headers)
         .then((res)=>{
            setnotif(res.data.results);
         })
    },[])


    return (
        <>
            <HeaderEdit/>
            <div className='notif'>
                <p>Job Notification</p>
            </div>

            {notif && notif.map((name)=>{
                return(
                    <>
                    <div className='form-control w-25 notifClass'>
                        <h6 className=''>{name.title}</h6>
                        <div>
                            <h6>{name.message}</h6>
                        </div>
                        <div>
                            <h6>{name.time_ago}</h6>
                        </div>
                    </div>
                    
                    </>
                )
            })

            }
{/* 
            <div className='form-control w-25'>
                <p>applied</p>

                <div>
                    tapendra pratap singh applied for 
                </div>
            </div> */}
            <Footer />
        </>

    )
}

export default Notification