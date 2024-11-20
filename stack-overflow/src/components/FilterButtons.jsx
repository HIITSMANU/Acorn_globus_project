import React from "react";

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = ["activity", "votes", "creation", "hot", "week", "month"];

  return (
    <div className="flex flex-col sm:flex sm:justify-between sm:flex-row">
      <div className="flex flex-col gap-5 sm:flex sm:flex-row">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-6 border ${
              activeFilter === filter ? "bg-orange-500 text-white" : "text-gray-500"
            } rounded-2xl text-sm font-semibold h-8 mt-1 ${
              activeFilter !== filter ? "hover:bg-orange-500 hover:text-white" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      <div>
        <button className="btn bg-blue-600 p-1.5 rounded-2xl px-3 mt-1 text-white text-sm font-semibold ml-[33%] sm:ml-0">
          Ask Questions
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
