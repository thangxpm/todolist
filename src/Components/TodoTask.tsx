import React from "react";
import { ITask } from "../Interfaces";

interface Props{
    task:ITask;
    completeTask(taskNameToDelete:string):void;
}

const TodoTask = ({task, completeTask}:Props) => {
    return(
        <div className="task h-12 w-full flex m-4 justify-center bg-white">
            <div className="content basis-4/5 h-full flex justify-center content-center">
                <span className="grid place-items-center w-full h-full text-lg bg-red-400">{task.taskName}</span>
                <span className="grid place-items-center w-full h-full text-lg bg-red-500">{task.deadLine}</span>
            <button onClick={() => {
                completeTask(task.taskName)
            }} className='basis-1/5 h-full border-none bg-blue-300 text-white cursor-pointer'>X</button>
            </div>
        </div>
    )
}

export default TodoTask;