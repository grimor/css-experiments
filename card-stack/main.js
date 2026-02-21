// https://codepen.io/jh3y/pen/XWQXPjd
// https://codepen.io/jh3y/pen/dyLLWNM

import { Pane } from "tweakpane";

import "./style.css";
const CARD_NUMBER = 10;

const container = document.getElementById("example_2");

for (let i = 0; i < CARD_NUMBER; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.setProperty("--i", i);
  container.append(card);
}

const pane = new Pane({ title: "Debug" });
const params = {
  angle: 0,
  gap: 10,
  rotation: 0,
};

const f1 = pane.addFolder({
  title: "Position",
});

const f2 = pane.addFolder({
  title: "Color",
});

const update = () => {
  document.documentElement.style.setProperty("--angle", `${params.angle}deg`);
  document.documentElement.style.setProperty("--gap", `${params.gap}px`);
  document.documentElement.style.setProperty("--rotation", params.rotation);
};

f1.addBinding(params, "angle", { min: -90, max: 90, step: 1 });
f1.addBinding(params, "gap", { min: 0, max: 50, step: 1 });
f2.addBinding(params, "rotation", { min: 0, max: 50, step: 1 });
pane.on("change", update);
