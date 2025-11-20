import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
   const data = await res.json();
   console.log(data);

  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type="password" placeholder='Password' id='password' className='border p-3 rounded-lg' onChange={handleChange} />
        <button className='bg-slate-700 text-white border rounded-lg p-3 hover:opacity-80 disabled:opacity-80 cursor-pointer'>SIGN IN</button>
      </form>
      <div className='flex gap-2 m'>
        <p className='font-semibold'>New to Ìpàdé?</p>
        <Link to={"/sign-up"}><span className='text-blue-700'>Create account</span></Link>

      </div>
    </div>
  )
}
