import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import { signInstart,signInSuccess, signInFail } from '../redux/User/UserSlice';
import { useDispatch,useSelector } from 'react-redux';
import Oauth from '../components/Oauth';
function Signin() {
  const [form, setform] = useState({ email: '', password: '' });
 
  const {loading,error:error}=useSelector(state=>state.user)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Log form updates
  useEffect(() => {
    console.log(form);
  }, [form]);

  const HandleChange = (e) => {
    setform({ ...form, [e.target.id]: e.target.value.trim() });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return dispatch(signInFail('All fields are required'));
    }

    try {
      dispatch(signInstart());


      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('Signup Success:', data);

      if (data.success === false) {
       
        dispatch(signInFail(data.message));
      }

      

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
dispatch(signInFail(error.message));
      
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row">
        {/* Left Side */}
        <div className="md:mx-0 mx-auto flex-1 pr-0 md:pr-32">
          <Link to="/">
            <img className="relative dark:invert w-72 sm:w-80" src="/logo1.svg" alt="" />
          </Link>
          <p className="absolute mt-[-50px] ml-[70px] text-md">
            Share. Inspire. Connect.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                name="email"
                onChange={HandleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                name="password"
                onChange={HandleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                'Sign in'
              )}
            </Button>
            <Oauth/>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>

          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;
