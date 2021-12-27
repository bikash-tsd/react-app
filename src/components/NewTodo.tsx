import React,{useRef} from 'react';
interface NewTodoProps{
    onAddTodo:Function
}


const NewToDo:React.FC<NewTodoProps> = (props)=>{
    const textInput = useRef<HTMLInputElement>(null); 

    const submitHandler = (event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInput.current!.value;
        props.onAddTodo(enteredText)
        
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='todo-text'>Todo:</label>
                <input type="text" id='todo-text' ref={textInput} />
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default NewToDo