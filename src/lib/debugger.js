import debug from "debug";

export function getDebugger(namespace) {
  return debug(`handyapp:${namespace}`);
}
