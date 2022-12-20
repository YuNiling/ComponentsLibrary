import {{ compClassName }} from './src/index.vue';
import { withInstall } from '@packages/utils';
import '@packages/theme-chalk/src/{{ compClassName }}.scss';

export const Yl{{ compName }} = withInstall({{ compClassName }});
export default Yl{{ compName }};
