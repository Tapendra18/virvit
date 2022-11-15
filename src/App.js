import { Route, Routes } from "react-router-dom"
import Login from "./component/Login";
import Register from "./component/Register";
import Emp from "./component/Emp";
import CandidateLogin from "./component/CandidateLogin"
import Candidate from "./component/Candidate"
import CandidateView from "./component/CandidateView"
import Landing from "./component/Landing"
import LandingAbout from "./component/LandingAbout"
import Contact from "./component/Contact"
import EditProfile from "./component/EditProfile"
import Privacy from "./component/Privacy"
import ChangePassword from "./component/ChangePassword"
import Login2 from "./component/login2";
import Notification from "./component/Notification";
// import ProfileEdit from "./component/ProfileEdit"
import ViewProfile from "./component/ViewProfile"
import './App.css'

function App() {
 
  return (
    <>

      {/* <nav>
        <ul className="d-flex justify-content-between">
          <li><Link to="/search">Home</Link></li>
          <li><Link to="/emp">Emp</Link></li>
          <li> <Link to="/register">Register</Link> </li>
          <li> <Link to="/login">Login</Link> </li>
          <li> <Link to="/candidateview">CandidateView</Link> </li>
          <li> <Link to="/candidatelogin">Candidatelogin</Link> </li>
          <li> <Link to="/">Landing</Link> </li>
          <li> <Link to="/about">LandingAbout</Link> </li>
          <li> <Link to="/contact">Contact</Link> </li>
          <li> <Link to="/editprofile">EditProfile</Link> </li>
          <li> <Link to="/privacy">Privacy</Link> </li>

        </ul>
      </nav> */}


      <Routes>
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/emp" element={<Emp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidateView" element={<CandidateView />} />
        <Route path="/candidateLogin" element={<CandidateLogin />} />
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<LandingAbout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/changepassword" element={<ChangePassword/>} />
        <Route path="/login2" element={<Login2/>} />
        <Route path="/viewprofile" element={<ViewProfile/>} />
        <Route path="/notification" element={<Notification/>} />


        {/* <Route path="/profileEdit" element={<ProfileEdit/>}/> */}
      </Routes>

    </>



  );
}

export default App;
