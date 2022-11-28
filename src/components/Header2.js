import React from "react";
import {NavLink} from "react-router-dom"
const Header1 = () => {
    
  return (
    <>
      <div className="row">
        <div className="col-5">
          <img src='./image/virvit_logo.png' alt='virvit' style={{ height: 80, width: 90, marginLeft: 20 }}/>
          <span className="header mx-3"> <a href='/' className='text-decoration-none fs-4 fw-bolder'>Building Your Dreams</a></span>
        </div>

        <div className='col-7 d-flex justify-content-end  align-items-center'>
          <a className='fw-normal fs-6 text-decoration-none mx-2 footer-a' href="/contact">Contact Us</a>
          <a className='fw-normal fs-6 text-decoration-none footer-a' href="/about">About</a>
         <nav>
            <ul className="d-flex align-items-center">
              <li className="ListRemove mx-3">
                <NavLink to='/login' className="text-decoration-none btn-1">Login</NavLink>
              </li>
              <li className="ListRemove">
                <NavLink to='/register' className="text-decoration-none btn-1"> Register</NavLink>
              </li>
            </ul>
          </nav>
         
        </div>
        <hr className="Line" />
      </div>
    </>
  )
}

export default Header1