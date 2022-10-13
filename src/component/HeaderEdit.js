import React from "react";

const HeaderEdit = () => {
  
  return (
    <> 
    <div className="row Header">
       <div className="col-5">
          <img src='./image/virvit_logo.png' alt='virvit' style={{ width:90 , marginLeft:20}}/>
          <span className="header mx-3"><a href='/' className='text-decoration-none fs-4 fw-bolder'>Building Your Dreams</a></span>
        </div>

        <div className='col-7 d-flex align-item-center justify-content-end'>
            <select className=' text-center HomeLog rounded-2  mt-3 m-2'>
               <option className=' bg-light HomePro'>Name</option>
               <option className='bg-light HomePro fw-bold mb-3'>Edit Porfile </option>
               <option className='bg-light HomePro fw-bold'>Job Application </option>  
               <option className='bg-light HomePro fw-bold text-danger'>Logout </option>
           </select>
        </div>
    </div>
    </>
  )
}

export default HeaderEdit