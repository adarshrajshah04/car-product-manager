import React from 'react'
import Hero from './components/Hero'
import Product from './components/Product'
import { Routes,Route } from 'react-router-dom'
import SingalProduct from './components/SingalProduct'
import Login from './components/Login'
import AddData from './components/AddData'
import Private from './components/Private'



const App = () => {
  return (
    <div>
      
      <Routes>
        
       <Route path='/' element={<Private/>}>
        <Route index element={<Hero/>}/>
       <Route path='/home' element={<Hero/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/product/add' element={<AddData/>}/>
       <Route path='/product/:id' element={<SingalProduct/>}/>
       </Route>
       
       <Route path='/login' element={<Login/>}/>
      </Routes>
     
    </div>
  )
}

export default App
