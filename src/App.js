import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Emp from "./components/Emp";
import CandidateLogin from "./components/CandidateLogin"
import Candidate from "./components/Candidate"
import CandidateView from "./components/CandidateView"
import Landing from "./components/Landing"
import LandingAbout from "./components/LandingAbout"
import Contact from "./components/Contact"
import EditProfile from "./components/EditProfile"
import Privacy from "./components/Privacy"
import ChangePassword from "./components/ChangePassword"
import Login2 from "./components/login2";
import Notification from "./components/Notification";
import ForgetPassword from "./components/ForgetPassword";
// import ProfileEdit from "./component/ProfileEdit"
import ViewProfile from "./components/ViewProfile"
import './App.css'
// import {useGetDataQuery} from './services/Post';

function App() {
 

  return (
    <>
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
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        {/* <Route path="/profileEdit" element={<ProfileEdit/>}/> */}
      </Routes>
    </>
  );
}

export default App;
