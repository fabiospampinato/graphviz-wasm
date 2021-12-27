# Graphviz WASM

A port of Graphviz to WASM.

Note: this is currently just a light wrapper around [`@hpcc-js/wasm`](https://www.npmjs.com/package/@hpcc-js/wasm), you might want to consider just using that directly. The plan is to eventually generate custom bindings to graphviz, optimized for speed and size, and depending on your use case you'd import the right one.

## Install

```sh
npm install --save graphviz-wasm
```

## Usage

This is how you'd use the library:

```ts
import graphviz from 'graphviz-wasm';

await graphviz.loadWASM (); // First of all you need to load the WASM instance and wait for it

const dot = `
  strict graph {
    a -- b
    a -- b
    b -- a [color=blue]
  }
`;

const svg = graphviz.layout ( dot );
```

This is the interface of the `layout` method:

```ts
type Engine = 'circo' | 'dot' | 'fdp' | 'neato' | 'osage' | 'patchwork' | 'sfdp' | 'twopi';

type Format = 'dot_json' | 'dot' | 'json' | 'plain-ext' | 'plain' | 'svg' | 'xdot_json';

type layout = ( source: string, format: Format = 'svg', engine: Engine = 'dot' ) => string;
```

## License

- **Graphviz**: EPL © [Graphviz](https://gitlab.com/graphviz/graphviz/-/blob/main/LICENSE).
- **WASM Port**: Apache © [hpcc-js-wasm](https://github.com/hpcc-systems/hpcc-js-wasm/blob/trunk/LICENSE).
- **Rest**: MIT © Fabio Spampinato.
