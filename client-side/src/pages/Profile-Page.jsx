import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserStart, updateUserSuccess, updateUserFailure } from '../redux/userSlice'

export default function ProfilePage() {
  const {currentUser, loading, error} = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [uploading, setUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileRef = useRef(null);
  const dispatch = useDispatch();

  const CLOUD_NAME = 'dsowpgvpt';
  const UPLOAD_PRESET = 'profile_pictures'; 

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setImageUploadError('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setImageUploadError('Image must be less than 5MB');
      return;
    }

    setImageUploadError(null);
    setUploadSuccess(false);
    await uploadImageToCloudinary(file);
  };

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', UPLOAD_PRESET);
    data.append('cloud_name', CLOUD_NAME);

    try {
      setUploading(true);
      
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: data,
        }
      );

      const result = await response.json();

      if (result.secure_url) {
        setFormData((prev) => ({ ...prev, avatar: result.secure_url }));
        setImageUploadError(null);
        setUploadSuccess(true);
        setUploading(false);
      } else {
        setImageUploadError('Image upload failed');
        setUploading(false);
      }
    } catch (error) {
      setImageUploadError('Error uploading image: ' + error.message);
      setUploading(false);
      console.error('Upload error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Object.keys(formData).length === 0) {
      alert('No changes to update');
      return;
    }

    try {
      dispatch(updateUserStart());
      
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Log for debugging
      console.log('Response status:', res.status);
      console.log('Response data:', data);

      // Check if request failed
      if (!res.ok || data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      // Success
      dispatch(updateUserSuccess(data));
      setUploadSuccess(false);
      alert('Profile updated successfully!');
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          onChange={handleFileChange}
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
        />
        
        {/* Profile Image with Loading Spinner */}
        <div className='relative self-center'>
          <img
            onClick={() => !uploading && fileRef.current.click()}
            src={formData.avatar || currentUser.avatar}
            alt='profile'
            className={`rounded-full h-24 w-24 object-cover self-center mt-2 ${
              uploading ? 'opacity-50' : 'cursor-pointer hover:opacity-80'
            }`}
          />
          {uploading && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700'></div>
            </div>
          )}
        </div>

        {/* Upload Status Messages */}
        <p className='text-sm self-center'>
          {imageUploadError ? (
            <span className='text-red-700'>{imageUploadError}</span>
          ) : uploading ? (
            <span className='text-slate-700 font-semibold'>Uploading image...</span>
          ) : uploadSuccess ? (
            <span className='text-green-700'>Image uploaded! Click Update to save.</span>
          ) : (
            <span className='text-gray-500'>Click image to upload</span>
          )}
        </p>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <input
              className='border p-3 rounded-lg flex-1'
              type='text'
              id='username'
              placeholder='username'
              defaultValue={currentUser.username}
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center gap-3'>

            <input
              className='border p-3 rounded-lg flex-1'
              type='email'
              id='email'
              placeholder='email'
              defaultValue={currentUser.email}
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center gap-3'>
            <input
              className='border p-3 rounded-lg flex-1'
              type='password'
              id='password'
              placeholder='New password'
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          disabled={loading || uploading}
          className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Updating...' : 'Update'}
        </button>
        
        <button 
          type='button' 
          className='bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
        >
          Create Listing
        </button>
      </form>

      <div className='flex justify-between mt-5 mb-5 pb-5'>
        <span className='text-red-700 cursor-pointer hover:underline'>Delete account</span>
        <span className='text-red-700 cursor-pointer hover:underline'>Sign out</span>
      </div>

      {error && <p className='text-red-700 mt-5 text-center'>{error}</p>}
    </div>
  );
}