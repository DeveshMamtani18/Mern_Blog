import React, { useEffect } from 'react'
import { useState,useRef } from 'react'
import {useSelector} from 'react-redux'
import { TextInput,Button } from 'flowbite-react'

const dashprofile = () => {
    const {user} = useSelector(state => state.user)
    const [img, setimg] = useState(null)
    const [url, seturl] = useState(null)
    const filepick=useRef()
    const handleimagechange=(e)=>{
        const file=e.target.files[0]
        if(file){
            setimg(e.target.files[0]);
            seturl(URL.createObjectURL(e.target.files[0]))
}
    }
   useEffect(() => {
    if (img){
        uploadimage()
    }
   }, [img])

   const uploadimage=async()=>{
    
   }
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'> Profile </h1>
      <form className='flex flex-col gap-4'>
        <input type="file" accept='image/*' onChange={handleimagechange} ref={filepick} hidden />
        <div className="w-32 h-32  self-center cursor-pointer shadow-md overflow-hidden rounded-full " onClick={
            ()=>{
            filepick.current.click()
            }
        } >
        <img src={url||user.photourl} alt="user" className='rounded-full w-full h-full border-4 object-cover border-[lightgray]' />
        </div>
        <TextInput
        type='text'
        id='username'
        placeholder='username'
        defaultValue={user.username}
        
        >
            </TextInput>
        <TextInput
        type='email'
        id='email'
        placeholder='email'
        defaultValue={user.email}
        
        >
            </TextInput>
        <TextInput
        type='password'
        id='password'
        placeholder='password'
        
        
        >

        </TextInput>
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update</Button>
      </form>
      <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>SignOut</span>
      </div>
    </div>
  )
}

export default dashprofile
