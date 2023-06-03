import {task} from "../../App";
import {Task} from "./Task";

interface Props {
    tasks: Array<task>,
}

export function ToDoTasks({tasks}: Props) {
    return (
        <div>{tasks.map((t) => t.taskData + ' ')}</div>
    );
}