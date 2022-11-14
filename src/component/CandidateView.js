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

                

               </Tab>
               <Tab eventKey="saved" title=" SavedJobs">
                  {/* <Sonnet /> */}
               </Tab>
            </Tabs>
           
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
         <Footer />
      </>
   )
}

export default Home