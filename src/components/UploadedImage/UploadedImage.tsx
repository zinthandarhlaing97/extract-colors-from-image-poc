import { useAppSelector } from "@/hooks/redux";
import styles from "../../styles/UploadedImage.module.css";

const UploadedImage = () => {
  const { imagePreviewUrl } = useAppSelector((state) => state.application);

  return (
    <div
      className={styles.imgcard}
      style={{
        backgroundImage: imagePreviewUrl
          ? `url(${imagePreviewUrl})`
          : undefined,
      }}
    ></div>
  );
};

export default UploadedImage;
