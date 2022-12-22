<script setup>
import demo from './demo.vue'
</script>

# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

## 基础用法

基础的表格展示用法。

当 el-table 元素中注入 data 对象数组后，在 el-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。 可以使用 width 属性来定义列宽。

<Preview comp-name="Table" demo-name="demo">
  <demo />
</Preview>

## Table 属性

|  参数   |      说明      |  类型   | 可选值 | 默认值 | 是否必填 |
| :-----: | :------------: | :-----: | :----: | :----: | :------: |
| `data`  |  显示的数据  | array  |   -    |   -    |    是    |
