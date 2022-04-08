
/* IMPORT */

import decode from 'decode-base64';
import once from 'once';
import wrapper from '../graphviz/wrapper.js';
import {DEFAULT_ENGINE, DEFAULT_FORMAT} from './constants';
import type {Engine, Format} from './types';

/* MAIN */

const generate = ( GRAPHVIZ_BASE64: string ) => {

  const Graphviz = {

    /* LIFECYCLE API */

    loadWASM: once ( async (): Promise<void> => {

      const GRAPHVIZ_BUFFER = decode ( GRAPHVIZ_BASE64 );

      const instance = await wrapper ({ wasmBinary: GRAPHVIZ_BUFFER });

      Graphviz.layout = ( source: string, format: Format = DEFAULT_FORMAT, engine: Engine = DEFAULT_ENGINE ): string => {

        const graphviz = new instance.Graphviz ();
        const result = graphviz.layout ( source, format, engine );

        instance.destroy ( graphviz );

        if ( !result ) throw new Error ( instance.Graphviz.prototype.lastError () );

        return result;

      };

    }),

    /* API */

    layout: ( source: string, format: Format = DEFAULT_FORMAT, engine: Engine = DEFAULT_ENGINE ): string => {

      throw new Error ( '[graphviz] You need to call and await "graphviz.loadWASM" first' );

    }

  };

  return Graphviz;

};

/* EXPORT */

export default generate;
