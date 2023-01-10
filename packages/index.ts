import { App } from 'vue';
import '@packages/theme-chalk/global.scss';
import Store from './store/index';
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';
<<<<<<< HEAD
import TableColumn from './components/Table/src/table-column';
// import TableColumn from './components/Table';

const components = [Button, Input, Table, TableColumn];
const install = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp);
=======

const components = [Button, Input, Table];
const install = (app: App) => {
  components.forEach((comp) => {
    for (const component of [comp, ...Object.values(comp.childComp ?? {})]) {
      app.component((component as any).name, component as any);
    }
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
  });
  app.use(Store);
};

export default {
  install,
  ...components,
};
