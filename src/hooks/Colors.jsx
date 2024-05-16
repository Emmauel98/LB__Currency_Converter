import { useState } from "react";

const Colors = () => {
  const [colorPalette, setColorPalette] = useState({
    background_Color: "#F1F5F9",
    container_Color: "#ffff",
    text_color: "#000",
    text_color_nonHeading: "#000",
    text_color_minitext: "#1f2937",
    input_background: "#f3f4f6",
    selector_background: "#fff",
  });

  return [colorPalette, setColorPalette];
};

export default Colors;
