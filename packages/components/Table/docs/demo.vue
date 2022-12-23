<template>
  <cl-table :data="tableData" style="width: 100%">
    <cl-table-column prop="date" label="Date" width="20%" />
    <cl-table-column prop="name" label="Name" width="20%">Test</cl-table-column>
    <cl-table-column prop="address" label="Address" />
    <cl-table-column label="操作" width="260">
      <template #default="scope">
        <div class="toolbar-btns">
          <cl-button @click="editClick(scope.index, scope.row)">编辑</cl-button>
          <cl-button type="danger" @click="removeClick(scope.index, scope.row)">删除</cl-button>
        </div>
      </template>
    </cl-table-column>
  </cl-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-01',
    name: 'Tom1',
    address: 'No. 1, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom2',
    address: 'No. 2, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom3',
    address: 'No. 3, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom4',
    address: 'No. 4, Grove St, Los Angeles',
  },
];

const editClick = (index: number, row) => {
  console.log('editClick', index);
  console.log(row);
};

const removeClick = (index: number, row) => {
  console.log('removeClick', index);
  console.log(row);
};
</script>

<style lang="scss">
.toolbar-btns {
  .cl-button {
    margin-right: 5px;
  }
}
</style>
