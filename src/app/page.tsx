"use client";

import ExtractedResultContent from "@/components/ExtractedResultContent";
import ImageUploadForm from "@/components/ImageUploadForm";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { uploadImage } from "@/store/application/application.slice";
import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";
import { useEffect } from "react";
import styles from "../styles/page.module.css";

export default function Home() {
  const dispatch = useAppDispatch();
  const { imagePreviewUrl } = useAppSelector((state) => state.application);

  useEffect(() => {
    if (!imagePreviewUrl) {
      generateSampleColors();
    }
  }, []);

  const generateSampleColors = () => {
    var src = "sample.jpg";

    extractColors(src)
      .then((data: FinalColor[]) => {
        dispatch(uploadImage({ url: src, colors: data }));
      })
      .catch(console.error);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Pixel Palette Picker</h1>

        <div className={styles.grid}>
          <div className={styles.griditem}>
            <div className={styles.card}>
              <ImageUploadForm />
            </div>
          </div>
          <div className={styles.griditem}>
            <div className={styles.card}>
              <ExtractedResultContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
