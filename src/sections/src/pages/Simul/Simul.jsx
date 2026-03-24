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

const stepMoveSource3 = String.raw`
import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Input,
  Layout,
  Row,
  Select,
  Space,
  Table,
  Typography,
  Divider,
  Tag,
} from "antd";
import {
  SearchOutlined,
  ReloadOutlined,
  PlusOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const initialVersions = [
  { key: "1", version: "v1.0.0", note: "최초 등록", status: "배포" },
  { key: "2", version: "v1.0.1", note: "문구 수정", status: "작업중" },
];

const tableData = Array.from({ length: 8 }).map((_, index) => ({
  key: String(index + 1),
  no: index + 1,
  category: ["정책", "배너", "공지", "도움말"][index % 4],
  title: \`컨텐츠 제목 \${index + 1}\`,
  writer: ["관리자", "운영자", "기획자"][index % 3],
  date: \`2026-03-\${String(index + 10).padStart(2, "0")}\`,
  status: index % 2 === 0 ? "사용" : "대기",
}));

export default function ContentScreenPublishing() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [site, setSite] = useState("all");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [versionInput, setVersionInput] = useState("");
  const [memoInput, setMemoInput] = useState("");
  const [versions, setVersions] = useState(initialVersions);

  const filteredData = useMemo(() => {
    return tableData.filter((item) => {
      const keywordMatch =
        !searchKeyword ||
        item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.writer.toLowerCase().includes(searchKeyword.toLowerCase());

      const siteMatch = site === "all" || (site === "kr" && item.no % 2 === 0) || (site === "en" && item.no % 2 !== 0);
      const categoryMatch = category === "all" || item.category === category;
      const statusMatch = status === "all" || item.status === status;

      return keywordMatch && siteMatch && categoryMatch && statusMatch;
    });
  }, [searchKeyword, site, category, status]);

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      width: 80,
      align: "center",
    },
    {
      title: "카테고리",
      dataIndex: "category",
      width: 120,
      align: "center",
      render: (value) => <Tag>{value}</Tag>,
    },
    {
      title: "제목",
      dataIndex: "title",
    },
    {
      title: "작성자",
      dataIndex: "writer",
      width: 120,
      align: "center",
    },
    {
      title: "등록일",
      dataIndex: "date",
      width: 140,
      align: "center",
    },
    {
      title: "상태",
      dataIndex: "status",
      width: 100,
      align: "center",
      render: (value) => <Tag color={value === "사용" ? "green" : "default"}>{value}</Tag>,
    },
  ];

  const handleAddVersion = () => {
    if (!versionInput.trim()) return;

    const nextItem = {
      key: String(Date.now()),
      version: versionInput,
      note: memoInput || "비고 없음",
      status: "작업중",
    };

    setVersions((prev) => [nextItem, ...prev]);
    setVersionInput("");
    setMemoInput("");
  };

  return (
    <Layout className="min-h-screen bg-slate-50">
      <Header className="h-auto border-b border-slate-200 bg-white px-6 py-5">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="mb-4 flex flex-col gap-1">
            <Title level={4} className="!mb-0">
              컨텐츠 관리 화면
            </Title>
            <Text className="text-slate-500">
              상단 검색 영역 + 본문 그리드 + 하단 버전 관리 영역 퍼블리싱 예시
            </Text>
          </div>

          <Card className="rounded-2xl shadow-sm" bodyStyle={{ padding: 20 }}>
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={24} md={12} lg={8} xl={7}>
                <Input
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="제목 또는 작성자 검색"
                  prefix={<SearchOutlined />}
                  size="large"
                />
              </Col>

              <Col xs={24} sm={12} md={6} lg={4} xl={3}>
                <Select
                  value={site}
                  onChange={setSite}
                  size="large"
                  className="w-full"
                  options={[
                    { value: "all", label: "전체 사이트" },
                    { value: "kr", label: "국문" },
                    { value: "en", label: "영문" },
                  ]}
                />
              </Col>

              <Col xs={24} sm={12} md={6} lg={4} xl={3}>
                <Select
                  value={category}
                  onChange={setCategory}
                  size="large"
                  className="w-full"
                  options={[
                    { value: "all", label: "전체 카테고리" },
                    { value: "정책", label: "정책" },
                    { value: "배너", label: "배너" },
                    { value: "공지", label: "공지" },
                    { value: "도움말", label: "도움말" },
                  ]}
                />
              </Col>

              <Col xs={24} sm={12} md={6} lg={4} xl={3}>
                <Select
                  value={status}
                  onChange={setStatus}
                  size="large"
                  className="w-full"
                  options={[
                    { value: "all", label: "전체 상태" },
                    { value: "사용", label: "사용" },
                    { value: "대기", label: "대기" },
                  ]}
                />
              </Col>

              <Col xs={24} sm={12} md={24} lg={8} xl={8}>
                <div className="flex flex-wrap justify-end gap-2">
                  <Button size="large" icon={<ReloadOutlined />}>
                    초기화
                  </Button>
                  <Button type="primary" size="large" icon={<SearchOutlined />}>
                    검색
                  </Button>
                  <Button size="large" icon={<PlusOutlined />}>
                    신규 등록
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </Header>

      <Content className="px-6 py-6">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6">
          <Card className="rounded-2xl shadow-sm" bodyStyle={{ padding: 20 }}>
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <Title level={5} className="!mb-1">
                  컨텐츠 목록 그리드
                </Title>
                <Text className="text-slate-500">
                  총 {filteredData.length}건
                </Text>
              </div>

              <Space wrap>
                <Button icon={<ColumnWidthOutlined />}>그리드 가로생성</Button>
                <Button icon={<ColumnHeightOutlined />}>그리드 세로생성</Button>
              </Space>
            </div>

            <Table
              columns={columns}
              dataSource={filteredData}
              pagination={{ pageSize: 5 }}
              bordered
              scroll={{ x: 1000 }}
            />
          </Card>
        </div>
      </Content>

      <Footer className="border-t border-slate-200 bg-white px-6 py-6">
        <div className="mx-auto w-full max-w-[1600px]">
          <Card className="rounded-2xl shadow-sm" bodyStyle={{ padding: 20 }}>
            <div className="mb-4 flex items-center gap-2">
              <HistoryOutlined />
              <Title level={5} className="!mb-0">
                버전 관리
              </Title>
            </div>

            <Row gutter={[16, 16]}>
              <Col xs={24} md={6}>
                <Input
                  value={versionInput}
                  onChange={(e) => setVersionInput(e.target.value)}
                  placeholder="버전 입력 (예: v1.0.2)"
                  size="large"
                />
              </Col>

              <Col xs={24} md={14}>
                <Input
                  value={memoInput}
                  onChange={(e) => setMemoInput(e.target.value)}
                  placeholder="변경 내용을 입력하세요"
                  size="large"
                />
              </Col>

              <Col xs={24} md={4}>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  size="large"
                  className="w-full"
                  onClick={handleAddVersion}
                >
                  생성
                </Button>
              </Col>
            </Row>

            <Divider />

            <div className="grid gap-3">
              {versions.map((item) => (
                <div
                  key={item.key}
                  className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Text strong>{item.version}</Text>
                      <Tag color={item.status === "배포" ? "blue" : "gold"}>{item.status}</Tag>
                    </div>
                    <Text className="text-slate-500">{item.note}</Text>
                  </div>

                  <Space>
                    <Button>수정</Button>
                    <Button danger>삭제</Button>
                  </Space>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Footer>
    </Layout>
  );
}

`;

const tabItems = [
    {
        key: "default",
        label: "기본",
        children: (
            <div className={styles.tabPanel}>
                <div className={styles.placeholder}>

                    <pre className={styles.codeBlock}>
                        <code>{stepMoveSource3}</code>
                    </pre>
                </div>
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
