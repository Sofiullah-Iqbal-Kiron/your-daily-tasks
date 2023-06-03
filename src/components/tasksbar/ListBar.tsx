import {task} from '../../App';
import {useEffect, useState} from "react";

interface Props {
    tasks: Array<task>,
    currentTasksIndex: number,
    setCurrentTasksIndex: any,
}

export function ListBar({tasks, currentTasksIndex, setCurrentTasksIndex}: Props) {
    let countAll = tasks.length, countTodo = 0, countCompleted = 0, countStarred = 0;

    tasks.map(t => {
        t.isTodo && countTodo++;
        t.isCompleted && countCompleted++;
        t.isStarred && countStarred++;
    });

    return (
        <nav className="nav nav-pills flex-column flex-sm-row mt-1 mb-2 bg-light bg-opacity-100 rounded-2">
            <a className={"d-flex flex-row flex-wrap justify-content-evenly flex-sm-fill text-sm-center nav-link " + `${currentTasksIndex === 0 && 'active'}`}
               aria-current="page" href="#tasks-all" onClick={() => setCurrentTasksIndex(0)}>
                All <span className="badge bg-dark bg-opacity-75">{countAll}</span>
            </a>
            <a className={"d-flex flex-row flex-wrap justify-content-evenly flex-sm-fill text-sm-center nav-link " + `${currentTasksIndex === 1 && 'active'}`}
               href="#tasks-todo" onClick={() => setCurrentTasksIndex(1)}>
                ToDo <span className="badge bg-dark bg-opacity-75">{countTodo}</span>
            </a>
            <a className={"d-flex flex-row flex-wrap justify-content-evenly flex-sm-fill text-sm-center nav-link " + `${currentTasksIndex === 2 && 'active'}`}
               href="#tasks-completed" onClick={() => setCurrentTasksIndex(2)}>
                Completed <span className="badge bg-dark bg-opacity-75">{countCompleted}</span>
            </a>
            <a className={"d-flex flex-row flex-wrap justify-content-evenly flex-sm-fill text-sm-center nav-link " + `${currentTasksIndex === 3 && 'active'}`}
               href="#tasks-starred" onClick={() => setCurrentTasksIndex(3)}>
                Starred <span className="badge bg-dark bg-opacity-75">{countStarred}</span>
            </a>
        </nav>
    );
}