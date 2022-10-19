module.exports = {
  tabWidth: 2, // 使用2个空格缩进
  jsxSingleQuote: true, // jsx不使用单引号,而使用双引号
  jsxBracketSameLine: false, // jsx标签的反尖括号需要换行
  printWidth: 100, // 超过多少字符强制换行
  singleQuote: true, // 是否使用单引号
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  // 箭头函数参数括号 默认avoid 可选 avoid| always，avoid 能省略括号的时候就省略 例如x => x， always 总是有括号
  arrowParens: 'always',
};
