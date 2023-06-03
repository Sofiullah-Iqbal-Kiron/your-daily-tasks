import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareMinus, faStar} from '@fortawesome/free-regular-svg-icons';
import {task} from "../../App";
import {motion} from 'framer-motion';

// proposed props: listName, completed

interface Props {
    currentTaskIndex: number,
    currentTask: string,
    tasks: Array<task>,
    setTasks: any,
}

export function Task({currentTaskIndex, currentTask, tasks, setTasks}: Props) {
    function removeThisTask() {
        setTasks(tasks.filter((t, idx) => idx != currentTaskIndex));
    }

    return (
        <motion.div className='d-flex flex-row flex-wrap justify-content-start align-items-center me-4 mb-2'
            initial={{scale: 0.1}}
            animate={{scale: 1}}
            transition={{duration: 0.2}}
        >
            {/* mark done check */}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value=""
                       onClick={() =>
                           tasks[currentTaskIndex].isCompleted === true ? tasks[currentTaskIndex].isCompleted = false : tasks[currentTaskIndex].isCompleted = true}
                />
            </div>

            <div
                className='bg-secondary bg-opacity-10 rounded-2 d-flex flex-row flex-wrap justify-content-between gap-3 px-2 py-0 align-items-center'
            >
                <span style={{maxWidth: '14rem', textAlign: 'left'}}>{currentTask}</span>
                <div className='d-flex flex-wrap justify-content-center'>
                    <button
                        onClick={() => removeThisTask()}
                        className='btn'
                        style={{padding: 'auto'}}
                    >
                        <FontAwesomeIcon icon={faSquareMinus} size='xl' className='text-danger'/>
                    </button>
                    <button className='btn'><FontAwesomeIcon icon={faStar}/></button>
                </div>
            </div>
        </motion.div>
    );
}