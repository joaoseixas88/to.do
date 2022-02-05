import './styles.scss'
import { FaPlusCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from 'react';

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

const tarefa: Task = {
    id: 1,
    title: 'Realizar alguma coisa',
    isComplete: false
}




export function Main(){

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('')

    function handleNewTask(){
        if(!newTaskTitle){
            return;
        }
        
        const newTask = {
            id: Math.random(),
            title: newTaskTitle,
            isComplete: false
        }
        setTasks([...tasks, newTask]);
        setNewTaskTitle('')
    }

    function handleRemoveTask(id: number){
        const removedTask = tasks.filter((task) => {
            if (id !== task.id){
                return ({
                    id: task.id,
                    title: task.title,
                    isComplete: task.isComplete,
                })
            }            
        })
        setTasks(removedTask)
    }

    function handleCheckTask(id: number){
        const newTasks = tasks.map((task) =>{
            if(id === task.id){
                return (
                    {
                        id: task.id,
                        title: task.title,
                        isComplete: !task.isComplete,
                    }                  
                ) 
            } return task
        })
        setTasks(newTasks)     
    }

    return(
        <section>
            <div className='content'>
                <header>
                    <h1>taks!</h1>
                    <div className='div-input'>                    
                        <input type="text"
                        onChange={(event) => setNewTaskTitle(event.target.value)} 
                        value={newTaskTitle}/>
                        
                        <button className="add"
                        type="submit"    
                        onClick={handleNewTask}
                        >
                           <FaPlusCircle color='#fff' size={16}/>
                        </button>
                        
                    </div>
                </header>
                <main className='tasks-container'>
                    <ul>    
                        {tasks.map((task) =>(
                            <li key={task.id}>
                                <div className={task.isComplete? 'completed' : ''} >
                                    <label>
                                        <input 
                                        type="checkbox"
                                        onClick={() => handleCheckTask(task.id)}
                                        checked={task.isComplete}
                                        />
                                        <p>{task.title}</p>
                                    </label>                                    
                                </div>
                                <div className='button-container'>
                                <button
                                onClick={() => handleRemoveTask(task.id)}
                                >
                                    <AiFillDelete />
                                </button>                                
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </section>
    )
}