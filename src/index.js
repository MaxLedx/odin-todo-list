import "./style.css";
import { Renderer } from "./renderer";
import { initializeMemory } from "./memory";
import { State } from "./state";

const memory = initializeMemory();
const state = new State({ memory: memory });
const renderer = new Renderer(state);
renderer.renderProjects();