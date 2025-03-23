import React from 'react'
import { Button } from 'flowbite-react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider,signInWithPopup,getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/User/UserSlice'
import app from '../firebase';
import { useNavigate } from 'react-router-dom'
function Oauth() {
    const auth = getAuth(app);
    const Navigate = useNavigate()
    const dispatch = useDispatch()
     const handlegoogleclick=async ()=>{
        const Provider=new GoogleAuthProvider()
        Provider.setCustomParameters({prompt:'select_account'})
        try {
           
            const resultdsfromgoogle=await signInWithPopup(auth,Provider)
            const res = await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:resultdsfromgoogle.user.displayName,email:resultdsfromgoogle.user.email,photourl:resultdsfromgoogle.user.photoURL})
            })
            const data = await res.json()
            if (res.ok){
                dispatch(signInSuccess(data))
                Navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
     }
  return (
    <div>
      <Button className='w-full' type='button' gradientDuoTone='pinkToOrange' outline onClick={handlegoogleclick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Sign in with Google
      </Button>
    </div>
  )
}

export default Oauth
