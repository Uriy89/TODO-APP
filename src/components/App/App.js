import React, { Component } from "react";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import "./App.css";

export default class App extends Component {
  maxId = 100;
  

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make code"),
      this.createTodoItem("Play wild rift"),
    ],
    filter: 'all',
    
  };

  createTodoItem(lable) {
    return {
      lable,
      description: "",
      active: true,
      id: this.maxId++,
      classChecked: this.active ? '' : 'checked'
    };
  }

  onChecked = () => {

  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[index];
      const newItem = { ...oldItem, active: !oldItem.active };
      
      const newArray = [
        ...todoData.slice(0, index),
        newItem,
        ...todoData.slice(index + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  onItemAdded = (text) => {
    const newIrtem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newIrtem];
      return {
        todoData: newArray,
      };
    });
  };

  onDeletedAll = () => {
    this.setState({ todoData: [] })
  }


  filter = (items, filter) => {
    switch(filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => item.active)
      case 'completed':
        return items.filter((item) => !item.active)
      default:
        return items
    }
  }

  onChangeFilter = (filter) => {
    this.setState({ filter })
  }

  render() {
    
    const { todoData, filter } = this.state;
    const activeCount = todoData.filter((el) => el.active).length;
    const visibleItems = this.filter(todoData, filter)

    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.onItemAdded} />
        </header>
        <section className="main">
          <TaskList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
          />
          <Footer
            active={activeCount}
            filter={filter}
            onChangeFilter={this.onChangeFilter}
            onDeletedAll={this.onDeletedAll}
            />
        </section>
      </>
    );
  }
}
