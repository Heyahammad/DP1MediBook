import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointments/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App


// import React from 'react'
// import Navbar from '../src/components/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Doctors from './pages/Doctors'
// import Login from './pages/Login'
// import Myprofile from './pages/Myprofile'
// import Myappointments from './pages/Myappointments'
// import Appointment from './pages/Appointment'
// import Footer from './components/Footer'
// import Verify from './pages/Verify'
// function App() {
//   return (
//     <div className='mx-4 sm:mx-[10%]'>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/doctors/:speciality" element={<Doctors />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/my-profile" element={<Myprofile />} />
//         <Route path="/my-appointment" element={<Myappointments />} />
//         <Route path="/appointments/:docId" element={<Appointment />} />
//         <Route path='/verify' element={<Verify />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App