<script setup>
import demo from './demo.vue'
import disabledDemo from  './disabledDemo.vue'
</script>

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

<Preview comp-name="Input" demo-name="demo">
  <demo />
</Preview>

## 禁用状态

通过 disabled 属性指定是否禁用 input 组件

<Preview comp-name="Input" demo-name="disabledDemo">
  <disabled-demo />
</Preview>

# API

## 属性

|  参数   |      说明      |  类型   | 可选值 | 默认值 | 是否必填 |
| :-----: | :------------: | :-----: | :----: | :----: | :------: |
| `type`  |      类型      | string  |   -    |   text    |    否    |
| `model-value / v-model` | 绑定值 | boolean / number |   -    |   -    |    是    |
| `disabled` | 是否禁用 | boolean |   true / false    |   false    |    否    |
