import { useEffect, useState } from "react"
import styles from "./Tasks.module.scss";
export default function Tasks() {

    const [data, setData] = useState([]);

    const TASKS_API_URL = `${import.meta.env.VITE_API_BASE_URL}/tasks`;
    async function getTasks() {
        try {
            const response = await fetch(TASKS_API_URL)

            if (!response.ok) {
                console.log('get 실패 status', response.status);
                const text = await response.text();
                console.log('get 실패 body', text);
                throw new Error('sever error');
            };
            const result = await response.json();
            console.log(result)
            setData(result);
        }
        catch (e) {
            console.log(e)
        };


    };
    useEffect(() => {
        getTasks();
    }, [])


    return (
        <>

            {data.map(task => {
                return (
                    <div key={task.id} >
                        <div>{task.description}</div>
                        <div>{task.isBillable}</div>
                        <div>{task.priority}</div>
                        <div>{task.progress}</div>
                        <div>{task.projectId}</div>
                        <div>{task.reporterId}</div>
                        <div>{task.status}</div>
                        <div>{task.storyPoints}</div>
                        <div>{task.taskNo}</div>

                    </div>
                )

            })}

        </>
    )
}
