import React from 'react';
import { RiHomeLine } from "react-icons/ri";
import { FaGlobeAsia } from "react-icons/fa";
import { SiOpencollective } from "react-icons/si";
import { FaSuitcase } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className=''>
      <ul className='flex flex-col'>
        <li className='flex items-center text-sm gap-2 border-r-orange-600 border-r-4 p-2 rounded-t-sm rounded-l-sm rounded-r-sm rounded-b-sm bg-orange-100'>
          <span className='text-orange-500'><RiHomeLine /></span>
          HOME
        </li>
       <br />
       <li className='flex text-sm items-center gap-2 p-2 font-semibold text-gray-500'>
        <span className='text-orange-500'><FaGlobeAsia/></span>
        PUBLIC
       </li>
       <li className='ml-8 text-sm mb-1 text-gray-700 '>Questions</li>
       <li className='ml-8 text-sm mb-1 text-gray-700 '>Tags</li>
       <li className='ml-8 text-sm text-gray-700 '>Users</li>
       <br />
       <li className='flex items-center gap-2 p-2 text-sm font-semibold text-gray-500'>
        <span className='text-orange-500'><SiOpencollective/></span>
        COLLECTIVES
       </li>
       <li className='ml-8 text-sm text-gray-700 '>Explore Jobs</li>
       <br />
       <li className='flex items-center gap-2 p-2 text-sm font-semibold text-gray-500'>
        <span className='text-orange-500'><FaSuitcase/></span>
        FIND JOBS
       </li>
       <li className='ml-8 text-sm text-gray-700 '>Jobs</li>
       <li className='ml-8 text-sm text-gray-700 '>Companies</li>
       <br />
       <li className='flex items-center gap-2 p-2 text-sm font-semibold text-gray-500'>
        <span className='text-orange-500'><FaPeopleGroup/></span>
        TEAMS
       </li>
       <li className='ml-8 text-sm text-gray-700 '>+ Create a team</li>
      </ul>
    </div>
  );
};

export default Sidebar;
