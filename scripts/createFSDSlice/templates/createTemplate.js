import fs from 'fs/promises';
import resolveRoot from '../helpers/resolveRoot.js';
import createModel from './model/createModel.js';
import createUI from './ui/createUI.js';
import createPublicApi from './createPublicApi.js';
import firstCharLowerCase from '../helpers/firstCharLowerCase.js';

export const createTemplate = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (e) {
    console.log(`Failed to create files and components structure for "${sliceName}" slice. `, e);
  }

  await createModel(layer, firstCharLowerCase(sliceName));
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName);
};
