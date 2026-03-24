import React, { useMemo, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Space,
  Tabs,
  Typography,
} from "antd";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const { Text } = Typography;

const topSelectOptions = [
  { value: "all", label: "select" },
  { value: "opt1", label: "option 1" },
  { value: "opt2", label: "option 2" },
];

const footerSelectOptions = [
  { value: "v1", label: "select" },
  { value: "v2", label: "option 1" },
  { value: "v3", label: "option 2" },
];

const initialRows = [
  { id: 1, category: "A", item: "ITEM-001", value1: 120, value2: 240, note: "sample" },
  { id: 2, category: "B", item: "ITEM-002", value1: 80, value2: 160, note: "sample" },
  { id: 3, category: "C", item: "ITEM-003", value1: 300, value2: 120, note: "sample" },
];

const labelBoxStyle = {
  minWidth: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #d9d9d9",
  borderRight: 0,
  background: "#fff",
  padding: "0 8px",
};

export default function StepMove2() {
  const [rowData, setRowData] = useState(initialRows);
  const [dynamicCols, setDynamicCols] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const safeDynamicCols = Array.isArray(dynamicCols) ? dynamicCols : [];

  const handleAddCol = () => {
    const nextIndex = safeDynamicCols.length + 1;
    const field = `dynamic_${nextIndex}`;

    setDynamicCols((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      return [
        ...safePrev,
        {
          field,
          headerName: `COL ${nextIndex}`,
          editable: true,
          minWidth: 120,
        },
      ];
    });

    setRowData((prev) =>
      prev.map((row) => ({
        ...row,
        [field]: "",
      })),
    );
  };

  const handleRemoveCol = () => {
    if (safeDynamicCols.length === 0) return;

    const lastCol = safeDynamicCols[safeDynamicCols.length - 1];

    setDynamicCols((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      return safePrev.slice(0, -1);
    });

    setRowData((prev) =>
      prev.map((row) => {
        const next = { ...row };
        delete next[lastCol.field];
        return next;
      }),
    );
  };

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      category: "NEW",
      item: `ITEM-${String(rowData.length + 1).padStart(3, "0")}`,
      value1: 0,
      value2: 0,
      note: "new row",
    };

    safeDynamicCols.forEach((col) => {
      newRow[col.field] = "";
    });

    setRowData((prev) => [...prev, newRow]);
  };

  const handleRemoveRow = () => {
    if (selectedRows.length === 0) return;

    const selectedIds = new Set(selectedRows.map((row) => row.id));
    setRowData((prev) => prev.filter((row) => !selectedIds.has(row.id)));
    setSelectedRows([]);
  };

  const columnDefs = useMemo(
    () => [
      {
        headerName: "No",
        valueGetter: (params) => params.node.rowIndex + 1,
        width: 80,
        pinned: "left",
      },
      {
        field: "category",
        headerName: "Category",
        editable: true,
        minWidth: 120,
      },
      {
        field: "item",
        headerName: "Item",
        editable: true,
        minWidth: 160,
      },
      {
        field: "value1",
        headerName: "Value 1",
        editable: true,
        minWidth: 120,
      },
      {
        field: "value2",
        headerName: "Value 2",
        editable: true,
        minWidth: 120,
      },
      {
        field: "note",
        headerName: "Note",
        editable: true,
        flex: 1,
        minWidth: 180,
      },
      ...safeDynamicCols,
    ],
    [safeDynamicCols],
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      editable: false,
    }),
    [],
  );

  const totalValue1 = rowData.reduce((acc, cur) => acc + Number(cur.value1 || 0), 0);
  const totalValue2 = rowData.reduce((acc, cur) => acc + Number(cur.value2 || 0), 0);

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: 24,
      }}
    >
      <Card
        bordered
        style={{
          maxWidth: 980,
          margin: "0 auto",
          borderRadius: 0,
          boxShadow: "none",
        }}
        styles={{ body: { padding: 0 } }}
      >
        <div style={{ padding: 24, borderBottom: "1px solid #d9d9d9" }}>
          <Breadcrumb
            items={[
              { title: "home" },
              { title: "dep1" },
              { title: "dep2" },
            ]}
            style={{ marginBottom: 16 }}
          />

          <Row gutter={[16, 12]} align="middle">
            {[1, 2, 3, 4].map((item) => (
              <Col key={item} xs={24} sm={12} md={6}>
                <Space.Compact style={{ width: "100%" }}>
                  <div style={labelBoxStyle}>label</div>
                  <Select defaultValue="all" options={topSelectOptions} style={{ width: "100%" }} />
                </Space.Compact>
              </Col>
            ))}

            <Col xs={24} md={24} style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="primary">Search</Button>
            </Col>
          </Row>

          <div style={{ marginTop: 20 }}>
            <Tabs
              defaultActiveKey="1"
              items={[
                { key: "1", label: "tab", children: null },
                { key: "2", label: "tab", children: null },
                { key: "3", label: "tab", children: null },
              ]}
            />
          </div>

          <div
            style={{
              border: "1px solid #d9d9d9",
              marginTop: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                borderBottom: "1px solid #d9d9d9",
              }}
            >
              <Text>note : sample grid</Text>

              <Space wrap>
                <Button size="small" onClick={handleAddCol}>Add Col</Button>
                <Button size="small" onClick={handleRemoveCol}>Remove Col</Button>
                <Button size="small" onClick={handleAddRow}>Add Row</Button>
                <Button size="small" onClick={handleRemoveRow}>Remove Row</Button>
              </Space>
            </div>

            <div style={{ padding: 16 }}>
              <div
                className="ag-theme-quartz"
                style={{
                  width: "100%",
                  height: 360,
                  border: "1px solid #d9d9d9",
                }}
              >
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  rowSelection={{ mode: "multiRow" }}
                  onSelectionChanged={(event) => {
                    setSelectedRows(event.api.getSelectedRows());
                  }}
                />
              </div>
            </div>

            <div
              style={{
                padding: "10px 16px",
                borderTop: "1px solid #d9d9d9",
                background: "#fafafa",
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <Text>Total</Text>
              <Text>Value 1: {totalValue1}</Text>
              <Text>Value 2: {totalValue2}</Text>
              <Text>Rows: {rowData.length}</Text>
            </div>
          </div>
        </div>

        <div style={{ padding: 16 }}>
          <Row gutter={[16, 12]} align="middle">
            <Col xs={24} md={6}>
              <Space.Compact style={{ width: "100%" }}>
                <div style={labelBoxStyle}>label</div>
                <Input placeholder="input" />
              </Space.Compact>
            </Col>

            <Col xs={24} md={6}>
              <Space.Compact style={{ width: "100%" }}>
                <div style={labelBoxStyle}>label</div>
                <Input placeholder="input" />
              </Space.Compact>
            </Col>

            <Col xs={24} md={5}>
              <Space.Compact style={{ width: "100%" }}>
                <div style={labelBoxStyle}>label</div>
                <Select defaultValue="v1" options={footerSelectOptions} style={{ width: "100%" }} />
              </Space.Compact>
            </Col>

            <Col xs={24} md={5}>
              <Space.Compact style={{ width: "100%" }}>
                <div style={labelBoxStyle}>label</div>
                <Select defaultValue="v1" options={footerSelectOptions} style={{ width: "100%" }} />
              </Space.Compact>
            </Col>

            <Col xs={24} md={2} style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="primary">Save</Button>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}
