import React from 'react'
import { Link, redirectDocument, useNavigate } from 'react-router'
import { useState } from 'react'

export default function SignUp() {
  const [formData, setFormData] =useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] =useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = async (e)=>{
  e.preventDefault();
  try{
  setLoading(true);
  const res =  await fetch('/api/auth/signup',
  {
   method:'POST',
   headers:{
           'content-type': 'application/json'
   },
    body:JSON.stringify(formData)
  }
  );
  const data = await res.json();
  if (data.success === false){
    setError(data.message);
    setLoading(false)
    return;
  }
  setError(null);
  setLoading(false);
  navigate('/sign-in');
  }catch(error){
    setLoading(false);
    setError(error.message);
  }
}

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type="email" placeholder='Email' id='email' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type="password" placeholder='Password' id='password' className='border p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white border rounded-lg p-3 hover:opacity-80 disabled:opacity-80 cursor-pointer'> {loading ? 'LOADING...' : 'SIGN UP'}</button>
      </form>
      <div className='flex gap-2 m'>
        <p className='font-semibold'>Have an account before?</p>
        <Link to={"/sign-In"}><span className='text-blue-700'>Sign In</span></Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
