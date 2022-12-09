import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <hr className="Line"/> */}
      <div className='footer'>
        <div className="container-fluid ">
          <div className='row mt-2'>
            <div className='col-6 footer-part d-flex justify-content-around'>
              <a className='text-decoration-none footer-a' href='/contact'>Contact Us</a>
              <a className='text-decoration-none footer-a' href='/privacy'>Privacy</a>
              <a className='text-decoration-none footer-a' href='#'>Terms & Conditions</a>
            </div>

            <div className=' col-6 d-flex justify-content-end mb-2'>
              <a href='/'> <img className='social-image mx-2' src='/social-icon/facebook.png' alt='telegram' /></a>
              <a href='/' className=''><img className='social-image mx-2' src='/social-icon/youtube.png' alt='youtube' /></a>
              <a href='/'><img className='social-image mx-2' src='/social-icon/instagram.png' alt='instagram' /></a>
              <a href='/' className=''><img className='social-image mx-2' src='/social-icon/linkedin.png' alt='linkedin' /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer