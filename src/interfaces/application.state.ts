import { FinalColor } from "extract-colors/lib/types/Color";

export interface IApplicationState {
  selectedImage?: File | undefined;
  imagePreviewUrl?: string | undefined;
  colors: FinalColor[];
  selectedColor?: FinalColor | undefined;
}
