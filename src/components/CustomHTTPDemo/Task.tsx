
interface TaskProps {
    allTasks: any
    deleteTask: (task: any) => void
}

export default function Task(props: TaskProps) {

    function deleteTaskClicked(event: any, task: any) {
        event.stopPropagation()
        props.deleteTask(task)
    }
    return (
        <>
            <ul>
                {props.allTasks.map((task: any) => (
                    <li key={task.id}>{task.value} 
                        <button className="btn btn-danger" onClick={(event) => deleteTaskClicked(event, task)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}