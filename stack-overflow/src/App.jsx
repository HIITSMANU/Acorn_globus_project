import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Blog from './components/Blog';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4 px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Sidebar */}
          <div className="sm:col-span-2 ">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="sm:col-span-7 ">
            <MainContent/>
          </div>

          {/* Blog Section */}
          <div className="sm:col-span-3">
            <Blog/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
