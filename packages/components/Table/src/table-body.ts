import { defineComponent, h, PropType } from 'vue';

interface IColumn {
  prop?: string;
  label: string;
  width?: string;
  renderCell?: any;
}

export default defineComponent({
  name: 'TableTbody',
  props: {
    column: {
      type: Array as PropType<IColumn[]>,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  render() {
    return h(
      'tbody',
      {},
      this.data.map((row, rowIndex) => {
        return h(
          'tr',
          {
            class: {
              'cl-table__row': true,
            },
          },
          this.column.map((col) => {
            return h(
              'td',
              {
                class: {
                  'cl-table__cell': true,
                },
              },
              [col.renderCell.call(null, { row, column: col, index: rowIndex })]
            );
          })
        );
      })
    );
  },
});
