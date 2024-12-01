import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import axios from 'axios'
import { Quiz, QuizObject } from "../types/quiz";
import QuizButton from "../components/QuizButton";



function Select() {
  const [quizzes, setQuizzes] = useState<QuizObject>({
    name: []
  })
  const navigate = useNavigate();

  const handleQuizStart = (quizName: string) => {
    navigate("/quiz", {state: quizzes[quizName as keyof QuizObject]});
  }

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
      {Object.keys(quizzes).length > 0 && Object.keys(quizzes).map((name, i) => (
        <button key={i} onClick={() => handleQuizStart(name)}>
          {name}
        </button>
      ))}
    </>
  );
}

export default Select