import { defineComponent, h, PropType } from 'vue';

interface IColumn {
  prop?: string;
  label: string;
  width?: string;
}

export default defineComponent({
  name: 'TableThead',
  props: {
    column: {
      type: Array as PropType<IColumn[]>,
      default: () => [],
    },
  },
  render() {
    return h(
      'thead',
      {},
      h(
        'tr',
        {
          class: {
            'cl-table__row': true,
          },
        },
        this.column.map((v) => {
          return h(
            'th',
            {
              class: {
                'cl-table__cell': true,
              },
            },
            h(
              'div',
              {
                class: {
                  cell: true,
                },
              },
              v.label
            )
          );
        })
      )
    );
  },
});
