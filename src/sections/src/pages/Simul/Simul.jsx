import { Tabs } from "antd";
import styles from "./Simul.module.scss";

const stepMoveSource = String.raw
`import { useEffect, useState, useCallback } from "react";
import styles from "./StepMove.module.scss";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { Space, Button, Select, Row, Col } from "antd";
import TopshRow from "../../../../style/Shrow";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function StepMove() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [family, setFamily] = useState("all");

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const FAB_CAPACITY_API_URL = \`\${API_BASE_URL}/fab-capacity\`;

    const columnDefs = [
        { field: "createdAt", headerName: "createdAt" },
        { field: "device", headerName: "device" },
        { field: "fab", headerName: "fab" },
        { field: "family", headerName: "family" },
        { field: "id", headerName: "id" },
        { field: "planGbnCd", headerName: "planGbnCd" },
        { field: "remark", headerName: "remark" },
        { field: "rev", headerName: "rev" },
        { field: "site", headerName: "site" },
        { field: "tech", headerName: "tech" },
        { field: "year", headerName: "year" },
    ];

    const defaultColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        minWidth: 120,
    };

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
        } catch (err) {
            if (err.name === "AbortError") return;

            console.error("fab-capacity fetch 에러:", err);
            setError(err.message || "데이터 조회 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    }, [FAB_CAPACITY_API_URL]);

    useEffect(() => {
        const controller = new AbortController();
        fetchFabCapacities(controller.signal);
        return () => {
            controller.abort();
        };
    }, [fetchFabCapacities]);

    return (
        <>
            <TopshRow gutter={[16, 16]} justify="end" className={styles.select}>
                <Col span={4}>
                    <Space>
                        <span>family</span>
                        <Select
                            placeholder="family"
                            style={{ width: 120 }}
                            options={[
                                { value: "all", label: "전체" },
                                { value: "DRAM", label: "DRAM" },
                                { value: "NAND", label: "NAND" },
                            ]}
                        />
                    </Space>
                </Col>
                <Col span={4}>
                    <Space>
                        <span>site</span>
                        <Select
                            placeholder="검색"
                            style={{ width: 120 }}
                            options={[
                                { value: "all", label: "전체" },
                                { value: "Icheon", label: "Icheon" },
                                { value: "Cheongju", label: "Cheongju" },
                            ]}
                        />
                    </Space>
                </Col>
                <Col span={4}>
                    <Space>
                        <span>device</span>
                        <Select
                            placeholder="검색"
                            style={{ width: 120 }}
                            options={[
                                { value: "all", label: "전체" },
                                { value: "UFS", label: "UFS" },
                                { value: "LPDDR5", label: "LPDDR5" },
                            ]}
                        />
                    </Space>
                </Col>
                <Col span={4}>
                    <Space>
                        <span>구분</span>
                        <Select
                            placeholder="검색"
                            style={{ width: 120 }}
                            options={[{ value: "all", label: "전체" }]}
                        />
                    </Space>
                </Col>
                <Col span={2}>
                    <Button>검색</Button>
                </Col>
            </TopshRow>

            <div className="ag-theme-quartz" style={{ height: 500, width: "100%" }}>
                <AgGridReact
                    rowData={data}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                />
            </div>

            <Row gutter={[16, 16]} className={styles.select}>
                <div>
                    {loading && <p>로딩 중...</p>}
                    {error && <p>{error}</p>}
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </Row>
        </>
    );
}`;
const stepMoveSource2 = String.raw
`const fetchFabCapacities = useCallback(async (signal, params = {}) => {
    setLoading(true);
    setError(null);

    try {
        const searchParams = new URLSearchParams();

        if (params.family && params.family !== "all") {
            searchParams.append("family", params.family);
        }

        const requestUrl = searchParams.toString()
            ? \`\${FAB_CAPACITY_API_URL}?\${searchParams.toString()}\`
            : FAB_CAPACITY_API_URL;

        const response = await fetch(requestUrl, { signal });

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
    } catch (err) {
        if (err.name === "AbortError") return;

        console.error("fab-capacity fetch 에러:", err);
        setError(err.message || "데이터 조회 중 오류가 발생했습니다.");
    } finally {
        setLoading(false);
    }
}, [FAB_CAPACITY_API_URL]);`;

const tabItems = [
  {
    key: "default",
    label: "기본",
    children: (
      <div className={styles.tabPanel}>
        <div className={styles.placeholder}>여기에 탭 내용을 추가하면 됩니다.</div>
      </div>
    ),
  },
  {
    key: "fetchFabCapacities",
    label: "fetchFabCapacities",
    children: (
      <div className={styles.tabPanel}>
        <pre className={styles.codeBlock}>
        <code>{stepMoveSource2}</code>
        </pre>
      </div>
    ),
  },
  {
    key: "grid",
    label: "grid",
    children: (
      <div className={styles.tabPanel}>
        <pre className={styles.codeBlock}>
          <code>{stepMoveSource}</code>
        </pre>
      </div>
    ),
  },
];

export default function Simul() {
  return (
    <div className={styles.page}>
      <Tabs
        defaultActiveKey="default"
        items={tabItems}
        className={styles.tabs}
      />
    </div>
  );
}
