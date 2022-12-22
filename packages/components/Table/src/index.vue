<template>
  <div class="cl-table">
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr class="cl-table__row">
          <th v-for="(item, index) in headers" :key="index" class="cl-table__cell">
            <div class="cell">{{ item.label }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(item, index) in data" :key="index" class="cl-table__row">
          <td v-for="(itemProp, propIndex) in headers" :key="propIndex" class="cl-table__cell">
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
  name: 'ClTable',
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
.cl-button {
  margin-right: 5px;
}
</style>
