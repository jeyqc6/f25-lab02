import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js"
import { Shape } from "./shapes/shape.js";

const shape: Shape = new Rectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw();