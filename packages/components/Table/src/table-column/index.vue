<template>
  <!-- <tr v-for="(item, index) in tableData" :key="index" class="cl-table__row">
    <td v-for="(itemProp, propIndex) in headers" :key="propIndex" class="cl-table__cell">
      <div class="cell">{{ item[itemProp.prop] }}</div>
    </td>
  </tr> -->
  <!-- <slot></slot> -->
  <tr v-for="(item, index) in tableData" :key="index" class="cl-table__row">
    <td class="cl-table__cell">
      <div class="cell">
        <slot>{{ item[prop] }}</slot>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  name: 'ClTableColumn',
};
</script>

<script lang="ts" setup>
import { computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';

interface TableColumnProps {
  prop: string;
  label: string;
  width?: string;
}

const props = withDefaults(defineProps<TableColumnProps>(), {
  prop: '',
  label: '',
  width: '',
});

const store = useStore();
const headers = computed(() => store.state.table.headers);
const tableData = computed(() => store.state.table.data);
// const trData = tableData;
// console.log(tableData.value);

watch(
  () => props,
  () => {
    headers.value.push({ ...props });
    store.commit('table/updateHeaders', headers.value);
  },
  {
    deep: true,
    immediate: true,
  }
);

onMounted(() => {
  console.log(headers.value);
  console.log(tableData.value);
  // store.commit('table/updateHeaders', headers);
});
</script>
