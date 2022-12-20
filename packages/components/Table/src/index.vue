<template>
  <div class="yl-table">
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr class="yl-table__row">
          <th class="yl-table__cell" v-for="(item, index) in headers" :key="index">
            <div class="cell">{{ item.label }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(item, index) in data" :key="index" class="yl-table__row">
          <td v-for="(itemProp, propIndex) in headers" :key="propIndex" class="yl-table__cell">
            <div class="cell">
              {{ item[itemProp.prop] }}
            </div>
          </td>
        </tr> -->
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'YlTable',
};
</script>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';

interface TableProps {
  data?: any[];
}

const props = withDefaults(defineProps<TableProps>(), {
  data: [] as any,
});

const store = useStore();
const headers = computed(() => store.state.table.headers);

store.commit('table/updateData', props.data);

onMounted(() => {
  console.log(headers);
});
</script>

<style lang="scss" scoped>
.yl-button {
  margin-right: 5px;
}
</style>
