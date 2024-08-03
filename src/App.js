import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import data from './data.json';
import { useSearchParams } from 'react-router-dom';

function App() {
  //State for managing tasks, search term, filter, sort order, and expanded index
  const [tasks, setTasks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    //Initialize state based on search parameters from URL
    const initialSearchTerm = searchParams.get('search') || '';
    const initialFilter = searchParams.get('filter') || '';
    const initialSort = searchParams.get('sort') || '';

    setSearchTerm(initialSearchTerm);
    setFilter(initialFilter);
    setSort(initialSort);
    setTasks(data);//Set initial tasks from the data
  }, [searchParams]); //Dependency array ensures this runs when searchParams changes

  //Function to add a new task
  const addTask = (taskText) => {
    const newTask = {
      text: taskText,
      completed: false,
      lastUpdated: new Date().toISOString(), //Set the current date and time
    };
    setTasks([...tasks, newTask]); //Add the new task to the list
  };

  //Function to upate an existing task
  const updateTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText, lastUpdated: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);//Update the task list
  };

  //Function to mark a task as completed or pending
  const markAsDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed, lastUpdated: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);//Update the task list
  };

  //Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  //Function to handle search input chnges
  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setSearchParams({ search: newSearchTerm, filter, sort });
  };

  //Function to handle filter changes
  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    setSearchParams({ search: searchTerm, filter: newFilter, sort });
  };

  //Function to handle sort order changes
  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    setSearchParams({ search: searchTerm, filter, sort: newSort });
  };
  
  //Filter tasks based on search term and filter criteria
  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearchTerm = task.text.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter
        ? filter === 'completed'
          ? task.completed
          : !task.completed
        : true;
      return matchesSearchTerm && matchesFilter;
    })
    .sort((a, b) => {
      if (sort === 'asc') {
        return new Date(a.lastUpdated) - new Date(b.lastUpdated);
      } else if (sort === 'desc') {
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      } else {
        return 0;
      }
    });

  return (
    <div className="app">
      <div className="notebook">
        <div className="header">
          <h1>TO DO LIST</h1>
        </div>
        <TodoInput addTask={addTask} />
        <div className="controls">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search tasks"
          />
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <select value={sort} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="asc">Date Ascending</option>
            <option value="desc">Date Descending</option>
          </select>
        </div>
        <TodoList
          tasks={filteredTasks}
          markAsDone={markAsDone}
          updateTask={updateTask}
          deleteTask={deleteTask}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
      </div>
    </div>
  );
}

export default App;