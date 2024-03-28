import React from 'react'
import DashBoard from './Pages/DashBoard/DashBoard'
import Performance from './Pages/Chart/Performance';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import SideNav from './Components/SideNav';
function App() {
  return (
    <div style={{display:"flex"}}>
    <BrowserRouter>
    <SideNav/>

    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/performance' element={<Performance/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App