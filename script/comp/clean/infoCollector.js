const inquirer = require('inquirer');
const fs = require('fs-extra');
const { resolve } = require('path');
const { handleMeta } = require('../utils.js');

const listFilePath = '../../../packages/list.json';

module.exports = async () => {
  const listData = fs.readJSONSync(resolve(__dirname, listFilePath));
  const choices = listData.map((v) => {
    return {
      name: `${v.compName}（${v.compZhName}）`,
      value: v.compName + ',' + v.platformName,
      platformName: v.platformName,
    };
  });
  const meta = await inquirer.prompt([
    {
      type: 'list',
      message: '请选择你要删除的组件：',
      name: 'compPlatformName',
      choices: choices,
    },
    {
      type: 'confirm',
      message: '确定删除？',
      name: 'confirm',
      default: true,
    },
  ]);
  return handleMeta(meta);
};
