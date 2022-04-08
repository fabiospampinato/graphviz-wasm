
/* IMPORT */

import {describe} from 'fava';
import fs from 'node:fs';
import Graphviz from '../dist/index.js';

/* MAIN */

describe ( 'Graphviz', it => {

  it ( 'renders dot to svg', async t => {

    const input = fs.readFileSync ( './test/fixtures/input.txt', 'utf8' );
    const output = fs.readFileSync ( './test/fixtures/output.txt', 'utf8' );

    await Graphviz.loadWASM ();

    const result = Graphviz.layout ( input );

    t.is ( result, output );

  });

});
