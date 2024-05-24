import styles from "../../styles/ExtractedResultContent.module.css";
import ExtractedColorsPalette from "../ExtractedColorsPalette";
import UploadedImage from "../UploadedImage";

const ExtractedResultContent = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.griditem} style={{ flex: 3 }}>
        <UploadedImage />
      </div>
      <div className={styles.griditem} style={{ flex: 2 }}>
        <ExtractedColorsPalette />
      </div>
    </div>
  );
};

export default ExtractedResultContent;
