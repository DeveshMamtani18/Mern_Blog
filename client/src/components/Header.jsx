import React from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { Link,useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import {useSelector} from 'react-redux'
const Header = () => {
  const path=useLocation().pathname;
  const currentuser=useSelector(state=>state.user.user)
  if (currentuser){
    console.log(currentuser.photourl)
  console.log(currentuser)
}
  return (


    <Navbar className='border-b'>
      <Link to="/"><img className='w-24 sm:w-28' src="/logo.png" alt="" /></Link>
      <form >
        <TextInput
          type='text' placeholder='search...' rightIcon={AiOutlineSearch} className='hidden lg:inline ' />
      </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
      <div className=" flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        {currentuser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt='user'
                img={currentuser.photourl}
              />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentuser.username}</span>
              <span className='block text-sm font-medium'>{currentuser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
            <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider/>
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        ):(
                  <Link to='/Signin'>
          <Button gradientDuoTone='purpleToBlue' outline>
            SignIn

          </Button>
        </Link>
        )}

        <Navbar.Toggle/>

      </div>
        <Navbar.Collapse>
          <Navbar.Link active={path==='/'} as='div'>
            <Link to='/'>
            Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path==='/About'} as='div'>
            <Link to='/About'>
            About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path==='/Contact'} as='div'>
            <Link to='/Contact'>
            Contact Us
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
