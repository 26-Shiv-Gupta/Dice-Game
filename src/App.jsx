import styled from "styled-components"
import Home from "./components/Home";
import Game from "./components/Game";
import { useState } from "react";

const App = () => {

  
  const [isStarted, setIsStarted] = useState(false)
  
  const toggleIsStarted = () => {
    setIsStarted((prev) => !prev)
  }

  return (
    <>
    {
      isStarted ? <Game /> : <Home toggleIsStarted={toggleIsStarted} />
    }
    </>
  )
}

export default App;