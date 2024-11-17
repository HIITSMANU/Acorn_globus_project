import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import axios from "axios";

const MainContent = () => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("activity");
  const [loading, setLoading] = useState(true); 

  const fetchQuestion = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(
        `https://api.stackexchange.com/2.3/questions`,
        {
          params: {
            order: "desc",
            sort: filter,
            site: "stackoverflow",
          },
        }
      );

      
      setTimeout(() => {
        setQuestions(response.data.items);
        setLoading(false); 
      }, 3000);
    } catch (error) {
      console.log("Error in fetching questions", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [filter]);

  return (
    <div className="m-1">
      <h1 className="text-gray-500 font-semibold">Top Questions</h1>
      <br />
      <div className="flex flex-col sm:flex sm:justify-between sm:flex-row">
        <div className="flex flex-col gap-5 sm:flex sm:flex-row">
          <button
            className="px-6 border border-gray-500 bg-orange-500 rounded-2xl text-sm font-semibold text-white h-8 mt-1"
            onClick={() => setFilter("activity")}
          >
            Activity
          </button>
          <button
            className="text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6"
            onClick={() => setFilter("votes")}
          >
            Votes
          </button>
          <button
            className="text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6"
            onClick={() => setFilter("creation")}
          >
            Creation
          </button>
          <button
            className="text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6"
            onClick={() => setFilter("hot")}
          >
            Hot
          </button>
          <button
            className="text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6"
            onClick={() => setFilter("week")}
          >
            Week
          </button>
          <button
            className="text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6"
            onClick={() => setFilter("month")}
          >
            Month
          </button>
        </div>
        <div>
          <button className="btn bg-blue-600 p-1.5 rounded-2xl px-3 mt-1 text-white text-sm font-semibold ml-[33%] sm:ml-0">
            Ask Questions
          </button>
        </div>
      </div>
      <div className="">
        {loading ? (
          <div className="flex justify-center items-center mt-4">
            <button
              type="button"
              className="bg-indigo-500 text-white font-medium py-2 px-4 rounded flex items-center"
              disabled
            >
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Processing...
            </button>
          </div>
        ) : questions.length > 0 ? (
          questions.map((question) => (
            <div className="" key={question.question_id}>
              <QuestionItem question={question} />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No questions available.</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
