import React from 'react'
import { FaPen } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className='p-4'>
        <h2 className='font-semibold'>The Overflow Blog</h2>
        <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-row gap-3 ">
                <span className='mt-1'><FaPen/></span>
                <p className='text-sm text-gray-500 font-semibold'>The unexpected benefits of mentoring others</p>
            </div>
            <div className="flex flex-row gap-3 ">
                <span className='mt-1'><FaPen/></span>
                <p className='text-sm text-gray-500 font-semibold'>Podcast 354:Building for AR with Niantic Labs'augmented reality SDK</p>
            </div>
        </div>
        <br />
        <h2 className='font-semibold'>Featured & Meta</h2>
        <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-row gap-3 ">
                <span className='mt-1'><FaPen/></span>
                <p className='text-sm text-gray-500 font-semibold'>Podcast 354:Building for AR with Niantic Labs'augmented reality SDK</p>
            </div>
        </div>
        </div>
      </div>
      <div className="">
        <div className='bg-gray-200 p-4'>
        <h2 className='font-semibold'>Hot meta post</h2>
        <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-row gap-3 ">
                <span className='mt-1 font-semibold'>8</span>
                <p className='text-sm text-gray-500 font-semibold mt-1 '>Tags [driver] and [device-driver] appear to be reductant</p>
            </div>
            <div className="flex flex-row gap-3 ">
                <span className='mt-1 font-semibold'>27</span>
                <p className='text-sm text-gray-500 font-semibold mt-1'>How to handle dupes where A is closed as dup of B but i have an answer that...</p>
            </div>
            <div className="flex flex-row gap-3 ">
                <span className='mt-1 font-semibold'>27</span>
                <p className='text-sm text-gray-500 font-semibold mt-1'>Ambiguous tag [containers]</p>
            </div>
        </div>
        <br />
        </div>
      </div>
      <div className='p-4'>
        <h3 className='font-semibold'>Custom Filter</h3>
        <div className='border p-3 border-gray-400'>
            <p className='text-sm text-blue-500'>add custom filters</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
