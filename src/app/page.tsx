"use client";

import ExtractedResultContent from "@/components/ExtractedResultContent";
import ImageUploadForm from "@/components/ImageUploadForm";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
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
      </main>
    </>
  );
}
