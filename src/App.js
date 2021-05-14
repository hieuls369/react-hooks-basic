import React, { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './component/ColorBox';
import Pagination from './component/Pagination';
import PostList from './component/PostList';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

import queryString from 'query-string';
import PostFilterForm from './component/PostFilterForm';
import Clock from './component/Clock';
import BetterClock from './component/BetterClock';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend!' },
    { id: 2, title: 'We love Easy Frontend' },
    { id: 3, title: 'They love Easy Frontend' }
  ])

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1,
  })

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: ''
  })


  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filter)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }

    }
    fetchPostList();
  }, [filter])


  function handleFilterFormSubmit(newFilter) {
    console.log(newFilter.searchTerm);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm
    });
  }

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage
    });
  }

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
      <h1>Welcome to react hook-ColorBox-TodoList-Search-Clock</h1>

      {/* <PostFilterForm onSubmit={handleFilterFormSubmit} />
      <PostList posts={postList} /> */}
      <ColorBox />
      {/* <BetterClock /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
}

export default App;
