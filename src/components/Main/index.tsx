import './styles.scss'
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';

type Task = string

export function Main(){

    const [tasks, setTasks] = useState<Task[]>([]);

    return(
        <main>
            <div className='content'>
                <div className='content-header'>
                    <h1>taks!</h1>

                    <div className='div-input'>
                        <input type="text" />
                        <button className="add"
                        type="submit"
                        >
                            <IoIosAddCircle />
                        </button>
                    </div>
                </div>
                <div className='tasks'>
                    <input type="checkbox" name="isComplete" id="1" />
                    <span>Fazer o café</span>
                </div>
            </div>
        </main>
    )
}