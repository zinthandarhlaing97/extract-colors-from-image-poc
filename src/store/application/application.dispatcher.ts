import { Dispatch } from "react";
import { uploadImage, selectColor } from "./application.slice";
import { RootActions } from "..";
import { FinalColor } from "extract-colors/lib/types/Color";

export const dispatchUploadImage =
  (image: File, url: string, colors: FinalColor[]) =>
  (dispatch: Dispatch<RootActions>) =>
    dispatch({ type: uploadImage.type, payload: { image, url, colors } });

export const dispatchSelectColor =
  (color: FinalColor) => (dispatch: Dispatch<RootActions>) =>
    dispatch({ type: selectColor.type, payload: { color } });
