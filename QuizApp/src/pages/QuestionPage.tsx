import { useLocation } from "react-router"

function QuestionPage() {
  const location = useLocation()
  const quizData = location.state
  console.log(quizData)
  return (
    <>
    </>
  )
}

export default QuestionPage