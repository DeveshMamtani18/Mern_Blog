import React from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
const dashsidebar = () => {
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
    <Sidebar className='w-full md:w-56'>
      <Sidebar.ItemGroup>
        
        <Sidebar.Item as={Link} to='/dashboard?tab=profile' active={tab=== 'profile'} icon={HiUser} label={'user'} labelColor='dark' className='cursor-pointer'>
          Profile
        </Sidebar.Item>
        
        <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer' >
          SignOut
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar>
  )
}

export default dashsidebar
