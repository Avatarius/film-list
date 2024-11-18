import { ReactNode } from "react";
import styles from "./details.module.scss";

interface IDetailsProps {
  children: ReactNode;
}

function Details({ children }: IDetailsProps) {
  return <div className={styles.container}>{children}</div>;
}

export { Details };
