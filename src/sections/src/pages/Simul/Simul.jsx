import { Tabs } from "antd";
import styles from "./Simul.module.scss";

const tabItems = [
  {
    key: "default",
    label: "기본",
    children: (
      <div className={styles.tabPanel}>
        <div className={styles.placeholder}>여기에 내용을 넣으면 됩니다.</div>
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
