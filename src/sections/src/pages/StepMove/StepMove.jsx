import { useEffect, useState, useCallback } from "react";
import styles from "./StepMove.module.scss";
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
export default function StepMove() {
    // const [rowData, setRowData] = useState([]);
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const FAB_CAPACITY_API_URL = `${API_BASE_URL}/fab-capacity`;

    // const columnDefs = [
    //     { field: "projectId", headerName: "Project" },
    //     { field: "title", headerName: "Title" },
    //     { field: "status", headerName: "Status" },
    //     { field: "priority", headerName: "priority" },
    //     { field: "description", headerName: "description" },
    //     { field: "assigneeId", headerName: "assigneeId" },
    //     { field: "isBillable", headerName: "isBillable" },
    //     { field: "progress", headerName: "progress" },
    //     { field: "reporterId", headerName: "reporterId" },
    //     { field: "taskNo", headerName: "taskNo" }

    // ];

    // const defaultColDef = {
    //     sortable: true,
    //     filter: true,
    //     resizable: true,
    //     flex: 1,
    //     minWidth: 120,
    // }



    const fetchFabCapacities = useCallback(async (signal) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(FAB_CAPACITY_API_URL, { signal });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("fab-capacity 조회 실패", {
                    status: response.status,
                    body: errorText,
                });
                throw new Error(`조회 실패 (${response.status})`);
            }

            const result = await response.json();
            setData(result);
            console.log(result)
        } catch (err) {
            if (err.name === "AbortError") return;

            console.error("fab-capacity fetch 에러:", err);
            setError(err.message || "데이터 조회 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        fetchFabCapacities(controller.signal);

        return () => {
            controller.abort();
        };
    }, [fetchFabCapacities]);

    // async function searchTasks() {
    //     try {

    //         const response = await fetch(
    //             `${TASKS_API_URL}?keyword=${encodeURIComponent(keyword)}`
    //         )
    //         if (!response.ok) {
    //             console.log('get 실패 status', response.status);
    //             const text = await response.text();
    //             console.log('get 실패 body', text);
    //             throw new Error('sever error');
    //         };
    //         const result = await response.json();
    //         console.log(result)
    //         setData(result);

    //     }
    //     catch (e) { console.log(e) }

    // }

    return (
        <>
            <Row gutter={[16, 16]} justify="end" className={styles.select}>1
                {/* <Col span={6}><Input value={keyword} placeholder="업무명 검색"
                    onChange={(e) => setKeyword(e.target.value)} onPressEnter={searchTasks}
                ></Input> </Col>
                <Col span={2}><Button onClick={searchTasks} >검색</Button></Col>
                <Col span={2}><Button>초기화</Button></Col> */}
            </Row>
            {/* <div className="ag-theme-quartz" style={{ height: 500, width: "100%" }}>
                <AgGridReact

                    rowData={data}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                />

            </div> */}

            <Row gutter={[16, 16]} className={styles.select} >
                <div>
                    {loading && <p>로딩 중...</p>}
                    {error && <p>{error}</p>}

                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>

                <pre>
                <code>
                    {`
                    const fetchFabCapacities = useCallback(async (signal) => {
                        setLoading(true);
                        setError(null);

                        try {
                            const response = await fetch(FAB_CAPACITY_API_URL, { signal });

                            if (!response.ok) {
                                const errorText = await response.text();
                                console.error("fab-capacity 조회 실패", {
                                    status: response.status,
                                    body: errorText,
                                });
                                throw new Error(\`조회 실패 (\${response.status})\`);
                            }

                            const result = await response.json();
                            setData(result);
                            console.log(result)
                        } catch (err) {
                            if (err.name === "AbortError") return;

                            console.error("fab-capacity fetch 에러:", err);
                            setError(err.message || "데이터 조회 중 오류가 발생했습니다.");
                        } finally {
                            setLoading(false);
                        }
                    }, []);

                    useEffect(() => {
                        const controller = new AbortController();

                        fetchFabCapacities(controller.signal);

                        return () => {
                            controller.abort();
                        };
                    }, [fetchFabCapacities]);
                    `}
                    
                </code>
                </pre>
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
};
