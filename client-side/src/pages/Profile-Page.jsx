import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfilePage() {
  const {currentUser} = useSelector((state)=>state.user);
  return (
    <div>
  <h3 className='text-center mt-10 font-bold'>Profile</h3>
  <form className='flex flex-col gap-4 max-w-lg mx-auto p-4' action="">
    <img 
      src={currentUser?.avatar} 
      alt="Profile avatar" 
      className="rounded-full w-24 h-24 mx-auto object-cover"
    />
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-3'>
        <label htmlFor='username' className='font-medium w-20'>Username:</label>
        <input 
          className='border p-3 rounded-lg flex-1' 
          type='text' 
          id='username'
          value={currentUser.username}
        />
      </div>
      <div className='flex items-center gap-3'>
        <label htmlFor='username' className='font-medium w-20'>Email:</label>
        <input 
          className='border p-3 rounded-lg flex-1' 
          type='text' 
          id='username'
          value={currentUser.email}
        />
      </div>
      <div className='flex items-center gap-3'>
        <label htmlFor='password' className='font-medium w-20'>Password:</label>
        <input 
        placeholder='New password'
          className='border p-3 rounded-lg flex-1' 
          type='password' 
          id='password'
        />
      </div>
    </div>
    <button 
      type='submit' 
      className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
    >
      Update
    </button>
    <button type='submit' className='bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
  </form>
</div>
  )
}
