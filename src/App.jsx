// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './todolist/LoginPage';  
import TodoListMain from './todolist/TodoListMain';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/todo" element={<TodoListMain />} />
      </Routes>
   
  );
}

export default App;
