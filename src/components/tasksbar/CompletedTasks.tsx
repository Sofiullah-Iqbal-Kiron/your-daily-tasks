import {task} from "../../App";
import {Alert, AlertTitle} from "@mui/material";

interface Props {
    tasks: Array<task>,
}

export const CompletedTasks = ({tasks}: Props) => {
    const completedTasks = tasks.filter((t) => t.isCompleted);
    return (
        <div>
            {
                completedTasks.length < 1 &&
                <Alert severity='warning' variant='filled'>
                    <AlertTitle>Empty!</AlertTitle>
                    No completed tasks yet.
                </Alert>
            }
            {
                completedTasks.length > 0 &&
                <div>{tasks.map((t) => t.taskData)}</div>
            }
        </div>
    )
}