import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Blog from './components/Blog';

const App = () => {
  const [searchTerm , setsearchTerm] = useState("")
  return (
    <>
      <Navbar setsearchTerm={setsearchTerm}/>
      <div className=" my-4 px-4 mx-auto">
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
    </>
  );
};

export default App;
