import { createTemplate } from './templates/createTemplate.js';

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages', 'widgets'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Choose from one of the following layers: ${layers.join(', ')}`);
}

if (!sliceName) {
  throw new Error('Provide a valid slice name.');
}

createTemplate(layer, sliceName);
