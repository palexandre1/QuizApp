import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from 'axios'
import { Quiz, QuizObject } from "../types/quiz";


function Select() {
  const [quiz, setQuizzes] = useState<QuizObject>({
    name: []
  })

  useEffect(() => {
    axios.get('http://localhost:8000/quizzes')
      .then((response) => {
        console.log(response.data)
        setQuizzes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      <h1>Select Page</h1>
      <h3>Select a quiz to take here</h3>
    </>
  );
}

export default Select