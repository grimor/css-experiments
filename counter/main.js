import "./style.css";
import { Pane } from "tweakpane";

const container = document.getElementById("example_3");
const counter = document.createElement("div");
counter.classList.add("counter");
container.append(counter);

for (let i = 0; i < 5; i++) {
  const counterSegment = document.createElement("div");
  counterSegment.classList.add("counter__segment");
  counterSegment.style.setProperty("--count", 10);
  counterSegment.style.setProperty("--speed", Math.pow(10, 4 - i));
  for (let j = 0; j < 10; j++) {
    const counterNumber = document.createElement("span");
    counterNumber.innerText = j;
    counterNumber.classList.add("counter__segment-number");
    counterNumber.style.setProperty("--i", j);
    counterSegment.append(counterNumber);
  }
  counter.append(counterSegment);
}

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
