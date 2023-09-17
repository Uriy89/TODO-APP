import React from "react";
import Header from "../Header";
import Main from '../Main'
import './App.css'

const App = () => {

    const todoData = [
      {lable: 'Drink Coffee', id: 1 },
      {lable: 'Make code', id: 2 },
      {lable: 'Play wild rift', id: 3 }
    ]

    return(
        <>
          <Header/>
          <Main todos={todoData}/>
        </>
    )
}

export default App