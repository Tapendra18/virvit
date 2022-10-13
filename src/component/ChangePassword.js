import React from 'react'
import Footer from './Footer'
import HeaderEdit from './HeaderEdit'
import {Link} from 'react-router-dom'

const Home = () => {
  
    return (
        <>
          <HeaderEdit/>
            <div className='container-fluid mt-3 '>  
                <div className='container-fluid d-flex Div-top'>
                    <div className='col-1 mt-4'>
                       <Link to="/editprofile"> <button className=' btn-3 mt-4'>Edit</button></Link>
                       <Link to="/changepassword"> <button className=' btn-3 mt-4'>Privacy</button></Link>
                    </div>

                    <div className='col-5 edit'>
                       <input type="text" id="form1Example2" placeholder='New password **********' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />
                       <input type="text" id="form1Example2" placeholder='Confirm password **********' className="form-control shadow-none borber border-2 border-start-0 border-end-0 border-top-0 w-100 mt-1" />                    
                       <div className='d-flex justify-content-center'>
                          <button className=' btn1 mt-4 '>Submit</button>
                       </div>
                   </div>

                  <div className='col-4 mt-5 mb-4'>
                     <img src='./image/Change-password.png' alt='Change-password' className='w-100 h-100 mt-3 mx-5 mb-3'></img>
                  </div>
                </div> 
            </div>
          <Footer/>
        </>
    )
}

export default Home