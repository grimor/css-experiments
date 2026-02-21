import "./style.css";
import { Pane } from "tweakpane";

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  document.documentElement.style.setProperty("--mouseX", Math.round(x));
  document.documentElement.style.setProperty("--mouseY", Math.round(y));
});
