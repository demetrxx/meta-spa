import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts?(x)');
const files = project.getSourceFiles();

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUIDir = project.getDirectory(uiPath);
const componentsDirs = sharedUIDir?.getDirectories();

// Create Public API for UI kit
// componentsDirs?.forEach((dir) => {
//   const indexFilePath = `${dir.getPath()}/index.ts`;
//   // const indexFile = dir.getSourceFile(indexFilePath);
//   // console.log(indexFile?.getBaseName());
//
//   if (false) {
//     const sourceCode = `export * from './${dir.getBaseName()}'`;
//     const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
//     file.save();
//   }
// });

function getExportStatement(component: string) {
  return `export * from './${component}/${component}';`;
}

const sourceCode = componentsDirs?.map((dir) => getExportStatement(dir.getBaseName())).join('\n');

if (sharedUIDir) {
  const publicAPIFilePath = `${sharedUIDir?.getPath()}/index.ts`;
  const file = sharedUIDir?.createSourceFile(publicAPIFilePath, sourceCode, { overwrite: true });
  file.save();
}

// Refactor code to use UI kit components only from public API
function isAbsolute(value: string) {
  const layers = ['shared', 'entities', 'features', 'widgets', 'pages', 'app'];
  return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const [layer, slice] = valueWithoutAlias.split('/');

    const isSharedLayer = layer === 'shared';
    const isUISlice = slice === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUISlice) {
      const result = valueWithoutAlias.split('/').slice(0, 2).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
