import { ChangeEvent, useState } from 'react';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces';
import "./index.css";

const App:React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task') {
      setTask(event.target.value);
    } else{
      setDeadLine(Number(event.target.value));
    }
  }

  const addTask = ():void => {
    const newTask = {
      taskName:task,
      deadLine:deadLine
    }
    setTodo([...todo,newTask]);
    setTask("");
    setDeadLine(0);
  }

const completeTask = (taskNameToDelete:string):void => {
  setTodo(todo.filter((task) => {
    return task.taskName !=  taskNameToDelete;
  }))
}

  return (
    <div className="App flex items-center flex-col w-screen h-screen font-sans">
      <div className="header bg-red-700 w-full flex justify-center items-center basis-[30%]">
        <div className="inputContainer flex flex-col">
          <input type="text" name="task" placeholder='Add a task' 
          value={task} onChange={handleChange} className='w-48 h-10 pl-2 text-base'/>
          <input type="number" name="deadline" placeholder='Set a deadline(in days)' 
          value={deadLine} onChange={handleChange} className='w-48 h-10 pl-2 text-base'/>
        </div>
        <button onClick={addTask} className='w-16 h-20 pl-2 cursor-pointer bg-slate-300'>Add</button>
      </div>
      <div className='todoList flex basis-3/4 w-full items-center p-12 flex-col'>
      {todo.map((task:ITask, key:number)=>{
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  )
}

export default App
