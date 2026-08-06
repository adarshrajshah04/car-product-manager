import React from 'react'
import Hero from './components/Hero'
import TopHeader from './components/global/TopHeader'
import Product from './components/Product'
import { Routes,Route } from 'react-router-dom'
import SingalProduct from './components/SingalProduct'


const App = () => {
  return (
    <div>
      <TopHeader/>
      <Routes>
       <Route index element={<Hero/>}/>
       <Route path='/home' element={<Hero/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/product:id' element={<SingalProduct/>}/>
      </Routes>
     
    </div>
  )
}

export default App
