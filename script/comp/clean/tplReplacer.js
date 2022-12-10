const { resolve } = require('path');
const fs = require('fs-extra');
const { delDirFile } = require('../../dirFile/utils.js');
const { updateScss, updateTheme, updateRouter, updateInstall } = require('../utils.js');

// 删除文件
const delFile = (meta) => {
  // 删除 components 目录下的组件
  delDirFile(`./packages/components/${meta.compName}`);
  // 删除  theme-chalk/src 目录下的组件样式
  delDirFile(`./packages/theme-chalk/src/${meta.compVariableName}.scss`);
};

// 更新 packages/list.json
const updateListJson = (meta) => {
  const listFilePath = '../../../packages/list.json';
  const listFile = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8');
  const listFileContent = JSON.parse(listFile);
  const newlistFileContent = listFileContent.filter((item) => item.compName !== meta.compName);
  const newListFileContentFile = JSON.stringify(newlistFileContent, null, 2);
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, (err) => {
    if (err) console.log(err);
  });
  return newlistFileContent;
};

module.exports = (meta) => {
  delFile(meta);
  updateScss(meta, 'delete');
  updateTheme(meta, 'delete');
  const listFileContent = updateListJson(meta);
  updateRouter(listFileContent);
  updateInstall(listFileContent);
  console.log(`组件已成功删除，请前往 packages/components 目录查看`);
};
