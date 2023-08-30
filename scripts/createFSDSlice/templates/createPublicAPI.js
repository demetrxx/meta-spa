import fs from 'fs/promises';
import resolveRoot from '../helpers/resolveRoot.js';
import firstCharUpperCase from '../helpers/firstCharUpperCase.js';

export default async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${firstCharUpperCase(sliceName)}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export type { ${schemaName} } from './model/types/${schemaName}';
`
    );
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};
