const child_process = require('child_process');

const copyDirFile = (source, target) => {
  child_process.spawnSync('mkdir', ['-p', source, target]);
  child_process.spawnSync('cp', ['-r', , source, target]);
};

const delDirFile = (dirFile) => {
  child_process.spawnSync('rm', ['-rf', dirFile]);
};

module.exports = {
  copyDirFile,
  delDirFile,
};
