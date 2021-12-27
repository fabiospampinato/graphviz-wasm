
/* IMPORT */

import decode from 'decode-base64';
import * as wrapper from '../graphviz/wrapper.js'; //TODO: Replace this with custom bindings & wrapper optimized for speed & size
import {DEFAULT_ENGINE, DEFAULT_FORMAT} from './constants';
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

      await wrapper['graphvizVersion']( '', GRAPHVIZ_BUFFER );

      instance = wrapper['graphviz'];

    },

    /* API */

    layout: async ( source: string, format: Format = DEFAULT_FORMAT, engine: Engine = DEFAULT_ENGINE ): Promise<string> => {

      if ( !instance ) throw new Error ( '[graphviz] You need to call and await "graphviz.loadWASM" first' );

      return instance.layout ( source, format, engine );

    }

  };

};

/* EXPORT */

export default generate;
