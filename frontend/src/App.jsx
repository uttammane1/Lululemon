import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Women from './page/Women'
import Men from './page/Men'
import Accessories from './page/Accessories'
import Shoes from './page/Shoes'
import LikeNew from './page/LikeNew'
import SignIn from './page/SignIn'
import MenData from './page/MenData'
import WomenData from './page/WomenData'
import AccerrData from './page/AccerrData'
import ShoesData from './page/ShoesData'
import AllWomen from './page/AllWomen'
import AllMen from './page/AllMen'
import ALLAcces from './page/ALLAcces'
import AllShoes from './page/AllShoes'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/women' element={<Women/>}/>
      <Route path='/women/allwomen' element={<AllWomen/>}/>
      <Route path='/women/:Id' element={<WomenData/>}/>
      <Route path='/men' element={<Men/>} />
      <Route path='/men/allmen' element={<AllMen/>} />
      <Route path='/men/:Id' element={<MenData/>} />
      <Route path='/accessories' element={<Accessories/>}/>
      <Route path='/accessories/allacces' element={<ALLAcces/>}/>
      <Route path='/accessories/:Id' element={<AccerrData/>}/>
      <Route path='/shoes' element={<Shoes/>} />
      <Route path='/shoes/allshoes' element={<AllShoes/>} />
      <Route path='/shoes/:Id' element={<ShoesData/>} />
      <Route path='/likenew' element={<LikeNew/>}/>
      <Route path='/signin' element={<SignIn/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
