<h1 style="width:50vw; text-align:center;">yl.service</h1>

<p align="center" style="width:50vw;">A Vue.js 3 UI library</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

### 代码简介

##### 页面目前有两种主题：默认主题、暗黑主题

<center>
    <img src="https://raw.githubusercontent.com/YuNiling/images/main/custom-components-library/20221214103057.png?token=GHSAT0AAAAAAB4DDDTQ7W5Z4ZCOHJZE7Y2MY4ZICDQ" width="49%" height="300" alt="默认主题">
    <img src="https://raw.githubusercontent.com/YuNiling/images/main/custom-components-library/20221214103153.png?token=GHSAT0AAAAAAB4DDDTQLAA2BIGGALKB4NS6Y4ZICUA" width="49%" height="300" alt="暗黑主题">
</center>

###### 组件主要构成：组件代码、测试代码、说明文档

<center>
<img src="https://raw.githubusercontent.com/YuNiling/images/main/custom-components-library/20221214103326.png?token=GHSAT0AAAAAAB4DDDTRD6VDEBXUBIB5VY4GY4ZIG4Q" width="33%" height="300" alt="代码组件">
<img src="https://raw.githubusercontent.com/YuNiling/images/main/custom-components-library/20221214103407.png?token=GHSAT0AAAAAAB4DDDTQQCYRJAH4ZMVOO64IY4ZII3Q" width="33%" height="300" alt="测试组件">
<img src="https://raw.githubusercontent.com/YuNiling/images/main/custom-components-library/20221214103456.png?token=GHSAT0AAAAAAB4DDDTR5ZXBEOK547NRECSMY4ZIJ2A" width="33%" height="300" alt="说明文档">
</center>

##### 可以通过终端命令操控组件的新增、删除

[演示视频](https://user-images.githubusercontent.com/12172868/145698280-730751be-a3f8-4989-abc2-dcf467362fb1.mp4)

###

## 快速开始

    npm install
    npm run dev

## 组件快速开发

    # 命令式新增组件
    npm run com:create

    # 命令式删除组件
    npm run com:clean

## 构建

    # 代码打包
    npm run build

    # 构建docs实时交互文档库
    npm run build:doc

    # 构建lib组件库
    npm run build:lib

## 代码格式化

    # eslint 检查
    npm run lint

    # prettier 自动格式化
    npm run prettier
