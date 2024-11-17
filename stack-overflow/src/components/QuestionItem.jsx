import React from "react";
import { MdOutlineReviews } from "react-icons/md";
import { FiTriangle } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";

const QuestionItem = ({ question }) => {
  return (
    <div className="border mt-3 p-4 shadow-md">
      <a
          href={question.link}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-gray-500"
        >
          {question.title}
        </a>
      <div className="flex flex-row gap-3 mt-1 mb-5">
        {question.tags.map((tag) => {
          return (
            <>
              <div className="flex justify-center p-1 text-sm font-semibold border border-gray-400 rounded-2xl px-4 text-gray-500">
                {tag}
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex flex-row gap-7 ">
          <div className="flex gap-2 flex-row items-center">
            <span className="text-orange-500">
              <FiTriangle />
            </span>
            {question.answer_count}
          </div>
          <div className="flex gap-2 flex-row items-center">
            <span className="text-gray-500">
              <MdOutlineReviews />
            </span>
            {question.score}
          </div>
          <div className="flex gap-2 flex-row items-center">
            <span className="text-gray-500">
              <IoEyeSharp />
            </span>
            {question.view_count}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 font-semibold">
            asked 55 seconds ago :{" "}
            <span className="text-blue-600">{question.owner.display_name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
