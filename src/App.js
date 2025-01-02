import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)} className="delete-btn">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  .App {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    padding: 20px;
    color: #333;
  }

  .header {
    padding-top: 20px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
  }

  .todo-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .todo-input input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1;
    font-size: 1em;
  }

  .todo-input button {
    padding: 10px 20px;
    background-color: #6a11cb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
  }

  .todo-input button:hover {
    background-color: #2575fc;
  }

  .todo-list {
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 400px;
  }

  .todo-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .todo-list .delete-btn {
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.8em;
    transition: background-color 0.3s;
  }

  .todo-list .delete-btn:hover {
    background-color: #ff1a1a;
  }
`;
