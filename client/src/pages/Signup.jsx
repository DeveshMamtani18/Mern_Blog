import React from 'react'
import { Link } from 'react-router-dom'
import { Label,TextInput,Button } from 'flowbite-react'

function Signup() {
  return (
    <div className='min-h-screen mt-20 '>
      <div className="flex  p-3 max-w-3xl mx-auto flex-col md:flex-row ">
      {/* left */}
      <div className="md:mx-0 mx-auto flex-1 pr-0 md:pr-32">
      <Link to="/"><img className='relative w-72 sm:w-80' src="/logo.png" alt="" /></Link>
      <p className=' absolute mt-[-50px] ml-[70px] text-md '> Share. Inspire. Connect.</p>
      </div>
      {/* right */}
      <div className="flex-1">
        <form className='flex flex-col gap-4' >
          <div className="">
            <Label value='your username'></Label>
            <TextInput 
              type='text' placeholder='username' id='username' name='username' required
            />
          </div>
          <div className="">
            <Label value='your email'></Label>
            <TextInput 
              type='email' placeholder='name@company.com' id='email' name='email' required
            />
          </div>
          <div className="">
            <Label value='your password'></Label>
            <TextInput 
              type='password' placeholder='password' id='password' name='password' required
            />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>SignUp</Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/Signin' className='text-blue-600 hover:underline'> Sign-in</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup
