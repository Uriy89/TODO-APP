import React, { Component } from "react";
import Header from "../Header";
import TaskList from "../TaskList";
import Footer from "../Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [
      { lable: "Drink Coffee", id: 1 },
      { lable: "Make code", id: 2 },
      { lable: "Play wild rift", id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id)

      const newArray = [
        ...todoData.slice(0, index), 
        ...todoData.slice(index + 1)
      ]

      return {
        todoData: newArray 
      }
    })
  }

  render() {
    return (
      <>
        <Header />
        <section className="main">
          <TaskList
            todos={this.state.todoData}
            onDeleted={this.deleteItem}
          />
          <Footer />
        </section>
      </>
    );
  }
}
