# Summary

This is based on the tutorial provided [here](https://wasmbyexample.dev/examples/hello-world/hello-world.rust.en-us.html).

To build the wasm from inside the dev container, you can run the build task in vscode, or alternatively run `wasm-pack build --target web` in the terminal.

After the project is built, you should be able to open a web browser and open the url <http://localhost:8080/> which is hosted by an nginx container pointed at the workspace. This is to avoid CORS issues when opening the index from your own machine.
