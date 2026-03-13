import { useEffect, useState } from "react"
import styles from "./Tasks.module.scss";
export default function Tasks() {

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
        }
        catch (e) {
            console.log(e)
        };


    };
    useEffect(() => {
        getTasks();
    }, [])


    return (
        <section className={styles.select}>
            <div>
                tasksa
            </div>

        </section>
    )
}
