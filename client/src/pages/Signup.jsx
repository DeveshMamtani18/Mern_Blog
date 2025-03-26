import React from 'react'
import Oauth from '../components/Oauth'
import { Link,useNavigate } from 'react-router-dom'
import { Label,TextInput,Button,Alert,Spinner } from 'flowbite-react'
import { useState } from 'react'
import { set } from 'mongoose';

function Signup() {
  const [form, setform] = useState({});
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const HandleChange=(e)=>{
    setform({...form,[e.target.id]:e.target.value.trim()})
    console.log(form)
  }

  const handlesubmit=async (e)=>{
  
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      return seterror('All fields are required');
    }

  try {

      setloading(true);
      seterror(null);
    const res = await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    });

  
    const data = await res.json();
    console.log('Signup Success:', data);

    if (data.success===false) {
      return seterror(data.message);
    }
  setloading(false);
  if(res.ok){
    navigate('/Signin')
  }
  } catch (error) {
    seterror(error.message);
    setloading(false);
  }
  }
  return (
    <div className='min-h-screen mt-20 '>
      <div className="flex  p-3 max-w-3xl mx-auto flex-col md:flex-row ">
      {/* left */}
      <div className="md:mx-0 mx-auto flex-1 pr-0 md:pr-32">
      <Link to="/"><img className='relative dark:invert w-72 sm:w-80' src="/logo1.svg" alt="" /></Link>
      <p className=' absolute mt-[-50px] ml-[70px] text-md '> Share. Inspire. Connect.</p>
      </div>
      {/* right */}
      <div className="flex-1">
        <form className='flex flex-col gap-4' onSubmit={handlesubmit} >
          <div className="">
            <Label value='your username'></Label>
            <TextInput 
              type='text' placeholder='username' id='username' name='username'  onChange={HandleChange}
            />
          </div>
          <div className="">
            <Label value='your email'></Label>
            <TextInput 
              type='email' placeholder='name@company.com' id='email' name='email'  onChange={HandleChange}
            />
          </div>
          <div className="">
            <Label value='your password'></Label>
            <TextInput 
              type='password' placeholder='password' id='password' name='password'  onChange={HandleChange}
            />
          </div>
          <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
  {loading ? (
    <>
      <Spinner size="sm" />
      <span className="pl-3">Loading...</span>
    </>
  ) : (
    'Sign Up'
  )}
</Button>
<Oauth/>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/Signin' className='text-blue-600 hover:underline'> Sign-in</Link>
        </div>
        {
          error && (
            <Alert className='mt-5' color='failure'>
              {error}
            </Alert>
          )
          
        }
      </div>
      </div>
    </div>
  )
}

export default Signup
