import React, { useState } from "react";
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

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const Mainlayout = () => {
    const [collapsed, setCollapsed] = useState(false); // 사이드바 접힘 상태
    const [selectedTask, setSelectedTask] = useState(null); // 상세 정보 상태

    // 메뉴 구성 데이터
    const menuItems = [
        { key: "1", icon: <DashboardOutlined />, label: "대시보드" },
        {
            key: "sub1", icon: <RocketOutlined />, label: "프로젝트 관리",
            children: [
                { key: "2", label: "프로젝트 목록" },
                { key: "3", label: "프로젝트 상세" },
            ]
        },
        {
            key: "sub2", icon: <CheckSquareOutlined />, label: "업무 관리 (핵심)",
            children: [
                { key: "4", label: "업무 목록" },
                { key: "5", label: "업무 상세 / 수정" },
            ]
        },
        {
            key: "sub3", icon: <UserOutlined />, label: "직원 관리",
            children: [
                { key: "6", label: "직원 목록" },
                { key: "7", label: "직원 상세" },
            ]
        },
        { key: "8", icon: <TeamOutlined />, label: "부서 관리" },
        { key: "9", icon: <TrophyOutlined />, label: "스킬 관리" },
    ];

    // 상세 뷰를 위해 샘플 데이터 항목 추가 (우선순위, 마감일, 설명 등)
    const dataSource = [
        {
            key: "1", task_no: "TSK-001", project: "포트폴리오", title: "로그인 API 개발",
            assignee: "홍길동", status: "In Progress", priority: "High", progress: 70,
            due_date: "2025-03-31", description: "JWT를 이용한 인증 로직을 구현하고 테스트 코드를 작성해야 합니다."
        },
        {
            key: "2", task_no: "TSK-002", project: "포트폴리오", title: "UI 수정 및 최적화",
            assignee: "김철수", status: "Todo", priority: "Medium", progress: 10,
            due_date: "2025-04-15", description: "메인 대시보드의 레이아웃 반응형 대응 작업입니다."
        },
    ];

    const columns = [
        { title: "번호", dataIndex: "task_no", key: "task_no", width: 90 },
        { title: "업무명", dataIndex: "title", key: "title" },
        { title: "담당자", dataIndex: "assignee", key: "assignee", width: 90 },
        {
            title: "상태", dataIndex: "status", key: "status", width: 110,
            render: (status) => <Tag color={status === "Todo" ? "default" : "blue"}>{status}</Tag>
        },
        {
            title: "진행률", dataIndex: "progress", key: "progress", width: 120,
            render: (p) => <Progress percent={p} size="small" />
        },
    ];

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* 1. 사이드바 영역 */}
            <Sider trigger={null} collapsible collapsed={collapsed} theme="light" width={240}>
                <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderBottom: "1px solid #f0f0f0" }}>
                    <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                        {collapsed ? "PMS" : "Project Admin"}
                    </Title>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["4"]}
                    defaultOpenKeys={["sub2"]}
                    items={menuItems}
                    style={{ borderRight: 0 }}
                />
            </Sider>

            <Layout>
                {/* 2. 상단 헤더 (햄버거 버튼) */}
                <Header style={{ padding: 0, background: "#fff", display: "flex", alignItems: "center" }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: "18px", width: 64, height: 64 }}
                    />
                    <Title level={4} style={{ margin: 0 }}>업무 관리</Title>
                </Header>

                {/* 3. 메인 콘텐츠 영역 */}
                <Content style={{ margin: "16px", overflow: "initial" }}>
                    <Row gutter={[16, 16]}>

                        {/* 상단 필터 바 */}
                        <Col span={24}>
                            <Card size="small">
                                <Space>
                                    <Input placeholder="업무명 검색" prefix={<SearchOutlined />} />
                                    <Select placeholder="상태" style={{ width: 120 }} defaultValue="all">
                                        <Option value="all">전체</Option>
                                        <Option value="todo">Todo</Option>
                                        <Option value="progress">In Progress</Option>
                                    </Select>
                                    <Button type="primary">조회</Button>
                                    <Button icon={<ReloadOutlined />}>초기화</Button>
                                    <Button type="primary" icon={<PlusOutlined />} ghost>업무 등록</Button>
                                </Space>
                            </Card>
                        </Col>

                        {/* 목록 테이블 (요청하신 코드 반영) */}
                        <Col span={24}>
                            <Card title={<span><FileTextOutlined /> 업무 목록</span>} size="small">
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    onRow={(record) => ({
                                        onClick: () => setSelectedTask(record), // 클릭 시 상세 데이터 변경
                                        style: { cursor: 'pointer' }
                                    })}
                                />
                            </Card>
                        </Col>

                        {/* 하단 상세 정보 패널 (요청하신 코드 반영) */}
                        {selectedTask && (
                            <Col span={24}>
                                <Card
                                    title="업무 상세 정보"
                                    extra={<Tag color="blue">{selectedTask.task_no}</Tag>}
                                    style={{ borderTop: "3px solid #1890ff" }}
                                >
                                    <Descriptions bordered column={2} size="small">
                                        <Descriptions.Item label="업무명" span={2}>
                                            <Text strong>{selectedTask.title}</Text>
                                        </Descriptions.Item>
                                        <Descriptions.Item label="프로젝트">{selectedTask.project}</Descriptions.Item>
                                        <Descriptions.Item label="담당자">{selectedTask.assignee}</Descriptions.Item>
                                        <Descriptions.Item label="우선순위">
                                            <Badge status={selectedTask.priority === "High" ? "error" : "processing"} text={selectedTask.priority} />
                                        </Descriptions.Item>
                                        <Descriptions.Item label="마감일">{selectedTask.due_date || "2025-12-31"}</Descriptions.Item>
                                        <Descriptions.Item label="진행률" span={2}>
                                            <Progress percent={selectedTask.progress} status="active" />
                                        </Descriptions.Item>
                                        <Descriptions.Item label="업무 설명" span={2}>
                                            <div style={{ minHeight: "60px", color: "#666" }}>
                                                {selectedTask.description || "등록된 설명이 없습니다."}
                                            </div>
                                        </Descriptions.Item>
                                    </Descriptions>
                                    <div style={{ marginTop: "16px", textAlign: "right" }}>
                                        <Space>
                                            <Button icon={<DeleteOutlined />} danger>삭제</Button>
                                            <Button icon={<EditOutlined />} type="primary">수정하기</Button>
                                        </Space>
                                    </div>
                                </Card>
                            </Col>
                        )}

                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Mainlayout;