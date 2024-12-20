import React from 'react'
import { FaPen } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';

const Blog = () => {
  const {theme} = useTheme()
  return (
    <div>
      <div className={`${theme == "light" ? "bg-gray-100" : "bg-gray-800 border"} `}>
        <div className='p-4'>
        <h2 className={`${theme == "light" ? "font-semibold" : "text-white"}`}>The Overflow Blog</h2>
        <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-row gap-3 ">
                <span className={`mt-1 ${theme == "light" ? "" : "text-white"}`}><FaPen/></span>
                <p className={`text-sm ${theme == "light" ? "text-gray-500 font-semibold" : "text-white font-semibold"} `}>The unexpected benefits of mentoring others</p>
            </div>
            <div className="flex flex-row gap-3 ">
                <span className={`mt-1 ${theme == "light" ? "" : "text-white"}`}><FaPen/></span>
                <p className={`text-sm ${theme == "light" ? "text-gray-500 font-semibold" : "text-white font-semibold"} `}>Podcast 354:Building for AR with Niantic Labs'augmented reality SDK</p>
            </div>
        </div>
        <br />
        <h2 className={`${theme == "light" ? "font-semibold" : "text-white"}`}>Featured & Meta</h2>
        <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-row gap-3 ">
                <span className={`mt-1 ${theme == "light" ? "" : "text-white"}`}><FaPen/></span>
                <p className={`text-sm ${theme == "light" ? "text-gray-500 font-semibold" : "text-white font-semibold"} `}>Podcast 354:Building for AR with Niantic Labs'augmented reality SDK</p>
            </div>
        </div>
        </div>
      </div>
      <div className="">
        <div className={`${theme == "light" ? "bg-gray-200 p-4" : "bg-gray-800 border p-4"} `}>
        <h2 className={`${theme == "light" ? "font-semibold" : "text-white"}`}>Hot meta post</h2>
        <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-row gap-3 ">
                <span className={`${theme == "light" ? "mt-1 font-semibold" : "text-white font-semibold"}`}>8</span>
                <p className={`text-sm mt-1 ${theme == "light" ? "text-gray-500 font-semibold" : "text-white font-semibold"} `}>Tags [driver] and [device-driver] appear to be reductant</p>
            </div>
            <div className="flex flex-row gap-3 ">
                <span className={`${theme == "light" ? "mt-1 font-semibold" : "text-white font-semibold"}`}>27</span>
                <p className={`text-sm mt-1 ${theme == "light" ? "text-gray-500 font-semibold" : "text-white font-semibold"} `}>How to handle dupes where A is closed as dup of B but i have an answer that...</p>
            </div>
            <div className="flex flex-row gap-3 ">
                <span className={`${theme == "light" ? "mt-1 font-semibold" : "text-white font-semibold"}`}>27</span>
                <p className={`text-sm mt-1 ${theme == "light" ? "text-gray-500 font-semibold" : "text-white font-semibold"} `}>Ambiguous tag [containers]</p>
            </div>
        </div>
        <br />
        </div>
      </div>
      <div className='p-4'>
        <h3 className={`${theme == "light" ? "font-semibold" : "text-white"}`}>Custom Filter</h3>
        <div className='border p-3 border-gray-400'>
            <p className='text-sm text-blue-500'>add custom filters</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
