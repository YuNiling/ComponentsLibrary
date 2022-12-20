import { App } from 'vue';
import '@packages/theme-chalk/global.scss';
import Store from './store/index';
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';
import TableColumn from './components/Table/src/table-column';
// import TableColumn from './components/Table';

const components = [Button, Input, Table, TableColumn];
const install = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp);
  });
  app.use(Store);
};

export default {
  install,
  ...components,
};
