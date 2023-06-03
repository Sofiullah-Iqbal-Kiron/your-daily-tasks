interface Props {
    allowSound: boolean,
    setAllowSound: any,
    tasks: Array<string>,
    setTasks: any,
}

export function Settings({allowSound, setAllowSound, tasks, setTasks}: Props) {
    function toggleAllowSound() {
        setAllowSound(!allowSound);
    }

    function toggleSort() {

    }

    return (
        <div className='d-flex flex-column flex-wrap justify-content-center gap-1'>
            <h4>Settings</h4>
            <div className="form-check form-switch" style={{cursor: "pointer"}}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                       onClick={toggleAllowSound} checked={allowSound} style={{cursor: "inherit"}}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{cursor: "inherit"}}>Play
                    sounds</label>
            </div>
            <div className="form-check form-switch" style={{cursor: "pointer"}}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                       onSelect={toggleSort} style={{cursor: "inherit"}}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{cursor: "inherit"}}>Sort
                    tasks</label>
            </div>
        </div>
    );
}