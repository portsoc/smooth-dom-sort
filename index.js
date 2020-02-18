import * as sm from "./smooth.js";

const dummy = "abcdefghijklmnop".split('');
const elems = dummy.map(sm.create);
document.body.append( ...elems );

sm.getOriginalLocations();
sm.randomizeScores();


window.setInterval(() => {
  sm.randomizeScores();
  sm.sort();
}, 2000);
