# Update WASM
cp ./node_modules/@hpcc-js/wasm/dist/graphvizlib.wasm graphviz/graphviz.wasm

# Update TS
echo "export default '$(base64 graphviz/graphviz.wasm)';" > graphviz/graphviz.ts
