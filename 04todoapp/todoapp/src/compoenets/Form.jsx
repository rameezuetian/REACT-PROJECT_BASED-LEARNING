import { useState } from 'react';
// import TodoItem from './TodoItem';
export default function Form({todos , setTodos}) {
  const [todo, setTodo] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
