/**
 * Create a div with text.
 * @param {string} txt to be added to element
 */
export function create(txt) {
  const e = document.createElement('div');
  if (txt) e.textContent = txt;
  return e;
}

/**
 * Adds or updates the data-score attribute 
 * in every element selectable via the selector parameter. 
 */
export function randomizeScores(selector = '*') {
  const all = document.body.querySelectorAll(selector);
  all.forEach( x => x.dataset.score = Math.round(Math.random()*20) );
}

/**
 * For the element provided, discover its current location
 * within the page and record these x and y values in the
 * element's data-x and data-y attributes.
 */
function getLocation(elem) {
  const b = document.body.getBoundingClientRect();
  const e = elem.getBoundingClientRect();
  elem.dataset.x = e.left - b.left;
  elem.dataset.y = e.top - b.top;
  return elem;
}

/**
 * For the element provided, create a transform style based
 * on the current score.
 */
function createTransform(moveThis, referenceElem) {
  let tx = 0 - Number(moveThis.dataset.x) + Number(referenceElem.dataset.x);
  let ty = 0 - Number(moveThis.dataset.y) + Number(referenceElem.dataset.y);
  moveThis.style = `transform: translateX(${tx}px) translateY(${ty}px);`;
}

/**
 * For the element provided, discover its current location
 * within the page and record these x and y values in the
 * element's data-x and data-y attributes.
 * @param {HTMLElement} elem 
 */
export function getOriginalLocations(selector = '*') {
  const all = document.body.querySelectorAll(selector);
  const amended = [...all].map(getLocation);
  return amended;
}

/**
 * 
 */
export function sort(selector = '*') {
  const all = [...document.body.querySelectorAll(selector)];
  const initialOrder = [...all];
  all.sort( (a,b) => b.dataset.score - a.dataset.score );

  for (let i=0; i<all.length; i++) {
    createTransform( all[i], initialOrder[i] )
  }
}
