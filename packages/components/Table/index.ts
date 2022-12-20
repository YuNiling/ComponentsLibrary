import table from './src/index.vue';
import tableColumn from './src/table-column/index.vue';
import { withInstall, withNoopInstall } from '@packages/utils';
import '@packages/theme-chalk/src/table.scss';

export const YlTable = withInstall(table, {
  tableColumn,
});
export default YlTable;
export const YlTableColumn = withNoopInstall(tableColumn);
