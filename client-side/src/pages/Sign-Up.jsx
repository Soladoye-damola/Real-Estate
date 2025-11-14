import React from 'react'
import { Link } from 'react-router'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form className=' flex flex-col gap-4'>
          <input type="text" placeholder='Username' id='username' className='border p-3 rounded-lg' />
          <input type="text" placeholder='Email' id='email' className='border p-3 rounded-lg' />
          <input type="text" placeholder='Password' id='password' className='border p-3 rounded-lg' />
          <button className='bg-slate-700 text-white border rounded-lg p-3 hover:opacity-80 disabled:opacity-80 cursor-pointer'>SIGN UP</button>
        </form>
        <div className='flex gap-2 mt-2'>
          <p className='font-semibold'>Have an account before?</p>
          <Link to={"/sign-In"}><span className='text-blue-700'>Sign In</span></Link>

        </div>
      </div>
  )
}
