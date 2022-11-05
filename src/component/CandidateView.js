import React from 'react'
import Footer from './Footer'
import HeaderEdit from './HeaderEdit'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Home = () => {
   return (
      <>
         <HeaderEdit />
         <div className='container-fluid mt-5 Div-top'>
            <Tabs
               defaultActiveKey="apply"
               id="justify-tab-example"
               className="mb-3"
               justify
            >
               <Tab eventKey="apply" className='CandiView' title="ApplyiedJobs">
                  {/* <Sonnet /> */}
                  <div className='row border border-2 mb-4 rounded-3 mx-5'>
                     <div className='col-6 mb-3 mt-3'>
                        <a className='text-decoration-none footer-a' href='/'>ITX INFOTECH </a>
                        <span className='d-block'>Tech Engineer</span>
                        <span>4-5 year exp</span>
                        <span className='d-block'>SDG 7000-8000</span>
                        <span>Networking , CCNA ,Advance Networking</span>
                     </div>

                     <div className='col-6'>
                        <button className='btn-3 mx-4 mt-5'>APPLYIED</button>
                        <button className=' btn-3'>SAVED</button>
                     </div>
                  </div>

                  <div className='row border border-2 mb-4 rounded-3 mx-5'>
                     <div className='col-6 mb-3 mt-3'>
                        <a className='text-decoration-none footer-a' href='/'>ITX INFOTECH </a>
                        <span className='d-block'>Tech Engineer</span>
                        <span>4-5 year exp</span>
                        <span className='d-block'>SDG 7000-8000</span>
                        <span>Networking , CCNA ,Advance Networking</span>
                     </div>

                     <div className='col-6'>
                        <button className='btn-3 mx-4 mt-5'>APPLYIED</button>
                        <button className=' btn-3'>SAVED</button>
                     </div>
                  </div>

                  <div className='row border border-2 mb-4 rounded-3 mx-5'>
                     <div className='col-6 mb-3 mt-3'>
                        <a className='text-decoration-none footer-a' href='/'>ITX INFOTECH </a>
                        <span className='d-block'>Tech Engineer</span>
                        <span>4-5 year exp</span>
                        <span className='d-block'>SDG 7000-8000</span>
                        <span>Networking , CCNA ,Advance Networking</span>
                     </div>

                     <div className='col-6'>
                        <button className='btn-3 mx-4 mt-5'>APPLYIED</button>
                        <button className=' btn-3'>SAVED</button>
                     </div>
                  </div>

                  <div className='row border border-2 mb-4 rounded-3 mx-5'>
                     <div className='col-6 mb-3 mt-3'>
                        <a className='text-decoration-none footer-a' href='/'>ITX INFOTECH </a>
                        <span className='d-block'>Tech Engineer</span>
                        <span>4-5 year exp</span>
                        <span className='d-block'> SDG 7000-8000</span>
                        <span className=''>Networking , CCNA ,Advance Networking</span>
                     </div>

                     <div className='col-6'>
                        <button className='btn-3 mx-4 mt-5'>APPLYIED</button>
                        <button className=' btn-3'>SAVED</button>
                     </div>
                  </div>

                  <div className='col-12 d-flex justify-content-center'>
                     <a className='text-decoration-none footer-a mx-2' href='/'>Page No: </a>
                     <a className='text-decoration-none footer-a mx-1' href='/'>1 </a>
                     <a className='text-decoration-none footer-a' href='/'> 2</a>
                     <a className='text-decoration-none footer-a mx-1' href='/'>3 </a>
                     <a className='text-decoration-none footer-a' href='/'>4 </a>
                     <a className='text-decoration-none footer-a mx-1' href='/'>5 </a>
                     <a className='text-decoration-none footer-a' href='/'>. </a>
                     <a className='text-decoration-none footer-a mx-1' href='/'>. </a>
                     <a className='text-decoration-none footer-a' href='/'>. </a>
                     <a className='text-decoration-none footer-a mx-1' href='/'>. </a>
                     <a className='text-decoration-none footer-a' href='/'>. </a>
                     <a className='text-decoration-none footer-a mx-1' href='/'>8 </a>
                  </div>

               </Tab>
               <Tab eventKey="saved" title=" SavedJobs">
                  {/* <Sonnet /> */}
               </Tab>
            </Tabs>
            {/* <div className='row text-center p-5'>
               <div className='col-6'>
                  <button className='CandiView'>Applyied Jobs</button>
               </div>

               <div className='col-6'>
                  <button className='CandiView'>Saved Jobs</button>
               </div>
            </div> */}



         </div>
         <Footer />
      </>
   )
}

export default Home