import { CreateButtonTodo } from './components/CreateButtonTodo';
import { TodoCounter } from './components/TodoCounter';
import { TodoInputSearch } from './components/TodoInputSearch';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';

import ImageSaludar from './assets/images/imagen_saludar.gif'

import './App.css'
import React from 'react';

const defaultTodos = [
  {text: 'Aprender react.js con los cursos de platzi', completed: false},
  {text: 'Ir mejorando en el desarrollo de videojuegos', completed: false},
  {text: 'Hola hola jsnkaj', completed: false},
  {text: 'dslknlaknld', completed: true},
  {text: 'Hola amigo', completed: false},
  {text: 'hola hoalahoalaoao', completed: true},
  {text: 'hola sapo', completed: false},
  {text: 'hola saads', completed: false},
  {text: 'Usar estados derivados', completed: true},
  {text: 'Cantar una canción', completed: true},
]

function App() {
  const [todos, setTODOS] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    setTODOS(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    setTODOS(newTodos);
  }

  return (
    <>
      <div className='ContainerHeader'>
        <img src={ImageSaludar} alt="Descripción de la imagen" className='ImageSaludar'/>
        <h1>Daniel 👋</h1>
      </div>
      <div className='parent-div'>
        <div className='ContainerListTodos'>
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoInputSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {
              searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  OnComplete = {() => completeTodo(todo.text)}
                  OnDelete = {() => deleteTodo(todo.text)}
                />)
              )
            }
          </TodoList>
        </div>
      </div>

      <CreateButtonTodo/>
    </>
  );
}

export default App;
