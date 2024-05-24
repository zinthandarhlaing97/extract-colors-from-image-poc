import { CSSProperties, FC, useEffect } from "react";
import styles from "../../styles/Snackbar.module.css";
import { X, XCircle } from "phosphor-react";

type SnackbarProps = {
  style: CSSProperties;
  message: string;
  show: boolean;
  onClose: () => void;
};

const Snackbar: FC<SnackbarProps> = ({ message, show, onClose, style }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Hide snackbar after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`${styles.snackbar} ${show ? styles.show : ""}`}
      style={{ ...style }}
    >
      <div className={styles.content}>
        {message}
        <XCircle size={24} weight="regular" onClick={onClose} />
      </div>
    </div>
  );
};

export default Snackbar;
