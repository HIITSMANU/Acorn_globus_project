import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Blog from './components/Blog';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const [searchTerm , setsearchTerm] = useState("")
  const {theme} = useTheme()
  return (
    <>
      <div className={`${theme == "light" ? "bg-white" : "bg-gray-800 border"}`}>
      <Navbar setsearchTerm={setsearchTerm}/>
      <div className={`${theme == "light" ? "bg-white" : "bg-gray-800"} my-4 px-1 mx-auto`}>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-2 ">
            <Sidebar />
          </div>

          <div className="sm:col-span-7 ">
            <MainContent searchTerm={searchTerm}/>
          </div>

          <div className="sm:col-span-3">
            <Blog/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default App;
