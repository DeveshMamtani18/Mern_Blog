import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Dashprofile from '../components/dashprofile'
import Dashsidebar from '../components/dashsidebar'

function Dashboard() {
  const location=useLocation()
  const [tab, settab] = useState('')
  useEffect(() => {
    const urlparams = new URLSearchParams(location.search)

    const tabfound=urlparams.get('tab')
if (tabfound) {
  settab(tabfound)
}  
  
  }, [location.search])
  
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
<div className="sidebar md:w-56">
  <Dashsidebar/>
  </div>   
  {tab==='profile' && <Dashprofile/>} 
</div>
  )
}

export default Dashboard
