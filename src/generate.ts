
/* IMPORT */

import decode from 'decode-base64';
import {DEFAULT_ENGINE, DEFAULT_FORMAT} from './constants';
import {wrapper} from './generate.wrapper';
import {Engine, Format} from './types';

/* MAIN */

const generate = ( GRAPHVIZ_BASE64: string ) => {

  /* HELPERS */

  let instance: any;

  /* GRAPHVIZ */

  return {

    /* LIFECYCLE API */

    loadWASM: async (): Promise<void> => {

      if ( instance ) return;

      const GRAPHVIZ_BUFFER = decode ( GRAPHVIZ_BASE64 );

      instance = await wrapper ({ wasmBinary: GRAPHVIZ_BUFFER });

    },

    /* API */

    layout: ( source: string, format: Format = DEFAULT_FORMAT, engine: Engine = DEFAULT_ENGINE ): string => {

      if ( !instance ) throw new Error ( '[graphviz] You need to call and await "graphviz.loadWASM" first' );

      const graphviz = new instance.Graphviz ();
      const result = graphviz.layout ( source, format, engine );

      instance.destroy ( graphviz );

      if ( !result ) throw new Error ( instance.Graphviz.prototype.lastError () );

      return result;

    }

  };

};

/* EXPORT */

export default generate;
