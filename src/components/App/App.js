/* eslint-disable */
import React, { useRef, useState } from 'react';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';
import './App.css';

const App = () => {

  const maxId = useRef(100);
  const [filter, setFilter] = useState('all');

  const createTodoItem = (label) => {
    return {
      label,
      description: '',
      active: true,
      id: maxId.current++,
      time: new Date(),
      status: false,
    };
  };

  const [todoData, setTodoData] = useState([
    createTodoItem('Drink Coffee'),
    createTodoItem('Make code'),
    createTodoItem('Play wild rift'),
  ]);

  const onChangeStatuEdit = (id) => {
    setTodoData((prevTodoData) => {
      const index = prevTodoData.findIndex((todo) => todo.id === id);
      const newStatus = !prevTodoData[index].status;

      const newTodoData = [...prevTodoData];
      newTodoData[index].status = newStatus;

      return [...newTodoData];
    });
  };

  const searchElementById = (id, elements) => {
    const index = elements.findIndex((el) => el.id === id);
    return index;
  };

  const onTaskEdit = (id, text) => {
    setTodoData((prevTodoData) => {
      const index = searchElementById(id, todoData);

      const newTodoData = [...prevTodoData];
      newTodoData[index].label = text;
      newTodoData[index].status = !todoData[index].status;
      return newTodoData;
    });
  };

  const deleteItem = (id) => {
    setTodoData((prevTodoData) => {
      const index = searchElementById(id, todoData);
      const newArray = [...prevTodoData.slice(0, index), ...prevTodoData.slice(index + 1)];
      return newArray;
    });
  };

  const onToggleDone = (id) => {
    setTodoData((prevTodoData) => {
      const index = searchElementById(id, todoData);
      const oldItem = prevTodoData[index];
      const newItem = { ...oldItem, active: !oldItem.active};
      const newArray = [...prevTodoData.slice(0, index), newItem, ...prevTodoData.slice(index + 1)];
      
      return newArray;
    });
  };

  const onItemAdded = (text) => {
    const newIrtem = createTodoItem(text);
    setTodoData((prevTodoData) => {
      const newArray = [...prevTodoData, newIrtem];
      return newArray;
    });
  };

  const onDeletedAll = () => {
    setTodoData([]);
  };

  const filterRes = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => item.active);
      case 'completed':
        return items.filter((item) => !item.active);
      default:
        return items;
    }
  };

  const onChangeFilter = (filter) => {
    setFilter(filter);
  };

  const activeCount = todoData.filter((el) => el.active).length;
  const visibleItems = filterRes(todoData, filter);

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={onItemAdded} />
      </header>
      <section className="main">
        <TaskList
          todos={visibleItems}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
          onChangeStatuEdit={onChangeStatuEdit}
          onTaskEdit={onTaskEdit}
        />
        <Footer active={activeCount} filter={filter} onChangeFilter={onChangeFilter} onDeletedAll={onDeletedAll} />
      </section>
    </>
  );
};

export default App;