import { defineComponent, h, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ClTableColumn',
  props: {
    prop: {
      type: String,
      default: '',
      required: false,
    },
    label: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
      required: false,
    },
  },
  setup(props, { slots }) {
    interface IColumn {
      prop: string;
      label: string;
      width: string;
      renderCell: any;
    }
    const column: IColumn = {
      prop: props.prop,
      label: props.label,
      width: props.width,
      renderCell: null,
    };
    column.renderCell = function (data) {
      let children: any = null;
      if (slots.default) {
        children = slots.default(data);
      } else {
        const { row, column } = data;
        children = row[column.prop];
      }
      return h(
        'div',
        {
          class: {
            cell: true,
          },
        },
        children
      );
    };
    const store = useStore();
    const row = computed(() => store.state.table.column);
    row.value.push(column);
    store.commit('table/updateColumn', row.value);
  },
  render() {
    return h('div', this.$slots.default);
  },
});
