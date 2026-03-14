import { useEffect, useState } from "react"
import styles from "./Tasks.module.scss";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import {
    Layout, Menu, Table, Tag, Space, Button, Input, Select,
    Card, Row, Col, Typography, Progress, Descriptions, Badge
} from "antd";
import {
    MenuUnfoldOutlined, MenuFoldOutlined, DashboardOutlined,
    RocketOutlined, CheckSquareOutlined, UserOutlined,
    TeamOutlined, TrophyOutlined, PlusOutlined,
    SearchOutlined, ReloadOutlined, FileTextOutlined,
    DeleteOutlined, EditOutlined
} from "@ant-design/icons";
ModuleRegistry.registerModules([AllCommunityModule]);
export default function Tasks() {
    // const [rowData, setRowData] = useState([]);
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');
    const TASKS_API_URL = `${import.meta.env.VITE_API_BASE_URL}/tasks`;
    const columnDefs = [
        { field: "projectId", headerName: "Project" },
        { field: "title", headerName: "Title" },
        { field: "status", headerName: "Status" },
        { field: "priority", headerName: "priority" },
        { field: "description", headerName: "description" },
        { field: "assigneeId", headerName: "assigneeId" },
        { field: "isBillable", headerName: "isBillable" },
        { field: "progress", headerName: "progress" },
        { field: "reporterId", headerName: "reporterId" },
        { field: "taskNo", headerName: "taskNo" }

    ];

    const defaultColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        minWidth: 120,
    }

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


    async function searchTasks() {
        try {

            const response = await fetch(
                `${TASKS_API_URL}?keyword=${encodeURIComponent(keyword)}`
            )
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
        catch (e) { console.log(e) }

    }

    return (
        <>
            <Row gutter={[16, 16]} justify="end" className={styles.select}>
                <Col span={6}><Input value={keyword} placeholder="업무명 검색"
                    onChange={(e) => setKeyword(e.target.value)} onPressEnter={searchTasks}
                ></Input> </Col>
                <Col span={2}><Button onClick={searchTasks} >검색</Button></Col>
                <Col span={2}><Button>초기화</Button></Col>
            </Row>
            <div className="ag-theme-quartz" style={{ height: 500, width: "100%" }}>
                <AgGridReact

                    rowData={data}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                />

            </div>

            <Row gutter={[16, 16]} className={styles.select} >






                {/* <div >
                    <Col className={styles.testlist} span={24} >
                        <div>projectId</div>
                        <div>title</div>
                        <div>status</div>
                        <div>priority</div>
                        <div>description</div>
                        <div>assigneeId</div>
                        <div>isBillable</div>
                        <div>reporterId</div>
                        <div>storyPoints</div>
                        <div>taskNo</div>
                    </Col>
                </div>
                <div>
                    {data.map(task => {
                        return (
                            <Col className={styles.testlist} span={24} key={task.id} >
                                <div>{task.projectId}</div>
                                <div>{task.title}</div>
                                <div>{task.status}</div>
                                <div>{task.priority}</div>
                                <div>{task.description}</div>
                                <div>{task.assigneeId}</div>
                                <div>{task.isBillable}</div>
                                <div>{task.progress}</div>
                                <div>{task.reporterId}</div>
                                <div>{task.storyPoints}</div>
                                <div>{task.taskNo}</div>

                            </Col>
                        )
                    })}
                </div> */}
            </Row>
        </>

    )
}
