import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import TopHeader from './global/TopHeader'
{/* <Navigate></Navigate> */}


const Private = () => {
    const token=sessionStorage.getItem('accessToken')
  return (
    <div>
      {token?<><TopHeader/><Outlet/></>:<><Navigate to='/login'/></>}
    </div>
  )
}

export default Private
