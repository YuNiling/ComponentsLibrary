import input from './src/index.vue';
import { withInstall } from '@packages/utils';
import '@packages/theme-chalk/src/input.scss';

export const ClInput = withInstall(input);
export default ClInput;
