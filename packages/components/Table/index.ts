import table from './src/table';
import tableColumn from './src/table-column';
import { withInstall, withNoopInstall } from '@packages/utils';
import '@packages/theme-chalk/src/table.scss';

export const ClTable = withInstall(table, {
  tableColumn,
});
export default ClTable;

export const ClTableColumn = withNoopInstall(tableColumn);
