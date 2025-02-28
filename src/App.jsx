import { useState } from 'react'

import './App.css'

import Home from './components/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Discover_Athletes from './components/Pages/Discover_Athletes/Discover_Athletes'
import Profile from './components/Pages/Profile/Profile'
import ContactForm from './components/Pages/ContactPage/ContactForm'
import LoginForm from './components/Admin/LoginForm'
import DashboardHome from './components/Admin/DashboardHome'
import { EditProfile } from './components/Admin/EditProfile'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <Home></Home>
          } />
          <Route path='/discover_athlete' element={
            <Discover_Athletes></Discover_Athletes>
          }></Route>
          <Route path='/profile/:uid' element={<Profile></Profile>} ></Route>
          <Route path='/contact' element={<ContactForm></ContactForm>}></Route>
          <Route path='/login' element={<LoginForm></LoginForm>}></Route>
          <Route path='/dashboardhome' element={<DashboardHome></DashboardHome>}></Route>

        </Routes>

      </Router >
    </>
  )
}

export default App
