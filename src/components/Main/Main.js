import React from "react";
import TaskList from "../TaskList";
import Footer from '../Footer'
import './Main.css'

const Main = ({todos}) => {
    return (
    <section className="main">
        <TaskList todos={todos}/>
        <Footer/>
    </section>)
}

export default Main