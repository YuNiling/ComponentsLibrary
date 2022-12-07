import { App } from 'vue';

export const withInstall = (comp: any) => {
  (comp as any).install = function (app: App): void {
    app.component(comp.name, comp);
  };
  return comp;
};
