import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";
import FilterButtons from "./FilterButtons";

const MainContent = ({ searchTerm }) => {
  const [questions, setQuestions] = useState([]);
  const [filquestions, setfilQuestions] = useState([]);
  const [activeFilter, setActiveFilter] = useState("activity");
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const fetchQuestion = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.stackexchange.com/2.3/questions`,
        {
          params: {
            order: "desc",
            sort: activeFilter,
            site: "stackoverflow",
          },
        }
      );

      setTimeout(() => {
        setQuestions(response.data.items);
        setfilQuestions(response.data.items);
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log("Error in fetching questions", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [activeFilter]);

  useEffect(() => {
    const filtered = questions.filter((question) =>
      question.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilQuestions(filtered);
  }, [searchTerm, questions]);

  return (
    <div className="m-1">
      <h1
        className={`${
          theme === "light" ? "text-gray-500 font-semibold" : "text-white font-semibold"
        }`}
      >
        Top Questions
      </h1>
      <br />
      <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
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
        ) : filquestions.length > 0 ? (
          filquestions.map((question) => (
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
