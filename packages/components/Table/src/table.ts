import { defineComponent, h } from 'vue';
import { useStore } from 'vuex';
import TableThead from './table-thead';
import TableBody from './table-body';

export default defineComponent({
  name: 'ClTable',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  render() {
    const store = useStore();
    const column = store.state.table.column;
    const hiddenDiv = h(
      'div',
      {
        style: {
          display: 'none',
        },
      },
      this.$slots.default ? this.$slots.default() : ''
    );
    const table = h(
      'table',
      {
        cellpadding: 0,
        cellspacing: 0,
      },
      [
        h(
          'colgroup',
          column.map((v) =>
            h('col', {
              width: v.width,
            })
          )
        ),
        h(TableThead, {
          column,
        }),
        h(TableBody, {
          column,
          data: this.data,
        }),
      ]
    );
    return h(
      'div',
      {
        class: {
          'cl-table': true,
        },
      },
      [hiddenDiv, table]
    );
  },
});
