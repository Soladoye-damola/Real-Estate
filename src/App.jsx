import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router'
import HomePage from './pages/Home-Page'
import SignUp from './pages/Sign-Up'
import SignIn from './pages/Sign-In'
import SignOut from './pages/Sign-Out'
import ProfilePage from './pages/Profile-Page'
import AboutPage from './pages/About-Page'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='sign-up' element={<SignUp/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      <Route path='sign-out' element={<SignOut/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='profile' element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
