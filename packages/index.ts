import { App } from 'vue';
import '@packages/theme-chalk/global.scss';
import Store from './store/index';
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';

const components = [Button, Input, Table];
const install = (app: App) => {
  components.forEach((comp) => {
    for (const component of [comp, ...Object.values(comp.childComp ?? {})]) {
      app.component((component as any).name, component as any);
    }
  });
  app.use(Store);
};

export default {
  install,
  ...components,
};
