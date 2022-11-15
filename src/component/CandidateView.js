import React from 'react'
import Footer from './Footer'
import HeaderEdit from './HeaderEdit'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from "axios"
// import { useAsyncError } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const URL = "https://virvit.mydevpartner.website/vvapi/v1/apply-job/?user=130"
const URL2 = "https://virvit.mydevpartner.website/vvapi/v1/bookmark-job/?user=130"
const Home = () => {
   const [search, setSearch] = useState("");
   const [save, setsave] = useState("");
   let local = JSON.parse(window.localStorage.getItem('loginUser'))
   const token = local.token;
   const headers = {
      headers:
         { 'Authorization': `token ${token}` }
   }
   useEffect(() => {
      axios.get(URL, headers)
         .then((res) => {
            setSearch(res.data.results);
            // console.log(search)
         }).catch((Error) => console.log(Error));
   }, [])

   useEffect(() => {
      axios.get(URL2, headers)
         .then((res) => {
            setsave(res.data.results);
         })
   })

   return (
      <>
         <HeaderEdit />
         <div className='container-fluid mt-5 Div-top'>
            <Tabs
               defaultActiveKey="apply"
               id="justify-tab-example"
               className="mb-3"
               justify
            >
               <Tab eventKey="apply" className='CandiView' title="ApplyiedJobs">
                  {
                     search && search.map((name, index) => {
                        return (
                           <>
                              <div key={index} className='border border-primary w-100 rounded-4 mt-3'>
                                 <div className='d-flex justify-content-between align-items-center mx-2'>
                                    <div>
                                       <h6 className='mt-4 mx-4 search-test'>webtechnology</h6>
                                       <h6 className='mx-4 search-test2'>
                                          {name.title}
                                       </h6>
                                       <p className='mx-4 exp-text'>{name.experiance_from} - {name.experiance_to} years experience</p>
                                       <p className='mx-4 sal-text'>SGD {name.min_salary} - {name.max_salary}</p>
                                    </div>

                                    <div>
                                       <button type="button" className='btn4'>applied</button>
                                    </div>
                                 </div>
                              </div>
                           </>)
                     })
                  }
                  <div className='mb-5 mt-3 text-center'>
                     <button className='candiButton'>{save.previous}previous</button>
                     <button  className='candiCount'>{save.count}1</button>
                     <button className='candiButton'>{save.next} next</button>
                  </div>
               </Tab>
               <Tab eventKey="saved" title=" SavedJobs">
                  {
                     save && save.map((name, index) => {
                        return (
                           <>
                              <div key={index} className='border border-primary w-100 rounded-4 mt-3'>
                                 <div className='d-flex justify-content-between align-items-center mx-2'>
                                    <div>
                                       <h6 className='mt-4 mx-4 search-test'>webtechnology</h6>
                                       <h6 className='mx-4 search-test2'>
                                          {name.title}
                                       </h6>
                                       <p className='mx-4 exp-text'>{name.experiance_from} - {name.experiance_to} years experience</p>
                                       <p className='mx-4 sal-text'>SGD {name.min_salary} - {name.max_salary}</p>
                                    </div>

                                    <div>
                                       <button type="button" className='btn4'>saved</button>
                                    </div>
                                 </div>
                              </div>
                           </>)
                     })
                  }
                  <div className='mb-5 mt-3 text-center'>
                     <button className='candiButton'>{save.previous}Previous</button>
                     <button className='candiCount'>{save.count}1</button>
                     <button className='candiButton'>{save.next} next</button>
                  </div>
               </Tab>
            </Tabs>
         </div>
         <Footer />
      </>
   )
}

export default Home