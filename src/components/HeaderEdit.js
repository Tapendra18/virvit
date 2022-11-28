import React from "react";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const HeaderEdit = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState(null)
  // const [isLoggedin, setIsLoggedin] = useState(false);
  // const data = JSON.parse(window.localStorage.getItem('loginUser'))
  useEffect(() => {
    const data2 = JSON.parse(window.localStorage.getItem('loginUser'));
    console.log(data2);
    setdata(data2);
  }, [])
  // console.log(data)

  const logout = (e) => {
    e.preventDefault();
    console.log('Logout');
    // CLEAR DATA FROM STORAGE
    toast("login success")
    setTimeout(() => {
      localStorage.removeItem('loginUser');
      navigate("/");
    }, 1000);

  }

  return (
    <>
      <div className="row Header">
        <div className="col-5">
          <img src='./image/virvit_logo.png' alt='virvit' style={{ width: 90, marginLeft: 20 }} />
          <span className="header mx-3"><a href='/candidate' className='text-decoration-none fs-4 fw-bolder'>Building Your Dreams</a></span>
        </div>

        <div className="d-flex align-item-center justify-content-end ">
          <Dropdown className="homeuser">
            <Dropdown.Toggle id="dropdown-basic">
              {(data != null) ? data.fullname : 'N/A'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="bg-light HomePro fw-bold" href="/editprofile">Edit Profile</Dropdown.Item>
              <Dropdown.Item href="/candidateview">Job Application</Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={logout}>Logout <ToastContainer /></Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default HeaderEdit