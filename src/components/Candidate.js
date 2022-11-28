import React, { useState, useEffect } from 'react'
import HeaderEdit from './HeaderEdit'
import Footer from './Footer'
import { FaSearch } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsBookmarkFill } from "react-icons/bs";
import { BsShieldFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im"
import axios from 'axios'

// const baseURL = "https://virvit.mydevpartner.website/vvapi/v1/";
// const URL = "https://virvit.mydevpartner.website/vvapi/v1/apply-job/";
// const URL2 = "https://virvit.mydevpartner.website/vvapi/v1/bookmark-job/";

const Home = () => {
  let local = JSON.parse(window.localStorage.getItem('loginUser'))
  
  // let local2=window.localStorage.getItem("search key", JSON.stringify))
  const [data, setdata] = useState({})
  const [jobData, setjobData] = useState({});
  const [search, setSearch] = useState([]);
  const [job, setjob] = useState(false);
  const [area, setArea] = useState(false);
  const [Apply, setApply] = useState({
    user: local.id,
    job: null
  })
  const [save , setsave] = useState({
    user : local.id,
    job : null
  }) 
  const [show , setShow] = useState("")
  const [type , setType] = useState("");

  const token = local.token;

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
    e.preventDefault()
    console.log('Search Data', jobData);
    if (getData('title').length === 0 && (getData('area').length === 0)){
      setjob("the job title skill is required")
      setArea("the Area, city or town is required")
    }
    else {
      axios.post(`${process.env.REACT_APP_BASE_URL}/job-filter/`, jobData)
        .then((res) => {
          setSearch(res.data);
          window.localStorage.setItem("search key", JSON.stringify(res.data));
          setShow(prev => !prev)
        })
    }
  };

  const btnapply = (id) => {
    Apply.job = id;
    // setApply()
    const headers = {
      headers:
        { 'Authorization': `token ${token}` }
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}/apply-job/`, Apply, headers)
      .then((res) => {
        setApply(res.Apply);
      })
  }

  const btnsave =(id) =>{
    save.job = id;

    const headers = {
      headers:
      { 'Authorization': `token ${token}` }
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}/bookmark-job/`, save , headers)
    .then((res)=>{
      setsave(res.data)
      console.log("bookmark done");
    }).catch("error")
  }

  const handleCancel =()=>{
    if(getData('title').length !==0 && (getData('area').length !== 0)){
      setType(prev => !prev)
    }
  }

  return (
    <>
      <HeaderEdit />
      <div className='container-fluid Div-top'>
        <form  onSubmit={Onsearch} className='row d-flex justify-content-around align-items-center grid-2'>
          <div className='col-3 position-relative'>
            <span className='position-absolute IconSet'><FaSearch/></span>
            <input className='form-control shadow-none border-dark mx-4 lalala' value={getData('title')} onChange={seraching} placeholder=' Job Title, Keyword or Company'/>
            {type ? <i className='position-absolute cancelSet2' onClick={handleCancel}><ImCancelCircle/></i> : ""}
            {job && <h2 className='text-start mx-4' style={{color: 'red', fontSize: 18}}>{job}</h2>}
          </div>

          <div className='col-3 position-relative'>
            <span className='position-absolute IconSet2 border-start-0'><ImLocation/></span>
            <input className='form-control shadow-none border-dark mx-1 lalala' value={getData('area')} onChange={Area} placeholder='Area city or town'/>
            {show ? <i className='position-absolute cancelSet' onClick={handleCancel}><ImCancelCircle/></i> : ""}
            {area && <h2 className='text-start mx-4' style={{color:'red', fontSize:18}}>{area}</h2>}  
          </div>

          <div className='col-3'>
            <button type="submit" className='btn4'>Search</button>
            {show ? <button type="button" className="btn4">Clear</button> : "" }
          </div>
        </form>

        <div className='row border border-1 mx-3 mt-5 rounded-3 Line1'>
          <div className='col-6 mt-3 mb-4'>
            <span className='d-block mx-4 fs-4 mb-2 text-secondary'>welcome {(data != null) ? data.fullname : 'N/A'}</span>
            <a className='fw-normal mx-4 text-line' href="/editprofile">Update Profile</a>
            <a className='fw-normal text-line' href="/viewprofile">View Profile</a>
          </div>

          <div className='col-6 mt-4 fs-5 d-flex justify-content-around align-items-center'>
            <div>
              <BsBookmarkFill />
              <a className='fw-normal text-decoration-none icon-set' href="/candidateview">Saved Jobs</a>
            </div>
            <div>
              <BsShieldFill />
              <a className='fw-normal text-decoration-none icon-set' href="/candidateview">Job Applications</a>
            </div>
            <div>
              <FaBell />
              <a className='fw-normal text-decoration-none icon-set' href="/notification">Job Alert</a>
            </div>
          </div>
        </div>

        <div className='mb-5'>
          {
            search && search.map((name, index) => {
              return (
                <>
                  <div key={index} className='border border-primary w-50 rounded-4 mt-5 mx-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h6 className='mt-4 mx-4 search-test'>webtechnology</h6>
                        <h6 className='mx-4 search-test2'>
                          {name.title}
                        </h6>
                        <p className='mx-4 exp-text'>{name.experiance_from} - {name.experiance_to} years experience</p>
                        <p className='mx-4 sal-text'>SGD {name.min_salary} - {name.max_salary}</p>

                      </div>
                      <div>
                        {
                          name.is_applied?
                            <button type="button" className='btn4'>applied</button> :
                            <button type="button" onClick={() => btnapply(name.id)} className='btn4'>apply</button>
                        }
                        {name.is_status?
                        <button className='btn4'>Saved</button> :
                        <button className='btn4' onClick={()=>btnsave(name.id)}>Save</button> 
                        }
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