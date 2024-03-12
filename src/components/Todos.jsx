import {  useEffect, useState } from "react";
import TodoList from "./TodoList";
import NewTodoInput from "./NewTodoInput";

export default function Todos() {
    const [ todos , setTodos ] = useState([]);

    const addNewTodoHandler = async (todoTitle) => {

        let newTodo = {
            title : todoTitle,
            status : false,
        }
        
        try {
            let res = await fetch("https://65ef513dead08fa78a5046ed.mockapi.io/todos" , {
            method : 'post' ,
            headers : {'content-type' : 'aplication/json'},
            body : JSON.stringify(newTodo)
        })
            let todoData = await res.json();

            setTodos([
                ...todos,
                todoData
            ])
        } catch (error) {
            console.log(error)
        }

    }

    const deleteTodoHandler = (todo) => {
        let newTodos = todos.filter( (todoItem) => {
            return todo.id != todoItem.id;
        })

        setTodos(newTodos);
    }

    const toggleTodoStatusHandler = (todo) => {
        let newTodos = todos.map( (todoItem) =>  {
            if(todo.id === todoItem.id) {
                todoItem.status = ! todoItem.status
            }

            return todoItem;
        })

        setTodos(newTodos);
    }

    const editTodoTitleHandler = (todo , newTitleValue ) => {
        let newTodos = todos.map( (todoItem) =>  {
            if(todo.id === todoItem.id) {
                todoItem.title = newTitleValue
            }

            return todoItem;
        })
        setTodos(newTodos);
    }

    const getTodosFromApi = async () => {

        try {
            let res = await fetch("https://65ef513dead08fa78a5046ed.mockapi.io/todos");
            let todos = await res.json();
            
            if (res.ok){
                setTodos(todos);
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTodosFromApi();
    } , [])

    // useEffect( () => {
    //     localStorage.setItem('todos_list' , JSON.stringify(todos))
    // }, [ todos ])


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <NewTodoInput addTodo={addNewTodoHandler} />
                <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodoStatus={toggleTodoStatusHandler} editTodoTitle={editTodoTitleHandler}/>
            </div>
        </div>
    )
}
