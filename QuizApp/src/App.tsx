import { useState } from 'react'
import { Link } from "react-router";
import './App.css'

function App() {

  return (
    <>
      <h1>Home Page</h1>
      <h3>Welcome to the Quiz App! Here you can take some fun quizzes and get your score right after!</h3>
      <h4>Press the button below to get started!</h4>
      <Link to="quizzes">
        <button type="button">Select</button>
      </Link>
    </>
  )
}

export default App
