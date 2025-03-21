import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link,useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
const Header = () => {
  const path=useLocation().pathname;
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

        <Link to='/Signin'>
          <Button gradientDuoTone='purpleToBlue' outline>
            SignIn

          </Button>
        </Link>
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
