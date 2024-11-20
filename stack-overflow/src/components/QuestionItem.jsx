import React from "react";
import { MdOutlineReviews } from "react-icons/md";
import { FiTriangle } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const QuestionItem = ({ question }) => {
  const {theme} = useTheme()
  return (
    <div className="border mt-3 p-4 shadow-md">
      <a
          href={question.link}
          target="_blank"
          rel="noreferrer"
          className={`font-bold ${theme == "light" ? "text-gray-500" : "text-white"}`}
        >
          {question.title}
        </a>
      <div className="flex flex-col sm:flex-row gap-3 mt-1 mb-5">
        {question.tags.map((tag) => {
          return (
            <>
              <div className={`flex justify-center p-1 text-sm font-semibold border border-gray-400 rounded-2xl px-4 ${theme == "light" ? "text-gray-500":"text-white"}`}>
                {tag}
              </div>
            </>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex sm:flex-row  justify-between mt-3">
        <div className="flex flex-row gap-7 ">
          <div className={`flex gap-2 flex-row items-center ${theme == "light" ? "text-gray-500":"text-white"}`}>
            <span className="text-orange-500">
              <FiTriangle />
            </span>
            {question.answer_count}
          </div>
          <div className={`flex gap-2 flex-row ${theme == "light" ? "text-black" :"text-white"} items-center`}>
            <span className={`${theme == "light" ? "text-gray-500" :"text-white"}`}>
              <MdOutlineReviews />
            </span>
            {question.score}
          </div>
          <div className={`flex gap-2 flex-row ${theme == "light" ? "text-black" :"text-white"} items-center`}>
            <span className={`${theme == "light" ? "text-gray-500" :"text-white"}`}>
              <IoEyeSharp />
            </span>
            {question.view_count}
          </div>
        </div>
        <div>
          <p className={`text-sm ${theme == "light" ? "text-gray-600 font-semibold" :"text-white font-semibold"} `}>
            asked 55 seconds ago :{" "}
            <span className="text-blue-600">{question.owner.display_name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
