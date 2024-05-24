import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Image } from "phosphor-react";
import { ChangeEvent, useRef, useState } from "react";
import styles from "../../styles/ImageUploadForm.module.css";
import { uploadImage } from "@/store/application/application.slice";
import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const ImageUploadForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : undefined;

    if (file) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        return;
      }
      const objectUrl = URL.createObjectURL(file);
      extractColors(objectUrl)
        .then((data: FinalColor[]) => {
          dispatch(uploadImage({ url: objectUrl, colors: data }));
        })
        .catch(console.error);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.form}>
      <input
        type="file"
        ref={fileInputRef}
        className={styles.inputFile}
        onChange={handleFileChange}
        accept="image/*"
      />
      <Image className={styles.icon} size={88} weight="thin" />
      <div>
        <h3>{"Upload Image File"}</h3>
        <p>{"Supported Format: SVG, JPG, PNG (10MB each)"}</p>
      </div>

      <div className={styles.button} onClick={handleButtonClick}>
        Browse
      </div>
    </div>
  );
};

export default ImageUploadForm;
