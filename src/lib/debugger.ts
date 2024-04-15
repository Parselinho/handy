import debug, { Debugger } from "debug";

// Specify that `namespace` is a string and `getDebugger` returns a Debugger instance.
export function getDebugger(namespace: string): Debugger {
  return debug(`handyapp:${namespace}`);
}
