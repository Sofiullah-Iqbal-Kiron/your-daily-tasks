import focusTaskIn from "../../Utils";
import {task} from "../../App";

import {Alert, Button, Snackbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

interface Props {
    tasks: Array<task>,
    setTasks: any,
}

export default function TasksHandlerButtonBar({tasks, setTasks}: Props) {
    const [showSnack, setShowSnack] = useState(false);

    function postTasks() {
        //     post on server

        // show a snackbar/toast if empty tasks
        // inform users of a process that an app has performed or will perform
        if (tasks.length < 1) {
            setShowSnack(true);
        }
        focusTaskIn();
    }

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between mb-2'>

            <Snackbar
                open={showSnack}
                autoHideDuration={2000}
            >
                <Alert
                    severity='warning'
                    variant='filled'
                    sx={{}}
                >
                    Empty tasks - Saved.
                </Alert>
            </Snackbar>

            <Button
                variant='outlined'
                color='primary'
                onClick={postTasks}
            >
                Save tasks
            </Button>

            <Button
                variant='outlined'
                color='error'
                disabled={tasks.length < 1}
                onClick={(e) => {
                    // bring a modal for confirmation

                    setTasks([]);
                    focusTaskIn();
                }}
            >
                Remove all
            </Button>

        </div>
    );
}