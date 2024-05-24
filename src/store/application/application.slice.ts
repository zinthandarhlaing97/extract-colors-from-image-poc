import { IApplicationState } from "@/interfaces/application.state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FinalColor } from "extract-colors/lib/types/Color";

export const initialState: IApplicationState = {
  imagePreviewUrl: undefined,
  colors: [],
  selectedColor: undefined,
};

interface IUploadImagePayload {
  url: string;
  colors: FinalColor[];
}

interface ISelectColorPayload {
  color: FinalColor;
}

const slice = createSlice({
  name: "application",
  initialState,
  reducers: {
    uploadImage: (state, action: PayloadAction<IUploadImagePayload>) => {
      state.imagePreviewUrl = action.payload.url;
      state.colors = action.payload.colors;
    },
    selectColor: (state, action: PayloadAction<ISelectColorPayload>) => {
      state.selectedColor = action.payload.color;
    },
  },
});

export const { uploadImage, selectColor } = slice.actions;

export default slice.reducer;
