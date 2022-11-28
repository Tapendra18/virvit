import React from 'react'
import Footer from './Footer'
import HeaderLanding from './HeaderLanding'
// import HeaderLanding from './HeaderLanding'

const Home = () => {
  
    return (
        <>
         <HeaderLanding/>
         
            <div className='container-fluid Div-top'>     
                <div className='row'>
                    <div className='col-12 LandingAbout'>
                       <a className='  fw-normal fs-1 text-decoration-none mx-3' href="/about">About</a>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 mt-4'>
                        <p className='fh-2 mx-3 fs-5'>Apptopia has a very well structured About Us page, which includes a variety of different information categories for their visitors, including their mission, leadership, their team, investors, and also their locations around the world. All the information on their page is categorized in a way that is highly presentable and makes it easier for visitors to jump to any one of their preferred sections. This all in one About Us page example is a great one to watch if you want to go down this road.</p>
                    </div>
                </div>
    
                <div className='row'>
                    <div className='col-12 mt-3'>
                       <div className=' mb-1 w-50'>
                            <img className='w-25 h-25'src='./image/google_store.png' alt='google_store'/>
                            <img className='w-25 h-25 mx-4'src='./image/ios_store.png' alt='ios_store'/>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 mt-4'> 
                        <span className='mx-3 fs-5'>The interests of our customers are always top priority for us, as much as we enjoy making them available to you. <a className='fs-5' href='#'>https//virvit.org/login</a>  You should take the time to do this too. Don’t wait. Do it now. </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home