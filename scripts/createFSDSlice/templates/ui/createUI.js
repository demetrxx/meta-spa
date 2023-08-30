import fs from 'fs/promises';
import resolveRoot from '../../helpers/resolveRoot.js';
import firstCharUpperCase from '../../helpers/firstCharUpperCase.js';
import componentTemplate from './componentTemplate.js';
import storyTemplate from './storyTemplate.js';
import stylesTemplate from './stylesTemplate.js';

export default async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.log(`Failed to create "ui" segment for "${sliceName}" slice. `, e);
    }
  };

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName);
      await fs.mkdir(resolveUIPath(componentName));
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName)
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName)
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.module.scss`),
        stylesTemplate(componentName)
      );
    } catch (e) {
      console.log(`Failed to create ui component for "${sliceName}" slice. `, e);
    }
  };

  await createUIDir();
  await createComponent();
};
