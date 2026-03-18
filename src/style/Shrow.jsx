import { Row } from "antd";
import styles from "./Style.module.scss";

export default function TopshRow({ className = "", children, ...props }) {
  return (
    <Row
      {...props}
      className={`${styles.topsh} ${className}`.trim()}
    >
      {children}
    </Row>
  );
}