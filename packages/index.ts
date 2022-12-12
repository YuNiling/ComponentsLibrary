import { App } from 'vue';
import '@packages/theme-chalk/global.scss';
import Button from './components/Button';
import Input from './components/Input';

const components = [Button, Input];
const install = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp);
  });
};

export default {
  install,
  ...components,
};
