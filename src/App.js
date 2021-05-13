import React, { useState } from 'react';
import './App.scss';
import ColorBox from './component/ColorBox';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend!' },
    { id: 2, title: 'We love Easy Frontend' },
    { id: 3, title: 'They love Easy Frontend' }
  ])

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValue) {
    console.log('Form Submit:', formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue
    }

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <h1>Welcome to react hook-ColorBox-TodoList</h1>
      <ColorBox />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />

    </div>
  );
}

export default App;
