import input from './src/index.vue';
import { withInstall } from '@packages/utils';
import '@packages/theme-chalk/src/input.scss';

export const YlInput = withInstall(input);
export default YlInput;
