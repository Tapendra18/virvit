import React from 'react'
import Footer from './Footer'
import HeaderLanding from './HeaderLanding'

const Home = () => {

    return (
        <>
            <HeaderLanding />
            <div className='container-fluid mt-5 '>
                <div className='row mx-4 Div-top'>
                    <div className='col-3'>
                        <input className='form-control shadow-none border-dark ' placeholder='Job Title, Keyword or Company' />
                    </div>

                    <div className='col-3 '>
                        <input className='form-control shadow-none border-dark ' placeholder='Area city or town' />
                    </div>

                    <div className='col-3 '>
                        <input className='form-control shadow-none border-dark ' placeholder='All job Specialization' />
                    </div>

                    <div className='col-3'>
                        <button className='btn1'>Search</button>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12 fs-3 grad'>
                        <span className='d-block mx-4 mt-3'> 51 Goldhill Plaza #21-10 Singapore 308900</span>
                        <span className='d-block mx-4'>Tel: +65 64931133</span>
                        <span className='mx-4 mb-3 d-block'> info@virvit.sg</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home