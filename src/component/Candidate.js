import React, { useState, useEffect } from 'react'
import HeaderEdit from './HeaderEdit'
import Footer from './Footer'
import { FaSearch } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import axios from 'axios'

const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/job-filter/";

const Home = () => {
  const [data, setdata] = useState({})
  const [jobData, setjobData] = useState({});
  const [search, setSearch] = useState([]);
  const [job , setjob] = useState(false);
  const [area , setArea] = useState(false);

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
    setData('title', e.target.value)
    // console.log(data3)
  }

  const Area = (e) => {
    setData('area', e.target.value)
    // console.log(data3)
  }

  const Onsearch = (e) => {
    e.preventDefault();
    console.log('Search Data', jobData);
    if (getData('title').length === 0 && (getData('area').length === 0)) {
     setjob("the job title skill is required")
     setArea("the Area, city or town is required")
    }
    else {
      axios.post(baseURL, jobData)
        .then((res) => {
          setSearch(res.data);
          window.localStorage.setItem("search key", JSON.stringify(res.data));
        })
    }
  }

  return (
    <>
      <HeaderEdit />
      <div className='container-fluid Div-top'>
        <form onSubmit={Onsearch} className='row mt-3 d-flex justify-content-around'>
          <div className='col-3 position-relative'>
            <span className='position-absolute IconSet'><FaSearch/></span>
            <input className='form-control shadow-none border-dark mx-4' value={getData('title')} onChange={seraching} placeholder=' Job Title, Keyword or Company'/>
            {job && <h2 className='text-start mx-4 mt-2' style={{ color: 'red', fontSize: 18, }}>{job}</h2>}
          </div>

          <div className='col-3 position-relative'>
            <span className='position-absolute IconSet2'><ImLocation /></span>
            <input className='form-control shadow-none border-dark mx-1' value={getData('area')} onChange={Area} placeholder='Area city or town' />
            {area && <h2 className='text-start mx-4 mt-2' style={{ color: 'red', fontSize: 18, }}>{area}</h2>}
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

        <div className='d-flex'>
          {search && search.map((name) => {
            return (
              <>
                <div className='border border-primary w-50 rounded-4 mt-5 mx-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <h6 className='mt-4 mx-4 search-test'>webtechnology</h6>
                      <h6 className='mx-4 search-test2'>
                        {name.title}
                      </h6>
                      <p className='mx-4'>{name.experiance_from}-{name.experiance_to} years experience</p>
                    </div>
                    <div className=''>
                      <button className='btn4'>Apply</button>
                      <button className='btn4'>Save</button>
                    </div>
                  </div>
                </div>
              </>)
          })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home