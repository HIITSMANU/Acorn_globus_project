import React, { useEffect, useState } from 'react'
import QuestionItem from './QuestionItem'
import axios from "axios"

const MainContent = () => {
    const [questions,setQuestions] = useState([])
    const [filter,setfilter] = useState("activity")

    const fetchQuestion = async() => {
        try {
            const response = await axios.get(
                `https://api.stackexchange.com/2.3/questions`,{
                    params:{
                        order:"desc",
                        sort:filter,
                        site:"stackoverflow"
                    }
                }
            )
            setQuestions(response.data.items)
        } catch (error) {
            console.log("Error in fetching questions",error);  
        }
    }

    useEffect(()=>{
        fetchQuestion()
    },[filter])
  return (
    <div className='m-1'>
      <h1 className='text-gray-500 font-semibold'>Top Questions</h1>
      <br />
      <div className="flex flex-col  sm:flex sm:justify-between sm:flex-row">
        <div className='flex flex-col gap-5 sm:flex sm:flex-row'>
            <button className='px-6  border border-gray-500 bg-orange-500 rounded-2xl text-sm font-semibold text-white h-8 mt-1 ' onClick={() => setfilter("activity")}>Activity</button>
            <button className='text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6' onClick={() => setfilter("votes")} >Votes</button>
            <button className='text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6' onClick={() => setfilter("creation")} >Creation</button>
            <button className='text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6' onClick={() => setfilter("hot")}>Hot</button>
            <button className='text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6' onClick={() => setfilter("week")}>Week</button>
            <button className='text-gray-500 text-sm font-semibold hover:bg-orange-500 hover:rounded-2xl hover:font-semibold hover:text-white hover:h-8 hover:mt-1 hover:px-6' onClick={() => setfilter("month")}>Month</button>
        </div>
        <div>
            <button className='btn bg-blue-600 p-1.5 rounded-2xl px-3 mt-1 text-white text-sm font-semibold ml-[33%] sm:ml-0'>
                Ask Questions   
            </button>
        </div>
      </div>
      <div className="">
        {questions.length > 0 ? (
          questions.map((question) => (
            <div className="" key={question.question_id}>
              <QuestionItem question={question} />
            </div>
          ))
        ) : (
          <p className="text-gray">Loading questions...</p>
        )}
      </div>
    </div>
  )
}

export default MainContent
