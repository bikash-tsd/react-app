import React from 'react';

interface TodoListProps{
    items:{id:string,text:string}[]
    removeTodo:Function
}

const TodoList:React.FC<TodoListProps> = (props) =>{

    
   
    return(
        <ul>
            {props.items.map((list)=>{
                return <li key={list.id} >
                    <span>{list.text}</span>
                    <button onClick={()=>props.removeTodo(list.id)}>Delete</button>
                </li>
            })}
        </ul>
    )
}
export default TodoList ;