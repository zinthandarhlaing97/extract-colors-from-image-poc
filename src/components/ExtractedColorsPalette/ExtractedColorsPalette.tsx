import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectColor } from "@/store/application/application.slice";
import { getTextColor } from "@/utils/app.utils";
import { FinalColor } from "extract-colors/lib/types/Color";
import { CopySimple } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "../../styles/ExtractedColorsPalette.module.css";
import Snackbar from "../Snackbar";

const ExtractedColorsPalette = () => {
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { colors, selectedColor } = useAppSelector(
    (state) => state.application
  );

  const copyToClipboard = (
    color: FinalColor,
    setShowSnackbar: Dispatch<SetStateAction<boolean>>
  ) => {
    navigator.clipboard
      .writeText(color.hex)
      .then(() => {
        setShowSnackbar(true);
        dispatch(selectColor({ color: color }));
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.buttonList}>
          {colors.map((color, index) => (
            <button
              key={index}
              className={styles.button}
              style={{
                backgroundColor: color.hex,
                color: getTextColor(color.hex),
              }}
              onClick={() => copyToClipboard(color, setShowSnackbar)}
            >
              {color.hex.toUpperCase()}
              <CopySimple size={24} weight="regular" />
            </button>
          ))}
        </div>
        {/* <div className={styles.row}>
          <button
            className={styles.actionbtn}
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--background-color)",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.35)",
            }}
          >
            Save
            <DownloadSimple size={18} weight="regular" />
          </button>
          <button
            className={styles.actionbtn}
            style={{
              color: "var(--primary-color)",
              backgroundColor: "white",
            }}
          >
            Share
            <Share size={18} weight="regular" />
          </button>
        </div> */}
      </div>
      <Snackbar
        message={`Copied: ${selectedColor?.hex.toUpperCase()}`}
        show={showSnackbar}
        style={{
          backgroundColor: selectedColor?.hex,
          color: selectedColor ? getTextColor(selectedColor.hex) : "#000",
        }}
        onClose={() => setShowSnackbar(false)}
      />
    </>
  );
};

export default ExtractedColorsPalette;
