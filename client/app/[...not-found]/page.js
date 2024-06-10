import Link from 'next/link';
import React from 'react'

 const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
     <div className='flex flex-col items-center  text-center'>
     <h1 className='text-[7rem] md:text-[11rem] text-blue-600 font-bold bg-gradient-to-r from-blue-600 via-green-400 to-blue-400 inline-block text-transparent bg-clip-text'style={{ padding: '0', lineHeight: '1' }}>OOPS!</h1>
      <h4 className='mt-2 font-bold'>404-PAGE NOT FOUND</h4>
      <h5 className='w-[60%]  mt-2'>The page you are looking for might have been removed had its name 
        chnage or is temporay unavailable
      </h5>
      <Link href={'/'}  className='mt-4 border font-semibold border-blue-700 text-blue-700 px-2 py-2 hover:text-white hover:bg-blue-700 hover:border-none'>Back to Home</Link>
     </div>
    </div>
  )
}

export default NotFound;