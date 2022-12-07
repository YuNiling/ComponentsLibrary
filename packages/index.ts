import { App } from 'vue';
import '@packages/theme-chalk/global.scss';
import Button from './components/Button';

const components = [Button];
const install = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp);
  });
};

export default {
  install,
  ...components,
};
