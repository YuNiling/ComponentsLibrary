import { App } from 'vue';
import '@packages/theme-chalk/global.scss';
{{ importPlugins }}

const components = [{{compName}}];
const install = (app: App) => {
  components.forEach((comp) => {
    app.component(comp.name, comp);
  });
};

export default {
  install,
  ...components,
};
