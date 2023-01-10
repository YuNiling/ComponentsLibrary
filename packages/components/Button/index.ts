import button from './src/index.vue';
import { withInstall } from '@packages/utils';
import '@packages/theme-chalk/src/button.scss';

export const ClButton = withInstall(button);
export default ClButton;
