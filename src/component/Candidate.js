import React, { useState, useEffect } from 'react'
import HeaderEdit from './HeaderEdit'
import Footer from './Footer'
import { FaSearch } from "react-icons/fa";
import { ImLocation } from "react-icons/im";


const Home = () => {
  const [data, setdata] = useState({})
  const [jobData, setjobData] = useState({});

  useEffect(() => {
    const data2 = JSON.parse(window.localStorage.getItem('loginUser'));
    console.log(data2);
    setdata(data2);
  }, [])

  const getData = (key) => {
    return jobData.hasOwnProperty(key) ? jobData[key] : '';
  };

  const setData = (key, value) => {
    return setjobData({ ...jobData, [key]: value });
  };

  const seraching = (e) => {
    setData('job', e.target.value)
    // console.log(data3)
  }

  const Area = (e) => {
    setData('Area', e.target.value)
    // console.log(data3)
  }

  const Onsearch =(e)=>{
    e.preventDefault();
    jobData['Search Data'] = 1;
    console.log('Search Data', jobData);
  }

  return (
    <>
      <HeaderEdit />
      <div className='container-fluid Div-top'>
        <form onSubmit={Onsearch} className='row mt-3 d-flex justify-content-around'>
          <div className='col-3 position-relative'>
          <span className='position-absolute IconSet'><FaSearch/></span>
            <input className='form-control shadow-none border-dark mx-4' value={getData('job')} onChange={seraching} placeholder=' Job Title, Keyword or Company'/>
          </div>

          <div className='col-3 position-relative'>
          <span className='position-absolute IconSet2'><ImLocation/></span>
          <input className='form-control shadow-none border-dark mx-1' value={getData('Area')} onChange={Area} placeholder='Area city or town' />
          </div>
          {/* <div className='col-3 '>
            <input className='form-control shadow-none border-dark mx-5' placeholder='All job Specialization' />
          </div> */}
          <div className='col-3'>
            <button className='btn1'>Search</button>
          </div>
        </form>

        <div className='row border border-2 mx-2 mt-5 rounded-3 Line1'>
          <div className='col-6 mt-3'>
            <span className='d-block mx-4 fs-4'>welcome {(data != null) ? data.fullname : 'N/A'}</span>
            <a className='  fw-normal fs-6 mx-4 ' href="/editprofile">Update Profile</a>
            <a className='  fw-normal fs-6' href="/editprofile">View Profile</a>
          </div>

          <div className='col-6 mt-4 fs-5'>
            <a className='fw-normal  mx-3 text-decoration-none' href="#!">Saved Jobs</a>
            <a className='fw-normal  mx-3 text-decoration-none' href="/candidateview">Job Applications</a>
            <a className='fw-normal  mx-3 text-decoration-none' href="#!">Job Alert</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home