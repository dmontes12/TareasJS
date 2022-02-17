import {Todo} from "../classes";
import { todoList } from "../index.js";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnBorrarCompletados = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters")
const anchorFiltros = document.querySelectorAll(".filtro")

export const crearTodoHtml = (todo) =>{

    const htmlTodo = `	<li class="${(todo.completado)?"completed":""}" data-id=${todo.id}>
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado)?"checked":""}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement("div");
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild)
    return div;

}

//Eventos
txtInput.addEventListener("keyup",(event)=>{
    if(event.keyCode === 13&& txtInput.value.length>0){
        console.log(txtInput.value)
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        console.log(todoList);
        txtInput.value= "";
    }
});


divTodoList.addEventListener('click',(event) =>{
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.
    parentElement;
    const todoId = todoElemento.getAttribute("data-id");

    if(nombreElemento.includes("input")){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle("completed");
    }else if(nombreElemento.includes("button")){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
});

btnBorrarCompletados.addEventListener("click", ()=>{
    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];
        console.log(elemento);
        const elementoclas = elemento.getAttribute("class");
        //tambien puede ser (elemento.classList.contains("completed"))
        if(elementoclas.includes("completed")){
            divTodoList.removeChild(elemento);
            console.log(todoList);
        }
    }

});

ulFiltros.addEventListener("click", (event) =>{
    const textClicked = event.target.text;
    if(!textClicked){return;}
    anchorFiltros.forEach(btn => btn.classList.remove("selected"));
    event.target.classList.add("selected");
    
    for(const todo of divTodoList.children){
            todo.classList.remove("hidden");
        const completado = todo.classList.contains("completed");

            switch(textClicked){
                case "Pendientes":
                        if(completado){
                            todo.classList.add("hidden");
                         }
                    break;
                case "Completados":
                        if(!completado){
                            todo.classList.add("hidden");
                        }
                    break;
            }
    }

   

});