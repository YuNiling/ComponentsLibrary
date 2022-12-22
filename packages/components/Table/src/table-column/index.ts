import tableColumn from './index.vue';
import { withInstall, withNoopInstall } from '@packages/utils';
import '@packages/theme-chalk/src/table.scss';

export const ClTableColumn = withNoopInstall(tableColumn);
export default ClTableColumn;
