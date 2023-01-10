<<<<<<< HEAD
import table from './src/index.vue';
import tableColumn from './src/table-column/index.vue';
import { withInstall, withNoopInstall } from '@packages/utils';
import '@packages/theme-chalk/src/table.scss';

export const YlTable = withInstall(table, {
  tableColumn,
});
export default YlTable;
export const YlTableColumn = withNoopInstall(tableColumn);
=======
import table from './src/table';
import tableColumn from './src/table-column';
import { withInstall, withNoopInstall } from '@packages/utils';
import '@packages/theme-chalk/src/table.scss';

export const ClTable = withInstall(table, {
  tableColumn,
});
export default ClTable;

export const ClTableColumn = withNoopInstall(tableColumn);
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
