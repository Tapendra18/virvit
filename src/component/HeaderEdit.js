// import { Dropdown } from "bootstrap";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const HeaderEdit = () => {
  const navigate = useNavigate()

  // const [isLoggedin, setIsLoggedin] = useState(false);
  const data = JSON.parse(window.localStorage.getItem('loginUser'))
  // console.log(data)

  const logout = (e) => {
    e.preventDefault();
    console.log('Logout');

    // CLEAR DATA FROM STORAGE
    localStorage.removeItem('loginUser');

    navigate("/");
  }


  return (
    <>
      <div className="row Header">
        <div className="col-5">
          <img src='./image/virvit_logo.png' alt='virvit' style={{ width: 90, marginLeft: 20 }} />
          <span className="header mx-3"><a href='/search' className='text-decoration-none fs-4 fw-bolder'>Building Your Dreams</a></span>
        </div>


        <div className="d-flex align-item-center justify-content-end ">
        <Dropdown className="homeuser">
          <Dropdown.Toggle  id="dropdown-basic">
         {data.fullname}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="bg-light HomePro fw-bold" href="/editprofile">Edit Profile</Dropdown.Item>
            <Dropdown.Item href="/candidateview">Job Application</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
    </>
  )
}

export default HeaderEdit