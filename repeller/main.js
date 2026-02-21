import "./style.css";
import { Pane } from "tweakpane";

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  document.documentElement.style.setProperty("--mouseX", Math.round(x));
  document.documentElement.style.setProperty("--mouseY", Math.round(y));
});

const pane = new Pane();
const params = {
  debug: false,
  repellerRadius: 100,
};

const update = () => {
  if (params.debug) {
    document.body.classList.add("debug");
  } else {
    document.body.classList.remove("debug");
  }
  document.documentElement.style.setProperty(
    "--repellerRadius",
    params.repellerRadius,
  );
};

pane.addBinding(params, "debug");
pane.addBinding(params, "repellerRadius", { min: 50, max: 200, step: 1 });
pane.on("change", update);
