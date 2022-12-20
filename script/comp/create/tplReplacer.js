const fs = require('fs-extra');
const handlebars = require('handlebars');
const { resolve } = require('path');
const { updateScss, updateTheme, updateRouter, updateInstall } = require('../utils.js');

// tpl 文件对应的生成文件目录
const getTplFilePath = (meta) => ({
  // docs 目录
  readme: {
    from: '../template/components/docs/README.md.tpl',
    to: `../../../packages/components/${meta.compName}/docs/README.md`,
  },
  demo: {
    from: '../template/components/docs/demo.vue.tpl',
    to: `../../../packages/components/${meta.compName}/docs/demo.vue`,
  },
  // src 目录
  vue: {
    from: '../template/components/src/index.vue.tpl',
    to: `../../../packages/components/${meta.compName}/src/index.vue`,
  },
  // components 组件目录
  install: {
    from: '../template/components/index.ts.tpl',
    to: `../../../packages/components/${meta.compName}/index.ts`,
  },
  // theme-chalk 目录
  theme: {
    from: '../template/theme-chalk/src/comp.scss.tpl',
    to: `../../../packages/theme-chalk/src/${meta.compVariableName}.scss`,
  },
});

// 新增文件
const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta);
  Object.keys(filePaths).forEach((key) => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8');
    const fileContent = handlebars.compile(fileTpl)(meta);
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, (err) => {
      if (err) console.log(err);
    });
  });
};

// 读取 packages/list.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../../packages/list.json';
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8');
  const listFileContent = JSON.parse(listFileTpl);
  listFileContent.push(meta);
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2);
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, (err) => {
    if (err) console.log(err);
  });
  return listFileContent;
};

module.exports = (meta) => {
  compFilesTplReplacer(meta);
  updateScss(meta, 'add');
  updateTheme(meta, 'add');
  const listFileContent = listJsonTplReplacer(meta);
  updateRouter(listFileContent);
  updateInstall(listFileContent);
  console.log(`组件已创建，请前往 packages/components/${meta.compName} 目录进行开发`);
};
