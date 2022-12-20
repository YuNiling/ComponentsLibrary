const fs = require('fs-extra');
const { resolve } = require('path');
const handlebars = require('handlebars');

// 更新 var.scss
const updateScss = (meta, operate) => {
  const filePath = `../../packages/theme-chalk/src/common/var.scss`;
  let content = fs.readFileSync(resolve(__dirname, filePath), 'utf-8');
  let txt = `$${meta.compClassName}: () !default;`;
  if (operate === 'add') {
    if (content.indexOf(txt) === -1) {
      content += `\n${txt}`;
    }
  } else {
    if (content.indexOf(txt) !== -1) {
      content = content.replace(txt, '');
    }
    let txt2 = `$${meta.compClassName}: map.merge(`;
    let txt3 = `  $${meta.compClassName}\r\n);`;
    let startIndex = content.indexOf(txt2);
    let endIndex = content.indexOf(txt3) + txt3.length;
    let str = content.substring(startIndex, endIndex);
    if (startIndex !== -1 && endIndex !== -1) {
      content = content.replace(str, '');
    }
  }
  fs.outputFile(resolve(__dirname, filePath), content, (err) => {
    if (err) console.log(err);
  });
};

// 更新 theme.scss
const updateTheme = (meta, operate) => {
  const filePath = `../../packages/theme-chalk/src/common/theme.scss`;
  let content = fs.readFileSync(resolve(__dirname, filePath), 'utf-8');
  let txt = `@include set-component-css-var('${meta.compClassName}', $${meta.compClassName});`;
  if (operate === 'add') {
    if (content.indexOf(txt) === -1) {
      let index = content.lastIndexOf(`);`) + 2;
      content = content.split('');
      content.splice(index, 0, `\n  ${txt}`);
      content = content.join('');
    }
  } else {
    if (content.indexOf(txt) !== -1) {
      content = content.replace(txt, '');
    }
    let startIndex = content.indexOf(txt);
    let endIndex = content.indexOf(txt) + txt.length;
    let str = content.substring(startIndex, endIndex);
    if (startIndex !== -1 && endIndex !== -1) {
      content = content.replace(str, '');
    }
  }
  fs.outputFile(resolve(__dirname, filePath), content, (err) => {
    if (err) console.log(err);
  });
};

// 更新 packages/index.ts
const updateInstall = (listFileContent) => {
  const installFileFrom = './template/index.ts.tpl';
  const installFileTo = '../../packages/index.ts';
  const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), 'utf-8');
  const installMeta = {
    importPlugins: listFileContent
      .map(({ compName }) => `import ${compName} from './components/${compName}';`)
      .join('\n'),
    compName: listFileContent.map(({ compName }) => `${compName}`).join(', '),
  };
  const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta);
  fs.outputFile(resolve(__dirname, installFileTo), installFileContent, (err) => {
    if (err) console.log(err);
  });
};

// 更新 router/index.ts
const updateRouter = (listFileContent) => {
  const routerFileFrom = './template/router/index.ts.tpl';
  const routerFileTo = '../../src/router/index.ts';
  const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), 'utf-8');
  const routerMeta = {
    routes: listFileContent.map((comp) => {
      return `
  {
    title: '${comp.compZhName}',
    name: '${comp.compName}',
    path: '/components/${comp.compName}',
    component: () => import('@packages/components/${comp.compName}/docs/README.md'),
  }`;
    }),
  };
  const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta);
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, (err) => {
    if (err) console.log(err);
  });
};

const handleMeta = (meta) => {
  const kebabCase = (string) =>
    string
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  if (meta.compPlatformName) {
    meta.compName = meta.compPlatformName.split(',')[0];
    meta.platformName = meta.compPlatformName.split(',')[1];
  }
  meta.compClassName = kebabCase(meta.compName);
  meta.compVariableName = meta.compClassName.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
  return meta;
};

module.exports = {
  updateInstall,
  updateRouter,
  handleMeta,
  updateScss,
  updateTheme,
};
