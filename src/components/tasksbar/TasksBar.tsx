import TasksHandlerButtonBar from "./TasksHandlerButtonBar";
import {AllTasks} from "./AllTasks";
import {ListBar} from "./ListBar";
import {task} from "../../App";
import {ToDoTasks} from "./ToDoTasks";
import {CompletedTasks} from "./CompletedTasks";
import {StarredTasks} from "./StarredTasks";
import {useState} from "react";
import {EmptyTaskBar} from "./EmptyTaskBar";

interface Props {
    tasks: Array<task>,
    setTasks: any,
}

export function TasksBar({tasks, setTasks}: Props) {
    const [currentTasksIndex, setCurrentTasksIndex] = useState<number>(0);

    return (
        <div className='d-flex flex-column flex-wrap justify-content-between'
             style={{minWidth: '70vw', minHeight: '80vh', maxWidth: '70vw'}}
        >

            <div>
                <h3 className='text-center'>Tasks</h3>
                {tasks.length < 1 && <EmptyTaskBar/>}
                {tasks.length > 0 && <ListBar tasks={tasks} currentTasksIndex={currentTasksIndex}
                                              setCurrentTasksIndex={setCurrentTasksIndex}/>}
                {tasks.length > 0 && currentTasksIndex === 0 && <AllTasks tasks={tasks} setTasks={setTasks}/>}
                {tasks.length > 0 && currentTasksIndex === 1 && <ToDoTasks tasks={tasks}/>}
                {tasks.length > 0 && currentTasksIndex === 2 && <CompletedTasks tasks={tasks}/>}
                {tasks.length > 0 && currentTasksIndex === 3 && <StarredTasks/>}
            </div>

            <TasksHandlerButtonBar tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}