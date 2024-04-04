
/* IMPORT */

import GRAPHVIZ_BASE64 from '../graphviz/graphviz.js';
import generate from './generate';
import type {Engine, Format} from './types';

/* MAIN */

const Graphviz = generate ( GRAPHVIZ_BASE64 );

/* EXPORT */

export default Graphviz;
export type {Engine, Format};
