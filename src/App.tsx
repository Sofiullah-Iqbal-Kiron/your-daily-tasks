import {AddTaskBar} from "./components/addtaskbar/AddTaskBar";
import {AllTasks} from "./components/tasksbar/AllTasks";
import {useEffect, useState} from "react";
import {Settings} from "./components/Settings";
import {TopNavBar} from "./components/topnavbar/TopNavBar";
import {TasksBar} from "./components/tasksbar/TasksBar"

export interface task {
    taskData: string,
    isTodo: boolean,
    isCompleted: boolean,
    isStarred: boolean,
}

function App() {
    let theTasks: Array<task> = [];
    const [tasks, setTasks] = useState(theTasks);
    const [allowSound, setAllowSound] = useState(true);

    // get tasks of this user when this component gets mounted
    useEffect(() => {
        //     backend call, setTasks(backendData)
    }, []);

    return (
        <div className='d-flex flex-column flex-wrap'>
            <TopNavBar/>

            <div className='d-flex flex-row flex-wrap justify-content-between mx-3 mt-3'>
                <AddTaskBar tasks={tasks} setTasks={setTasks} allowSound={allowSound}/>
                <TasksBar tasks={tasks} setTasks={setTasks}/>
            </div>

            {/*<Settings allowSound={allowSound} setAllowSound={setAllowSound} tasks={tasks} setTasks={setTasks}/>*/}
        </div>
    )
}

export default App
