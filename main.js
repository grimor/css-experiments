import "./style.css";
import { Pane } from "tweakpane";

const animatedTextEl = document.getElementById("animated-text");
const animatedTextStr = animatedTextEl.innerText;

animatedTextEl.innerText = "";

animatedTextStr.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.innerText = char;
  span.classList.add("character");
  span.style.setProperty("--i", i);

  animatedTextEl.append(span);
});

animatedTextEl.style.setProperty("--count", animatedTextStr.length);

const pane = new Pane();
const params = {
  debug: false,
};

const update = () => {
  if (params.debug) {
    document.body.classList.add("debug");
  } else {
    document.body.classList.remove("debug");
  }
};

pane.addBinding(params, "debug");
pane.on("change", update);
