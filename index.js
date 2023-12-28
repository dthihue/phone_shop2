export const createSignal = (value) => {
  const observers = [];

  const get = () => {
    const fn = context[context.length - 1];
    if (fn) {
      observers.push(fn);
    }
    return value;
  };

  const set = (v) => {
    value = v;

    for (const o of observers) {
      o();
    }
  };

  return [get, set];
};
const context = [];
export const createEffect = (fn) => {
  context.push(fn);
  fn();
  context.pop();
};

/**
 *
 * @param {HTMLElement} ele
 * @param {HTMLElement} parent
 */
export const render = (ele, parent) => {
  parent.replaceChildren(ele);
};
