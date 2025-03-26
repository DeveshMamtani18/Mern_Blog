import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../pages/Dashboard'
import Signin from '../pages/Signin'
import { Outlet,Navigate } from 'react-router-dom'



function privateroute() {
    const {user}=useSelector(state=>state.user)
  return  user?<Outlet/>:<Navigate to='/signin'/>
  
  
}

export default privateroute
