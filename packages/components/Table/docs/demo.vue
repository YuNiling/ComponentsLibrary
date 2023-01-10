<template>
  <cl-table :data="tableData" style="width: 100%">
    <cl-table-column prop="date" label="Date" width="20%" />
    <cl-table-column prop="name" label="Name" width="20%" />
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
import { onMounted, ref } from 'vue';
import { tableList, tableDelete } from '../../../apis/table';
const tableData = ref([]);

const editClick = (index: number, row) => {
  console.log('editClick', index);
  console.log(row);
};

const removeClick = (index: number, row) => {
  tableDelete({
    id: row.id,
  }).then((res) => {
    if (res.code === 200) {
      console.log('删除成功!');
      loadList();
    }
  });
};

const loadList = () => {
  tableList({
    pageNo: 1,
    pageSize: 5,
  }).then((res) => {
    if (res.code === 200) {
      tableData.value = res.data.list;
    }
  });
};

onMounted(() => {
  loadList();
});
</script>

<style lang="scss">
.toolbar-btns {
  .cl-button {
    margin-right: 5px;
  }
}
</style>
