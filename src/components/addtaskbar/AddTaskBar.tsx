import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

import addTaskSound from '../../assets/mouse click.mp3';
import focusTaskIn from "../../Utils";

interface Props {
    tasks: Array<object>,
    setTasks: any,
    allowSound: boolean
}

export function AddTaskBar({tasks, setTasks, allowSound}: Props) {
    const [inText, setInText] = useState('');

    function addTask() {
        const addSound = new Audio(addTaskSound);
        allowSound && inText.length != 0 && addSound.play();

        const newTask = {taskData: inText, isTodo: true, isCompleted: false, isStarred: false};
        inText.length != 0 && setTasks(tasks.concat([newTask]));
        setInText('');
        focusTaskIn();
    }

    return (
        <div className='d-flex flex-column p-4 bg-info bg-opacity-10 bg-gradient rounded-4'>
            <h4>Add task</h4>
            <div className='input-group d-flex flex-row flex-wrap gap-2'>
                <input
                    className='form-control'
                    type='text'
                    id='task-in'
                    name='task-in'
                    value={inText}
                    onChange={(e) => setInText(e.target.value)}
                    autoFocus={true}
                    onKeyDown={(e) =>
                        e.code === 'Enter' ? addTask() : null
                    }
                />
                <button className='btn btn-success' onClick={addTask} id='add-button'>
                    <FontAwesomeIcon icon={faPlus} style={{color: "white", fontWeight: 'bolder'}}/>
                </button>
            </div>
        </div>
    );
}