import React from "react";
import { NavLink } from "react-router-dom"
// import './App.css'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import Login from './Login'

const HeaderLanding = () => {
  return (
    <>
      <div className="container-fluid mb-5 Header">
        <div className="row">
          <div className="col-5">
            <img src='./image/virvit_logo.png' alt='virvit' style={{ width: 90, marginLeft: 20 }} />
            <span className="header mx-3"> <a href='/' className='text-decoration-none fs-4 fw-bolder text-center'>Building Your Dreams</a></span>
          </div>

          <div className='col-7 d-flex justify-content-end align-items-center'>
            <a className='fw-normal fs-6 text-decoration-none mx-2 footer-a' href="/contact">Contact us</a>
            <a className='fw-normal fs-6 text-decoration-none footer-a' href="/about">About</a>
            <nav>
              <ul className="d-flex align-items-center">
                <li className="ListRemove mx-3">
                  <NavLink to='/login' className="text-decoration-none btn-1">Login</NavLink>
                </li>
                <li className="ListRemove">
                  <NavLink to='/register' className="text-decoration-none btn-1">Register</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="Header"></div> */}
    </>
  )
}

export default HeaderLanding