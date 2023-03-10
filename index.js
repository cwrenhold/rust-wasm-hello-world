// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/rust_wasm_hello_world.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const helloWorld = await init("./pkg/rust_wasm_hello_world_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = helloWorld.add(32, 24);

  // Set the result onto the body
  document.body.textContent = `Hello, world! addResult: ${addResult}`;
};
runWasm();