import styles from "../../styles/Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
