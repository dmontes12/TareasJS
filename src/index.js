// import { saludar } from './js/componentes';
import './css/styles.css';

import {Todo,TodoList} from "./classes";
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();




console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));


// const tarea = new Todo("Aprender javascript");
// tarea.completado=true;
// todoList.nuevoTodo(tarea);
// crearTodoHtml(tarea);
// localStorage.removeItem("mi-key")
// sessionStorage.removeItem("mi-key2")

// localStorage.setItem("mi-key","ABC123");
// sessionStorage.setItem("mi-key2","MENSOS")
// setTimeout(()=> {
//     localStorage.removeItem("mi-key")
// },1500);
