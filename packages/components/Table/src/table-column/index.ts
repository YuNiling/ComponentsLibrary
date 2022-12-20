import tableColumn from './index.vue';
import { withInstall, withNoopInstall } from '@packages/utils';
import '@packages/theme-chalk/src/table.scss';

export const YlTableColumn = withNoopInstall(tableColumn);
export default YlTableColumn;
