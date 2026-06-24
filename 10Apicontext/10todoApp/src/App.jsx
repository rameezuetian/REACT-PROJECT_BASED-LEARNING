import { useState, useEffect } from 'react'
import React from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), todo, isCompleted: false }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>prevTodos.map((todo) => (todo.id === id ? { ...todo, todo: updatedTodo } : todo)));
  };
  
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos && storedTodos.length > 0) {
      setTodos(JSON.parse(storedTodos));
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <TodoProvider value ={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>

  )
}

export default App