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
        <li className='flex items-center text-sm gap-2 border-r-orange-600 border-r-4 p-2 rounded-t-sm rounded-l-sm rounded-r-sm rounded-b-sm bg-orange-100 font-semibold'>
          <span className='text-orange-500 text-lg'><RiHomeLine /></span>
          HOME
        </li>
       <br />
       <li className='flex text-sm items-center gap-2 p-2 font-semibold text-gray-500'>
        <span className='text-orange-500 text-lg'><FaGlobeAsia/></span>
        PUBLIC
       </li>
       <li className='ml-8 text-sm mb-1 text-gray-700 font-semibold '>Questions</li>
       <li className='ml-8 text-sm mb-1 text-gray-700 font-semibold '>Tags</li>
       <li className='ml-8 text-sm text-gray-700 font-semibold '>Users</li>
       <br />
       <li className='flex items-center gap-2 p-2 text-sm font-semibold text-gray-500'>
        <span className='text-orange-500 text-lg'><SiOpencollective/></span>
        COLLECTIVES
       </li>
       <li className='ml-8 text-sm text-gray-700 font-semibold '>Explore Jobs</li>
       <br />
       <li className='flex items-center gap-2 p-2 text-sm font-semibold text-gray-500'>
        <span className='text-orange-500 text-lg'><FaSuitcase/></span>
        FIND JOBS
       </li>
       <li className='ml-8 text-sm text-gray-700 font-semibold '>Jobs</li>
       <li className='ml-8 text-sm text-gray-700 font-semibold '>Companies</li>
       <br />
       <li className='flex items-center gap-2 p-2 text-sm font-semibold text-gray-500'>
        <span className='text-orange-500 text-lg'><FaPeopleGroup/></span>
        TEAMS
       </li>
       <li className='ml-8 text-sm text-gray-700 font-semibold '>+ Create a team</li>
      </ul>
    </div>
  );
};

export default Sidebar;
