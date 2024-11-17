import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Sidebar */}
          <div className="sm:col-span-2 ">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="sm:col-span-7 border">
            <h1>Main</h1>
          </div>

          {/* Blog Section */}
          <div className="sm:col-span-3 border">
            <h1>Blog</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
