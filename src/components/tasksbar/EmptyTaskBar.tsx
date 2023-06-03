import {Alert, AlertTitle, Button} from "@mui/material";
import focusTaskIn from "../../Utils";

export const EmptyTaskBar = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'
             style={{minHeight: '60vh'}}>

            <Alert severity='error' variant='standard' className='my-3'>
                <AlertTitle>Empty!</AlertTitle>
                No tasks available.
            </Alert>

            <Button
                variant='contained'
                color='secondary'
                size='small'
                onClick={() => {
                    focusTaskIn();
                    //     scale up AddTaskBar's input and container.
                }}
            >
                Let's add...
            </Button>

        </div>
    )
}