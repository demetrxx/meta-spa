import firstCharUpperCase from '../../helpers/firstCharUpperCase.js';

export default (sliceName) => `export interface ${firstCharUpperCase(sliceName)}Schema {
  
}`;
