import {Task} from "./Task";
import {ListBar} from "./ListBar";
import {task} from "../../App";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {EmptyTaskBar} from "./EmptyTaskBar";
import {motion} from 'framer-motion';

interface Props {
    tasks: Array<task>,
    setTasks: any,
}

export function AllTasks({tasks, setTasks}: Props) {
    function sortTasks() {
        //     sort tasks
    }

    return (
        <>
            {
                tasks.length > 0 &&
                <div className='d-flex flex-row flex-wrap'
                >
                    {tasks.map((t, idx) => <Task key={idx} currentTaskIndex={idx} currentTask={t.taskData} tasks={tasks}
                                                 setTasks={setTasks}/>)}
                </div>
            }
        </>
    );
}