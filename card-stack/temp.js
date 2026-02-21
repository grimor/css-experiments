:root {
  height: 100vh;
  width: 100vh;
  --reppelerRadius: 100;
  --reppelerDiameter: calc(var(--reppelerRadius) * 2 * 1px);
  --reppelerCx: calc(var(--mouseX) + var(--reppelerRadius) * 1px);
  --reppelerCy: calc(var(--mouseY) + var(--reppelerRadius) * 1px);
}
/* dx and dy are the vertical and horizontal distances between
* the circle centers.
*/
/*         dx = x1 - x0; */
/*         dy = y1 - y0; */
.circle {
  --radius: 50;
  --diameter: calc(var(--radius) * 2 * 1px);
  --x: 250;
  --y: 150;
  --cx: calc(var(--x) - var(--radius));
  --cy: calc(var(--y) - var(--radius));
  --dx: calc(var(--mouseX) - var(--x));
  --dy: calc(var(--mouseY) - var(--y)); 
  --d: hypot(var(--dx), var(--dy));
  --ddx: hypot(var(--dx));
  --ddy: hypot(var(--dy));
  --intersection: calc(var(--radius) + var(--reppelerRadius));
  
  --dcx: calc(var(--mouseX) - var(--cx));
  --dcy: calc(var(--mouseY) - var(--cy));
  --intersectionDeltaX: max(0, calc(var(--intersection) - var(--ddx) - var(--radius)));
/*   --intersectionDeltaX: max(0, calc(var(--dcx))); */
  --intersectionDeltaY: max(0, calc(var(--intersection) - var(--ddy) - var(--radius)));
/*   --intersectionDeltaX: max(0, calc(var(--dcy))); */
  position: absolute;
  --isIntersecting: clamp(0, calc(var(--intersection) - var(--d)), 1);
  --dLeft: calc(var(--intersectionDeltaX) * var(--isIntersecting));
  --dTop: calc(var(--intersectionDeltaY) * var(--isIntersecting));
  left: calc((var(--cx) + var(--dLeft)) * 1px);
  top: calc((var(--cy) + var(--dTop))  * 1px);
  width: var(--diameter);
  height: var(--diameter);
  background: #f0f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: calc(var(--dTop) * 1px) 0 0 calc(var(--dLeft) * 1px) transparent;
}

.circle:after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid #ccc;
}

.debug-circle {
  --radius: var(--reppelerRadius);
  --x: var(--mouseX);
  --y: var(--mouseY);
  background: #00f;
  left: calc(var(--cx) * 1px);
  top: calc(var(--cy) * 1px);
  opacity: 0.2;
}

.debug-circle:after {content: none}