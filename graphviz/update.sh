# CWD
cd graphviz

# Update WASM
wget -O graphviz.wasm https://unpkg.com/@hpcc-js/wasm/dist/graphvizlib.wasm

# Update TS
echo "export default '$(base64 graphviz.wasm)';" > graphviz.js
