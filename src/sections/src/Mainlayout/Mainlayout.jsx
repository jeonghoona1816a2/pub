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
import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const Mainlayout = () => {
    const [collapsed, setCollapsed] = useState(false); // 사이드바 접힘 상태


    // 메뉴 구성 데이터
    const menuItems = [
        { key: "1", icon: <DashboardOutlined />, label: <Link to="/">대시보드</Link>, },
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
                { key: "4", label: <Link to="/task">업무목록</Link> },
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
        { key: "10", icon: <TrophyOutlined />, label: <Link to="/stepmove">StepMove</Link> },
        { key: "11", icon: <TrophyOutlined />, label: <Link to="/stepmove2">StepMove2</Link> },
        { key: "12", icon: <TrophyOutlined />, label: <Link to="/simul">Simul</Link> },

    ];

    // 상세 뷰를 위해 샘플 데이터 항목 추가 (우선순위, 마감일, 설명 등)

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
                <Content style={{ margin: "16px", minWidth:"110px", overflow: "initial" }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Mainlayout;          