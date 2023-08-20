import axios from "axios"
import { SetStateAction, useEffect, useRef, useState } from "react"
import Task from "../components/CustomHTTPDemo/Task"
import useHttp from "../components/CustomHTTPDemo/use-http"


export default function CustomHTTPHookPage() {
    let taskRef = useRef<HTMLInputElement | null>(null)
    let [errorMessage, setErrorMessage] = useState<() => void>(()=>{})
    let [allTasks, setAllTasks] = useState([])
    
    let [errorGet, sendGetRequest] = useHttp()
    let [errorPost, sendPostRequest] = useHttp()
    let [errorDelete, sendDeleteRequest] = useHttp()

    useEffect(() => {
        fetchTasks()
    }, [])
    
    function createTask(data: any) {
        if (!taskRef.current) {
            return; // Ref is not yet populated
        }
        
        const taskValue = taskRef.current.value; // Access value property
        
        if (taskValue.trim() === "") {
            return; // Don't create an empty task
        }
        
        const taskData = {
            value: taskValue
        };
        
        sendPostRequest('https://react-tutorial-6178d-default-rtdb.firebaseio.com/tasks.json', 'post', taskData, () => {
            fetchTasks()
        })
    }
    
    function fetchTasks() {
        sendGetRequest('https://react-tutorial-6178d-default-rtdb.firebaseio.com/tasks.json', 'get', null, (data: any) => {
            const tasks = Object.keys(data).map(key => ({id:key, ...data[key]}))
            setAllTasks(tasks as never[])
        })
    }
    
    function deleteTask(task: any) {
        sendDeleteRequest(`https://react-tutorial-6178d-default-rtdb.firebaseio.com/tasks/${task.id}.json`, 'delete', null, (data: any) => {
            fetchTasks()
        })
    }

    return (
        <div>
            <input type="text" ref={taskRef}/>
            <button className="btn btn-info" onClick={createTask}>Create</button>
            {!errorMessage && <Task allTasks={allTasks} deleteTask={deleteTask} />}
            {/* {errorMessage && <p>There's an error!</p>} */}
        </div>
    )
}